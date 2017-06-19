using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Prode.Api {
    public class ProdeApiException : Exception {
        public HttpStatusCode CodigoEstado { get; set; }

        public ProdeApiException() {

        }

        public ProdeApiException(string mensaje) : base(mensaje) {

        }

        public ProdeApiException(string message, HttpStatusCode codigoEstado)
            : base(message) {
            this.CodigoEstado = codigoEstado;
        }
    }
}