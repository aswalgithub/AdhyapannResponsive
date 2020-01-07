using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer;

namespace Adhyapann_Project.Models
{
    public class Questions
    {
        public List<Question> lstQuestion { get; set; }
    }

    //public class IQandPercentiles
    //{
    //    public List<IQandPercentile> qandPercentiles { get; set; }
    //}

    public class StudentTestScores
    {
        public List<StudentTestInfo> studentTestScore { get; set; }
    }

    //public class ScaledScores
    //{
    //    public List<ScaledScore> scaledScore { get; set; }
    //}
}
