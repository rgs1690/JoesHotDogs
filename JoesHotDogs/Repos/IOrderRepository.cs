using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IOrderRepository
    {
        public List<Order> GetAllOrders();
        Order GetOrderById(string Id);

        void CreateOrder(Order order);
        void UpdateOrder(Order order);
        void DeleteOrder(Order order);
        List<Order> GetOrdersByUserId(string UserId);
    }
}
