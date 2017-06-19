using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Prode.Api {
    public static class WebApiConfig {
        public static void Register(HttpConfiguration config) {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Api1",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new {
                    controller = "Home",
                    action = "Index",
                    id = RouteParameter.Optional
                }
            );

            config.Routes.MapHttpRoute(
                name: "Api2",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Api3",
                routeTemplate: "{controller}/{id}",
                defaults: new {
                    controller = "Home",
                    id = RouteParameter.Optional
                }
            );
        }
    }
}
