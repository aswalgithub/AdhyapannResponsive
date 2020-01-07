using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer
{
    public class IQandPercentileMapping
    {
       public int Total_Scaled_Verbal_Score { get; set; }
       public int Scaled_Verbal_Score_IQ { get; set; }
       public int Scaled_Verbal_Score_Percentile { get; set; }
       public int Total_Scaled_Performance_Score { get; set; }
       public int Scaled_Performance_Score_IQ { get; set; }
       public int Scaled_Performance_Score_Percentile { get; set; }
       public int Full_Score { get; set; }
       public int Full_Score_IQ { get; set; }
       public int Full_Score_Percentile { get; set; }
    }
}
