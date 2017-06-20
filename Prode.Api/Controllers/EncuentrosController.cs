using Prode.Api.Models;
using Prode.Context;
using Prode.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Prode.Api.Controllers {
    /// <summary>
    /// 
    /// </summary>
    public class EncuentrosController : ApiController {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<EncuentroModel> Index() {
            return this.GetAll();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public EncuentroModel GetEncuentroById(int id = 0) {
            return this.GetOneWithPredicate((x => x.Id == id));
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<EncuentroModel> GetEncuentrosByFecha(int id = 0) {
            return this.GetListWithPredicate((x => x.Fecha == id));
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="element"></param>
        /// <returns></returns>
        [HttpPost]
        [ActionName("Create")]
        public HttpResponseMessage CreateEncuentro(EncuentroModel element) {
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var encuentro = this.CreateEncuentroElement(element);
                    encuentro.FechaAlta = DateTime.Now;

                    db.Encuentro.Add(encuentro);
                    db.SaveChanges();

                    return ProdeUtils.CreateResponse(new EstadoResponse() {
                        Estado = EstadoCode.Ok,
                        Descripcion = "Encuentro creado correctamente"
                    }, HttpStatusCode.Created);
                }
            }
            catch (ProdeApiException ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message
                }, ex.CodigoEstado);
            }
            catch (Exception ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message
                }, HttpStatusCode.InternalServerError);
            }
        }

        private IEnumerable<EncuentroModel> GetAll() {
            var encuentros = new List<EncuentroModel>();
            using (ProdeDB db = new ProdeDB()) {
                foreach (var i in db.Encuentro.ToList()) {
                    encuentros.Add(this.CreateEncuentroModelElement(i));
                }
                return encuentros;
            }
        }

        private EncuentroModel GetOneWithPredicate(Func<Encuentro, bool> predicate) {
            using (ProdeDB db = new ProdeDB()) {
                var result = db.Encuentro.Where(predicate).FirstOrDefault();
                return this.CreateEncuentroModelElement(result);
            }
        }

        private List<EncuentroModel> GetListWithPredicate(Func<Encuentro, bool> predicate) {
            using (ProdeDB db = new ProdeDB()) {
                var result = db.Encuentro.Where(predicate).ToList();
                var encuentros = new List<EncuentroModel>();
                foreach (var i in result) {
                    encuentros.Add(this.CreateEncuentroModelElement(i));
                }
                return encuentros;
            }
        }

        private EncuentroModel CreateEncuentroModelElement(Encuentro element, bool createNew = false) {
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

        private Encuentro CreateEncuentroElement(EncuentroModel element, bool createNew = false) {
            if (element != null) {
                return new Encuentro() {
                    Fecha = element.Fecha,
                    FechaAlta = element.FechaAlta,
                    Id = element.Id,
                    IdLocal = element.IdLocal,
                    IdVisitante = element.IdVisitante
                };
            }
            else {
                if (createNew) {
                    return new Encuentro();
                }
                else {
                    return null;
                }
            }
        }
    }
}
