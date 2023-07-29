using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Customers.Models;

public partial class Customer
{
    [Key]
    public long Codigo { get; set; }

    public string TipoDocumento { get; set; } = null!;

    public long NumeroDocumento { get; set; }

    public string Nombres { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public string Genero { get; set; } = null!;

    public DateTime FechaNacimiento { get; set; }

    public string Direcciones { get; set; } = null!;

    public string Telefonos { get; set; } = null!;

    public string Emails { get; set; } = null!;
}
