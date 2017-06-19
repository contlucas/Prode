using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace Prode.Utils {
    public static class ProdeUtils {
        public static string Serialize(object obj) {
            try {
                return new JavaScriptSerializer().Serialize(obj);
            }
            catch (Exception ex) {
                throw;
            }
        }

        public static object Deserialize<T>(string str) {
            try {
                return new JavaScriptSerializer().Deserialize<T>(str);
            }
            catch (Exception ex) {
                throw;
            }
        }

        public static HttpResponseMessage CreateResponse(string message, HttpStatusCode status, string mediaType = "application/json") {
            var response = new HttpResponseMessage();
            response.StatusCode = status;
            response.Content = new StringContent(message);
            response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue(mediaType);
            return response;
        }

        public static HttpResponseMessage CreateResponse(object element, HttpStatusCode status, string mediaType = "application/json") {
            string message = Serialize(element);
            return CreateResponse(message, status, mediaType);
        }
    }
}
