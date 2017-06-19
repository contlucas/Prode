using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prode.Api.Models
{
    public class EquipoModel
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaAlta { get; set; }
    }
}