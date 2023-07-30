using System;
using System.Collections.Generic;

namespace Customers.Models;

public partial class TipoDocumento
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Codigo { get; set; }
}
