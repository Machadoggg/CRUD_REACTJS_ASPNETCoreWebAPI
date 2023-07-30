using Customers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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


        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> GetAllCustomersAsync()
        {
            List<Customer> customersList = await _context.Customers.OrderBy(c => c.Nombres).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, customersList);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> PostCustomerAsync([FromBody] Customer request)
        {
            await _context.Customers.AddAsync(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> PutCustomerAsync([FromBody] Customer customer)
        {
            _context.Customers.Update(customer);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> DeleteCustomerAsync(int id)
        {
            Customer customer = _context.Customers.FirstOrDefault(c => c.Codigo == id)!;

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }



        [HttpGet]
        [Route("ListaGeneros")]
        public async Task<IActionResult> GetAllGendersAsync()
        {
            List<Genero> GenderList = await _context.Generos.OrderBy(c => c.Nombre).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, GenderList);
        }

        [HttpGet]
        [Route("ListaTipoDocumento")]
        public async Task<IActionResult> GetAllDocumentAsync()
        {
            List<TipoDocumento> TipoDocumentoList = await _context.TipoDocumentos.OrderBy(c => c.Nombre).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, TipoDocumentoList);
        }

    }
}
