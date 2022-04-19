using JoesHotDogs.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace JoesHotDogs.Repos
{
    public class HotDogOrderRepository : IHotDogOrderRepository
    {
        private readonly IConfiguration _config;
        public HotDogOrderRepository(IConfiguration config)
        {
            _config = config;
        }
        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }
        public List<HotDogOrder> GetAllHotDogOrders()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, HotdogID, OrderId
                    FROM HotDogOrder 
                ";
                    SqlDataReader reader = cmd.ExecuteReader();
    
                        List<HotDogOrder> hotDogOrders = new List<HotDogOrder>();
                        while (reader.Read())
                        {
                            HotDogOrder hotDogOrder = new HotDogOrder()
                            {
                                Id = reader.GetString(reader.GetOrdinal("Id")),
                               hotdogID = reader.GetString(reader.GetOrdinal("HotdogID")),
                               orderId = reader.GetString(reader.GetOrdinal("OrderId")),
                            };
                        hotDogOrders.Add(hotDogOrder);                        
                    }
                reader.Close();
                return hotDogOrders;
                }
            }
        }
    }
}
