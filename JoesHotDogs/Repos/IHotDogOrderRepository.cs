namespace JoesHotDogs.Repos
    using DogGo.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
{
    public interface IHotDogOrderRepository
    {
        List<HotDogOrder> GetAllHotDogOrders();
    }
}
