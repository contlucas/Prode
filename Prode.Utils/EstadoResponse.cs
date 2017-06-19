using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prode.Utils {
    [Serializable]
    public class EstadoResponse {
        public EstadoCode Estado { get; set; }
        public string Descripcion { get; set; }
        public object Data { get; set; }
    }

    public enum EstadoCode {
        Error = -1,
        Ok = 0
    }
}
