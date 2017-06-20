using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Prode.Api {
    /// <summary>
    /// 
    /// </summary>
    public class ProdeApiException : Exception {
        /// <summary>
        /// 
        /// </summary>
        public HttpStatusCode CodigoEstado { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public ProdeApiException() {

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="mensaje"></param>
        public ProdeApiException(string mensaje) : base(mensaje) {

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        /// <param name="codigoEstado"></param>
        public ProdeApiException(string message, HttpStatusCode codigoEstado)
            : base(message) {
            this.CodigoEstado = codigoEstado;
        }
    }
}