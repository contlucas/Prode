using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;

namespace Prode.Api.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Index()
        {
            string html = "<html><head>{0}</head><body>{1}</body></html>";
            html = html.Replace("{0}", "");
            html = html.Replace("{1}", "<div><h1>Bienvenidos al prode</h1><a href='/api/equipos'>Ir a equipos</a></div>");

            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            response.Content = new StringContent(html);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
            return response;
        }
    }
}
