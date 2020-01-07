
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DataAccessLayer;

namespace Adhyapann_Project.Models
{
    public class MasterData
    {
        [Required]
        public int Shared_ID { get; set; }

        public IEnumerable<SelectListItem> boolOptionShared { get; set; }

        [Required]
        public int EmailDecision_ID { get; set; }

        public IEnumerable<SelectListItem> boolOptionEmailDecision { get; set; }

        [Required]
        public string[] Test_Name { get; set; }

        public MultiSelectList Tests { get; set; }
    }
}
