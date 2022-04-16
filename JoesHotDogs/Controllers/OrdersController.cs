using JoesHotDogs.Models;
using JoesHotDogs.Repos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JoesHotDogs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {

        private readonly IOrderRepository _orderRepo;

        public OrdersController(IOrderRepository orderRepo)
        {
            _orderRepo = orderRepo;
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            List<Order> orders = _orderRepo.GetAllOrders();
            if (orders == null) return NotFound();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public IActionResult GetOrderById(string id)
        {
            var match = _orderRepo.GetOrderById(id);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        [HttpPost]
        public IActionResult CreateNewOrder(Order newOrder)
        {
            if (newOrder == null)
            {
                return NotFound();
            }
            else
            {
                _orderRepo.CreateOrder(newOrder);
                return Ok(newOrder);
            }
        }





        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _orderRepo.DeleteOrder(id);
        }



    }
}
