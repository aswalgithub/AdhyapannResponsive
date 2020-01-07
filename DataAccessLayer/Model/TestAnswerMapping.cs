using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class TestAnswerMapping
    {
        public string Category { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }

        public string SubmittedAnswer { get; set; }

        public int Correct { get; set; }
    }
}
