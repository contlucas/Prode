using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prode.Api.Models
{
    public class EncuentroModel
    {
        public int Id { get; set; }
        public int IdLocal { get; set; }
        public string NombreLocal { get; set; }
        public int IdVisitante { get; set; }
        public string NombreVisitante { get; set; }
        public int Fecha { get; set; }
        public DateTime FechaAlta { get; set; }
    }
}