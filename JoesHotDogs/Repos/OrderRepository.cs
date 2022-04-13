using JoesHotDogs.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;



namespace JoesHotDogs.Repos
    
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IConfiguration _config;

        public OrderRepository(IConfiguration config)
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
        public List<Order> GetAllOrders()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                        Id, UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip,              Address, Phone, Date, Status
                                      FROM Orders
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Order> orders = new List<Order>();
                    while (reader.Read())
                    {
                        Order order = new Order()
                        {
                            Id = reader.GetString(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Total = reader.GetInt32(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = reader.GetInt32(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = reader.GetInt32(reader.GetOrdinal("Phone")),
                            Date = reader.GetDateTime(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status"))
                        };

                        orders.Add(order);
                    }
                    reader.Close();

                    return orders; 
                }
            }
        }
        
        public Order GetOrderById(string id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                        Id, UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip,              Address, Phone, Date, Status
                                      FROM Orders
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Order order = new Order()
                        {
                            Id = reader.GetString(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Total = reader.GetInt32(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = reader.GetInt32(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = reader.GetInt32(reader.GetOrdinal("Phone")),
                            Date = reader.GetDateTime(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status"))
                        };

                        reader.Close();
                        return order;
                    }
                    reader.Close();
                    return null;
                }
            }
        
        }
        public void CreateOrder(Order order)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Order (UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip, Address, Phone, Date, Status)
                    OUTPUT INSERTED.ID
                    VALUES (@userId, @total, @delivery, @cardNum, @expiration, @nameOnCard, @billingZip, @address, @phone, @date, @status);
                    ";

                    cmd.Parameters.AddWithValue("@userId", order.UserId);
                    cmd.Parameters.AddWithValue("@total", order.Total);
                    cmd.Parameters.AddWithValue("@delivery", order.Delivery);
                    cmd.Parameters.AddWithValue("@cardNum", order.CardNum);
                    cmd.Parameters.AddWithValue("@expiration", order.Expiration);
                    cmd.Parameters.AddWithValue("@nameOnCard", order.NameOnCard);
                    cmd.Parameters.AddWithValue("@billingZip", order.BillingZip);
                    cmd.Parameters.AddWithValue("@address", order.Address);
                    cmd.Parameters.AddWithValue("@phone", order.Phone);
                    cmd.Parameters.AddWithValue("@date", order.Date);
                    cmd.Parameters.AddWithValue("@status", order.Status);

                    string id = (string)cmd.ExecuteScalar();

                    order.Id = id;
                }
            }
        }

        public void UpdateOrder(Order order)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Order
                    SET
                        Delivery = @delivery,
                        CardNum = @cardNum,
                        Expiration = @expiration,
                        NameOnCard = @nameOnCard,
                        BillingZip = @billingZip,
                        Address = @address,
                        Phone = @phone
                    WHERE Id = @id;
                    ";
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
