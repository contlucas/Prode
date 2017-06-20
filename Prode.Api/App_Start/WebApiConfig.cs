using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Prode.Api {
    /// <summary>
    /// 
    /// </summary>
    public static class WebApiConfig {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="config"></param>
        public static void Register(HttpConfiguration config) {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "Api1",
            //    routeTemplate: "api/{controller}/{action}/{id}",
            //    defaults: new {
            //        controller = "Home",
            //        action = "Index",
            //        id = RouteParameter.Optional
            //    }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "Api2",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            config.Routes.MapHttpRoute(
                name: "Api3",
                routeTemplate: "api/v1/{controller}/{action}/{id}",
                defaults: new {
                    controller = "Home",
                    action = "Index",
                    id = RouteParameter.Optional
                }
            );
        }
    }
}
