using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Student
    {
        public int Package_ID { get; set; }
        public string Package_Name { get; set; }
        public string Name { get; set; }
        public string School_Name { get; set; }

     
        public string Gender { get; set; }
        public string Email_ID { get; set; }
        public string DOB { get; set; }
        public string Age { get; set; }

        public string Class { get; set; }

        public string Reference_Code { get; set; }

        public string TestDate { get; set; }

        public bool Completed { get; set; }
        public bool Verbal_INF_Completed { get; set; }
        public bool Verbal_COM_Completed { get; set; }
        public bool Verbal_ARI_Completed { get; set; }
        public bool Verbal_VOC_Completed { get; set; }
        public bool Verbal_SIM_Completed { get; set; }
        public bool Performance_DS_Completed { get; set; }
        public bool Performance_PC_Completed { get; set; }
        public bool Performance_SPA_Completed { get; set; }
        public bool Performance_PA_Completed { get; set; }
        public bool Performance_OA_Completed { get; set; }
        public bool ER_Completed { get; set; }

    }
}
