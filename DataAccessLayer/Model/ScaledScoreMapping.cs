using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer
{
    public class ScaledScoreMapping
    {
        public int Verbal_INF { get; set; }
        public int Verbal_COM { get; set; }
        public int Verbal_ARI { get; set; }
        public int Verbal_SIM { get; set; }
        public int Verbal_VOC { get; set; }
        public int Verbal_Scaled_Score { get; set; }
        public int Performance_DS { get; set; }
        public int Performance_PC { get; set; }
        public int Performance_SPA { get; set; }
        public int Performance_PA { get; set; }
        public int Performance_OA { get; set; }
        public int Performance_Scaled_Score { get; set; }
    }
}
