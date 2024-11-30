using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using The_Potters_House_Bloemfontein_Web_App.Models;

namespace The_Potters_House_Bloemfontein_Web_App.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Events()
        {
            return View();
        }

        public IActionResult Ministries()
        {
            return View();
        }

        public IActionResult Homecell()
        {
            return View();
        }

        public IActionResult PraiseAndWorship()
        {
            return View();
        }

        public IActionResult Ushers()
        {
            return View();
        }

        public IActionResult SoundAndMedia()
        {
            return View();
        }

        public IActionResult SundaySchool()
        {
            return View();
        }

        public IActionResult Outreach()
        {
            return View();
        }

        public IActionResult Giving()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult ChurchTransport()
        {
            return View();
        }

        public IActionResult ChurchChannel()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
