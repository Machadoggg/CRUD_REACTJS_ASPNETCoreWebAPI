using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Customers.Models;

namespace Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerReactContext _context;

        public CustomerController(CustomerReactContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //[Route("Lista")]
        //public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        //{
        //  if (_context.Customers == null)
        //  {
        //      return NotFound();
        //  }
        //    return Ok(await _context.Customers.OrderByDescending(c => c.Nombres).ToListAsync());
        //}
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> GetAllCustomersAsync()
        {
            List<Customer> customersList = await _context.Customers.OrderByDescending(c => c.Nombres).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, customersList);
        }



        //[HttpPost]
        //[Route("Guardar")]
        //public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        //{
        //    if (_context.Customers == null)
        //    {
        //        return Problem("Entity set 'CustomerReactContext.Customers'  is null.");
        //    }
        //    _context.Customers.Add(customer);
        //    await _context.SaveChangesAsync();
        //    return CreatedAtAction("GetCustomer", new { id = customer.Codigo }, customer);
        //}
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> PostCustomerAsync([FromBody] Customer request)
        {
            await _context.Customers.AddAsync(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }



        //[HttpPut("{id}")]
        //[Route("Editar")]
        //public async Task<IActionResult> PutCustomer(long id, Customer customer)
        //{
        //    if (id != customer.Codigo)
        //    {
        //        return BadRequest();
        //    }
        //    _context.Entry(customer).State = EntityState.Modified;
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CustomerExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }
        //    return NoContent();
        //}
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> PutCustomerAsync([FromBody] Customer customer)
        {
            _context.Customers.Update(customer);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }



        //[HttpDelete("{id}")]
        //[Route("Eliminar")]
        //public async Task<IActionResult> DeleteCustomer(long id)
        //{
        //    if (_context.Customers == null)
        //    {
        //        return NotFound();
        //    }
        //    var customer = await _context.Customers.FindAsync(id);
        //    if (customer == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.Customers.Remove(customer);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> DeleteCustomerAsync(int id)
        {
            Customer customer = _context.Customers.Find(id)!;

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }









        //[HttpGet("{id}")]
        //public async Task<ActionResult<Customer>> GetCustomer(long id)
        //{
        //  if (_context.Customers == null)
        //  {
        //      return NotFound();
        //  }
        //    var customer = await _context.Customers.FindAsync(id);

        //    if (customer == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(customer);
        //}

        

        //private bool CustomerExists(long id)
        //{
        //    return (_context.Customers?.Any(e => e.Codigo == id)).GetValueOrDefault();
        //}
    }
}
