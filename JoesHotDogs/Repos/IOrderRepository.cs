using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IOrderRepository
    {
        public List<Order> GetAllOrders();
        Order GetOrderById(int Id);

        void CreateOrder(Order order);
        void UpdateOrder(Order order);
        void DeleteOrder(int id);
        List<Order> GetOrdersByUserId(int UserId);
        List<HotDogOrder> GetHotDogOrdersByOrderId(int OrderId);
        void UpdateHotDogOrder(HotDogOrder hotDogOrder);
        void DeleteHotDogOrder(int id);
        void CreateHotDogOrder(HotDogOrder order);
        HotDogOrder GetHotDogOrderById(int id);
    }
}
