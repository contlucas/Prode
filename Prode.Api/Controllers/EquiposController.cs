using Prode.Api.Models;
using Prode.Context;
using Prode.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Prode.Api.Controllers {
    /// <summary>
    /// 
    /// </summary>
    [EnableCors("*", "*", "*")]
    public class EquiposController : ApiController {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<EquipoModel> Index() {
            return this.GetAll();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="element"></param>
        /// <returns></returns>
        [HttpPost]
        [ActionName("Create")]
        public HttpResponseMessage CreateEquipo(EquipoModel element) {
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var equipo = new Equipo();
                    equipo.FechaAlta = DateTime.Now;
                    equipo.Nombre = element.Nombre;

                    db.Equipo.Add(equipo);
                    db.SaveChanges();

                    return ProdeUtils.CreateResponse(new EstadoResponse() {
                        Estado = EstadoCode.Ok,
                        Descripcion = "Equipo creado correctamente",
                        Data = "no implementado"
                    }, HttpStatusCode.Created);
                }
            }
            catch (ProdeApiException ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, ex.CodigoEstado);
            }
            catch (Exception ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, HttpStatusCode.InternalServerError);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="element"></param>
        /// <returns></returns>
        [HttpPost]
        [ActionName("Update")]
        public HttpResponseMessage UpdateEquipo(EquipoModel element) {
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var equipo = db.Equipo.Find(element.Id);
                    if (equipo == null) {
                        throw new ProdeApiException("Equipo no encontrado", HttpStatusCode.NotFound);
                    }
                    equipo.Nombre = element.Nombre;

                    db.Entry(equipo).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                    return ProdeUtils.CreateResponse(new EstadoResponse() {
                        Estado = EstadoCode.Ok,
                        Descripcion = "Actualizado correctamente",
                        Data = "no implementado"
                    }, HttpStatusCode.OK);
                }
            }
            catch (ProdeApiException ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, ex.CodigoEstado);
            }
            catch (Exception ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, HttpStatusCode.InternalServerError);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [ActionName("Delete")]
        public HttpResponseMessage DeleteEquipo(int id) {
            EstadoResponse estado = new EstadoResponse();
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var equipo = db.Equipo.Find(id);
                    if (equipo == null) {
                        throw new ProdeApiException("Equipo no encontrado", HttpStatusCode.NotFound);
                    }

                    db.Entry(equipo).State = System.Data.Entity.EntityState.Deleted;
                    db.SaveChanges();

                    return ProdeUtils.CreateResponse(new EstadoResponse() {
                        Estado = EstadoCode.Ok,
                        Descripcion = "Eliminado correctamente",
                        Data = "no implementado"
                    }, HttpStatusCode.OK);
                }
            }
            catch (ProdeApiException ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, ex.CodigoEstado);
            }
            catch (Exception ex) {
                return ProdeUtils.CreateResponse(new EstadoResponse() {
                    Estado = EstadoCode.Error,
                    Descripcion = ex.Message,
                    Data = "no implementado"
                }, HttpStatusCode.InternalServerError);
            }
        }

        private IEnumerable<EquipoModel> GetAll() {
            var equipos = new List<EquipoModel>();
            using (ProdeDB db = new ProdeDB()) {
                foreach (var i in db.Equipo.ToList()) {
                    equipos.Add(this.CreateEquipoModelElement(i));
                }
                return equipos;
            }
        }

        private EquipoModel CreateEquipoModelElement(Equipo element, bool createNew = false) {
            if (element != null) {
                return new EquipoModel() {
                    FechaAlta = element.FechaAlta,
                    Id = element.Id,
                    Nombre = element.Nombre
                };
            }
            else {
                if (createNew) {
                    return new EquipoModel();
                }
                else {
                    return null;
                }
            }
        }

        private Equipo CreateEquipoElement(Equipo element, bool createNew = false) {
            if (element != null) {
                return new Equipo() {
                    FechaAlta = element.FechaAlta,
                    Id = element.Id,
                    Nombre = element.Nombre
                };
            }
            else {
                if (createNew) {
                    return new Equipo();
                }
                else {
                    return null;
                }
            }
        }
    }
}
