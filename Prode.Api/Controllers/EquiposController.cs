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
    public class EquiposController : ApiController {
        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<EquipoModel> Index() {
            return this.GetAll();
        }

        [HttpPost]
        [ActionName("Create")]
        public HttpResponseMessage CreateEquipo(EquipoModel element) {
            EstadoResponse estado = new EstadoResponse();
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var equipo = new Equipo();
                    equipo.FechaAlta = DateTime.Now;
                    equipo.Nombre = element.Nombre;

                    db.Equipo.Add(equipo);
                    db.SaveChanges();

                    estado.Estado = EstadoCode.Ok;
                    estado.Descripcion = "Creado correctamente";
                    estado.Data = this.CreateEquipoModel(equipo);
                    return ProdeUtils.CreateResponse(estado, HttpStatusCode.Created);
                }
            }
            catch (ProdeApiException ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, ex.CodigoEstado);
            }
            catch (Exception ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [ActionName("Update")]
        public HttpResponseMessage UpdateEquipo(EquipoModel element) {
            EstadoResponse estado = new EstadoResponse();
            try {
                using (ProdeDB db = new ProdeDB()) {
                    var equipo = db.Equipo.Find(element.Id);
                    if (equipo == null) {
                        throw new ProdeApiException("Equipo no encontrado", HttpStatusCode.NotFound);
                    }
                    equipo.Nombre = element.Nombre;

                    db.Entry(equipo).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                    estado.Estado = EstadoCode.Ok;
                    estado.Descripcion = "Actualizado correctamente";
                    estado.Data = this.CreateEquipoModel(equipo);
                    return ProdeUtils.CreateResponse(estado, HttpStatusCode.OK);
                }
            }
            catch (ProdeApiException ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, ex.CodigoEstado);
            }
            catch (Exception ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, HttpStatusCode.InternalServerError);
            }
        }

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

                    estado.Estado = EstadoCode.Ok;
                    estado.Descripcion = "Eliminado correctamente";
                    estado.Data = this.CreateEquipoModel(equipo);
                    return ProdeUtils.CreateResponse(estado, HttpStatusCode.OK);
                }
            }
            catch (ProdeApiException ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, ex.CodigoEstado);
            }
            catch (Exception ex) {
                estado.Estado = EstadoCode.Error;
                estado.Descripcion = ex.Message;
                return ProdeUtils.CreateResponse(estado, HttpStatusCode.InternalServerError);
            }
        }

        private IEnumerable<EquipoModel> GetAll() {
            var equipos = new List<EquipoModel>();
            using (ProdeDB db = new ProdeDB()) {
                foreach (var i in db.Equipo.ToList()) {
                    equipos.Add(this.CreateEquipoModel(i));
                }
                return equipos;
            }
        }

        private EquipoModel CreateEquipoModel(Equipo element, bool createNew = false) {
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
    }
}
