using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer
{
    public class Question
    {
        public int Question_ID { get; set; }
        public int SubTest_ID { get; set; }
        public int Sub_Test_Timer { get; set; }
        public int Sub_Test_Wait_Timer { get; set; }
        public  bool Is_Practice_Question { get; set; }
        public int Question_Order { get; set; }
        public string Question_Query { get; set; }
        public string Image_Path { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public string Option5 { get; set; }
        public string Correct_Answer { get; set; }
        public string SubTest_Name { get; set; }
    }
}
