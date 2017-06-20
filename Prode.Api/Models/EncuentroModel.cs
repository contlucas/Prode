using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prode.Api.Models {
    /// <summary>
    /// 
    /// </summary>
    public class EncuentroModel {
        /// <summary>
        /// 
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int IdLocal { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string NombreLocal { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int IdVisitante { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string NombreVisitante { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int Fecha { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime FechaAlta { get; set; }
    }
}