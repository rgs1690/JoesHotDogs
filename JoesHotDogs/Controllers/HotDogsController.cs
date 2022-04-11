using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JoesHotDogs.Controllers
{
    public class HotDogsController : Controller
    {
        // GET: HotDogsController
        public ActionResult Index()
        {
            return View();
        }

        // GET: HotDogsController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: HotDogsController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: HotDogsController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HotDogsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: HotDogsController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HotDogsController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: HotDogsController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
