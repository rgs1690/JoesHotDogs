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
                                        Id, UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip, Address, Phone, Date, Status
                                      FROM [Order]
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Order> orders = new List<Order>();
                    while (reader.Read())
                    {
                        Order order = new Order()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = reader.GetString(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status")),
                        };

                        orders.Add(order);
                    }
                    reader.Close();

                    return orders;
                }
            }
        }

        public Order GetOrderById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                        Id, UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip,Address, Phone, Date, Status
                                      FROM [Order]
                                      WHERE Id = @Id
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Order order = new Order()
                        {

                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = reader.GetString(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status")),
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
                    INSERT INTO [Order] 
                    (UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip, Address, Phone, Date, Status)
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
                    cmd.Parameters.AddWithValue("@status", true);


                    int id = (int)cmd.ExecuteScalar();

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
                    UPDATE [Order]
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

                    cmd.Parameters.AddWithValue("@id", order.Id);
                    cmd.Parameters.AddWithValue("@delivery", order.Delivery);
                    cmd.Parameters.AddWithValue("@cardNum", order.CardNum);
                    cmd.Parameters.AddWithValue("@expiration", order.Expiration);
                    cmd.Parameters.AddWithValue("@nameOnCard", order.NameOnCard);
                    cmd.Parameters.AddWithValue("@billingZip", order.BillingZip);
                    cmd.Parameters.AddWithValue("@address", order.Address);
                    cmd.Parameters.AddWithValue("@phone", order.Phone);


                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteOrder(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
				DELETE FROM [Order]
				WHERE Id = @id
				";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }
        }


        public List<Order> GetOrdersByUserId(int userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			    SELECT Id, UserId, Total, Delivery, cardNum,
				       Expiration, NameOnCard, BillingZip,
				        Address, Phone, Date, Status
                FROM [Order]
                WHERE UserId = @userId
			";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Order> orders = new List<Order>();
                    while (reader.Read())
                    {
                        Order order = new Order()
                        {

                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = reader.GetString(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status")),
                        };
                        orders.Add(order);
                    }
                    reader.Close();
                    return orders;
                }
            }

        }

        public List<HotDogOrder> GetHotDogOrdersByOrderId(int orderId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			    SELECT HotDog.Id, HotDogOrder.Id, HotDog.[Name],HotDogOrder.OrderId, [Order].Id, [Order].Total, [Order].nameOnCard, HotDogOrder.HotDogId
                FROM HotDogOrder
                LEFT JOIN HotDog ON HotDog.Id = HotDogOrder.hotDogId
                LEFT JOIN [Order] ON [Order].Id = HotDogOrder.orderId
                WHERE HotDogOrder.OrderId = @orderId
			    ";
                    cmd.Parameters.AddWithValue("@orderId", orderId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    List<HotDogOrder> hotDogOrders = new List<HotDogOrder>();
                    while (reader.Read())
                    {
                        HotDogOrder hotDogOrder = new HotDogOrder()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            OrderId = reader.GetInt32(reader.GetOrdinal("OrderId")),
                            HotDogId = reader.GetInt32(reader.GetOrdinal("HotDogId")),
                        };
                        hotDogOrders.Add(hotDogOrder);
                    }
                    return hotDogOrders;
                }
            }
        }

        public void CreateHotDogOrder(HotDogOrder hotDogOrder)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO HotDogOrder
                    (OrderId, HotDogId)
                    OUTPUT INSERTED.ID
                    VALUES (@orderId, @hotDogId);
                    ";

                    cmd.Parameters.AddWithValue("@orderId", hotDogOrder.OrderId);
                    cmd.Parameters.AddWithValue("@hotDogId", hotDogOrder.HotDogId);

                    int id = (int)cmd.ExecuteScalar();

                    hotDogOrder.Id = id;
                }
            }
        }


        public void UpdateHotDogOrder(HotDogOrder hotDogOrder)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE HotDogOrder
                    SET
                        HotDogId = @hotDogId
                    WHERE Id = @id;
                    ";

                    cmd.Parameters.AddWithValue("@id", hotDogOrder.Id);
                    cmd.Parameters.AddWithValue("@hotDogId", hotDogOrder.HotDogId);



                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void DeleteHotDogOrder(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM HotDogOrder
                    WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }
        }

        public HotDogOrder GetHotDogOrderById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                        Id, HotDogId, OrderId
                                      FROM [HotDogOrder]
                                      WHERE Id = @Id
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        HotDogOrder hotDogOrder = new HotDogOrder()
                        {

                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            HotDogId = reader.GetInt32(reader.GetOrdinal("HotDogId")),
                            OrderId = (int)reader.GetInt32(reader.GetOrdinal("OrderId")),

                        };

                        reader.Close();
                        return hotDogOrder;
                    }
                    reader.Close();
                    return null;
                }
            }

        }
    }
}