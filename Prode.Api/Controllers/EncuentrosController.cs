using Prode.Api.Models;
using Prode.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Prode.Api.Controllers {
    public class EncuentrosController : ApiController {
        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<EncuentroModel> Index() {
            return this.GetAll();
        }

        [HttpGet]
        public EncuentroModel GetEncuentroById(int id = 0) {
            return this.GetOneWithPredicate((x => x.Id == id));
        }

        [HttpGet]
        public IEnumerable<EncuentroModel> GetEncuentrosByFecha(int id = 0) {
            return this.GetListWithPredicate((x => x.Fecha == id));
        }

        private IEnumerable<EncuentroModel> GetAll() {
            var encuentros = new List<EncuentroModel>();
            using (ProdeDB db = new ProdeDB()) {
                foreach (var i in db.Encuentro.ToList()) {
                    encuentros.Add(this.CreateEncuentroModel(i));
                }
                return encuentros;
            }
        }

        private EncuentroModel GetOneWithPredicate(Func<Encuentro, bool> predicate) {
            using (ProdeDB db = new ProdeDB()) {
                var result = db.Encuentro.Where(predicate).FirstOrDefault();
                return this.CreateEncuentroModel(result);
            }
        }

        private List<EncuentroModel> GetListWithPredicate(Func<Encuentro, bool> predicate) {
            using (ProdeDB db = new ProdeDB()) {
                var result = db.Encuentro.Where(predicate).ToList();
                var encuentros = new List<EncuentroModel>();
                foreach (var i in result) {
                    encuentros.Add(this.CreateEncuentroModel(i));
                }
                return encuentros;
            }
        }

        private EncuentroModel CreateEncuentroModel(Encuentro element, bool createNew = false) {
            if (element != null) {
                return new EncuentroModel() {
                    Fecha = element.Fecha,
                    FechaAlta = element.FechaAlta,
                    Id = element.Id,
                    IdLocal = element.IdLocal,
                    IdVisitante = element.IdVisitante,
                    NombreLocal = element.Equipo.Nombre,
                    NombreVisitante = element.Equipo1.Nombre
                };
            }
            else {
                if (createNew) {
                    return new EncuentroModel();
                }
                else {
                    return null;
                }
            }
        }
    }
}
