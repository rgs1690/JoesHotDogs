//using JoesHotDogs.Models;
//using JoesHotDogs.Repos;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace JoesHotDogs.Controllers
//{
//    public class HotDogOrdersController : Controller
//    {
//        private readonly IHotDogOrderRepository _hotDogOrderRepo;
//        // GET: HotDogOrdersController
//        public HotDogOrdersController(IHotDogOrderRepository hotDogOrderRepository)
//        {
//            _hotDogOrderRepo = hotDogOrderRepository;
//        }

//        // GET: HotDogOrdersController
//        public ActionResult Index()
//        {
//            List<HotDogOrder> hotdogOrder = _hotDogOrderRepo.GetAllHotDogOrders();
//            return View(hotdogOrder);
//        }
//        // GET: HotDogOrdersController/Details/5
//        public ActionResult Details(int id)
//        {
//            HotDogOrder hotdogOrder = _hotDogOrderRepo.GetHotDogOrderById(id);

//            if (hotdogOrder == null)
//            {
//                return NotFound();
//            }

//            return View(hotdogOrder);
//        }


//        // GET: HotDogOrdersController/Create
//        public ActionResult Create()
//        {
//            return View();
//        }

//        // POST: HotDogOrdersController/Create
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Create(IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }

//        // GET: HotDogOrdersController/Edit/5
//        public ActionResult Edit(int id)
//        {
//            return View();
//        }

//        // POST: HotDogOrdersController/Edit/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Edit(int id, IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }

//        // GET: HotDogOrdersController/Delete/5
//        public ActionResult Delete(int id)
//        {
//            return View();
//        }

//        // POST: HotDogOrdersController/Delete/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Delete(int id, IFormCollection collection)
//        {
//            try
//            {
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }
//    }
//}
