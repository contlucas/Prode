﻿using Prode.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prode.Web.Controllers {
    public class HomeController : Controller {
        // GET: Home
        public ActionResult Index() {
            var reactComponent = new ReactComponent() {
                BundleName = "home"
            };

            return View("Index", reactComponent);
        }

        public ActionResult Equipo() {
            var reactComponent = new ReactComponent() {
                BundleName = "equipo"
            };

            return View("Index", reactComponent);
        }

        public ActionResult Encuentro() {
            var reactComponent = new ReactComponent() {
                BundleName = "encuentro"
            };

            return View("Index", reactComponent);
        }
    }
}