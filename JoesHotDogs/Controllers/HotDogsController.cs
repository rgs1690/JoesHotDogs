using JoesHotDogs.Models;
using JoesHotDogs.Repos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JoesHotDogs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotDogsController : Controller
    {
        private readonly IHotDogRepository _hotDogRepo;

        public HotDogsController(IHotDogRepository hotDogRepository)
        {
            _hotDogRepo = hotDogRepository;
        }
        [HttpGet]
        public IActionResult Index()
        {
            List<HotDog> hotdogs = _hotDogRepo.GetAllHotDogs();
            if (hotdogs == null) return NotFound();
            return Ok(hotdogs);
        }

        [HttpGet("{id}")]
        public IActionResult Details(int id)
        {
            var match = _hotDogRepo.GetHotDogById(id);

            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
    }
}
        // GET: HotDogsController/Create
    //    public ActionResult Create()
    //    {
    //        return View();
    //    }

    //    // POST: HotDogsController/Create
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Create(IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

    //    // GET: HotDogsController/Edit/5
    //    public ActionResult Edit(int id)
    //    {
    //        return View();
    //    }

    //    // POST: HotDogsController/Edit/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Edit(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

    //    // GET: HotDogsController/Delete/5
    //    public ActionResult Delete(int id)
    //    {
    //        return View();
    //    }

    //    // POST: HotDogsController/Delete/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Delete(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

