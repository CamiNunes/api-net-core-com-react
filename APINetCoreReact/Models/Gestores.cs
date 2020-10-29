using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APINetCoreReact.Models
{
    public class Gestores
    {   
        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }

        public int Lancamento { get; set; }

        public string Desenvolvedor { get; set; }
    }
}
