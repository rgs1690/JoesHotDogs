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
        public IActionResult GetOrderById(int id)
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

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(Order order)
        {
            int id = order.Id;
            var match = _orderRepo.GetOrderById(id);

            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _orderRepo.UpdateOrder(order);
                return Ok(order);
            }
            
        }
    


        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _orderRepo.DeleteOrder(id);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetOrderByUserId(string userId)
        {
            var matches = _orderRepo.GetOrdersByUserId(userId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }

        

        [HttpGet("hotDogOrder/{orderId}")]
        public IActionResult GetHotDogOrdersByOrderId(int orderId)
        {
            var matches = _orderRepo.GetHotDogOrdersByOrderId(orderId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }
       
        
        [HttpPost("hotDogOrder")]
        public IActionResult CreateNewHotDogOrder(HotDogOrder newHotDogOrder)
        {
            if (newHotDogOrder == null)
            {
                return NotFound();
            }
            else
            {
                _orderRepo.CreateHotDogOrder(newHotDogOrder);
                return Ok(newHotDogOrder);
            }
        }


        [HttpPatch("hotDogOrder/{id}")]
        public IActionResult UpdateHotDogOrder(HotDogOrder hotDogOrder)
        {
            int id = hotDogOrder.Id;
            var match = _orderRepo.GetHotDogOrderById(id);

            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _orderRepo.UpdateHotDogOrder(hotDogOrder);
                return Ok(hotDogOrder);
            }

        }
        [HttpDelete("hotDogOrder/{id}")]
        public void DeleteHotDogOrder(int id)
        {
            _orderRepo.DeleteHotDogOrder(id);
        }

    }
}
