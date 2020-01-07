using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using Adhyapann_Project.Models;

namespace Adhyapan_Project.Controllers
{
    public class AuthController : Controller
    {
       

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Authenticate()
        {

            return RedirectToAction("Login", "Admin");
        }
        

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public ActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
