﻿using JoesHotDogs.Models;
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
                            Id = reader.GetString(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = (int)reader.GetInt64(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = (int)reader.GetInt64(reader.GetOrdinal("Phone")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status")),                        };

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
                                        Id, UserId, Total, Delivery, CardNum, Expiration, NameOnCard, BillingZip,Address, Phone, Date, Status
                                      FROM [Order]
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Order order = new Order()
                        {

                            Id = reader.GetString(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = (int)reader.GetInt64(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = (int)reader.GetInt64(reader.GetOrdinal("Phone")),
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


                    string id = cmd.ExecuteScalar().ToString();

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
        public void DeleteOrder(string id)
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


        public List<Order> GetOrdersByUserId(string userId)
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

                            Id = reader.GetString(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Total = (int)reader.GetInt64(reader.GetOrdinal("Total")),
                            Delivery = reader.GetBoolean(reader.GetOrdinal("Delivery")),
                            CardNum = (int)reader.GetInt64(reader.GetOrdinal("CardNum")),
                            Expiration = reader.GetString(reader.GetOrdinal("Expiration")),
                            NameOnCard = reader.GetString(reader.GetOrdinal("NameOnCard")),
                            BillingZip = reader.GetInt32(reader.GetOrdinal("BillingZip")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Phone = (int)reader.GetInt64(reader.GetOrdinal("Phone")),
                            Date = reader.GetString(reader.GetOrdinal("Date")),
                            Status = reader.GetBoolean(reader.GetOrdinal("Status")),
                        };
                        orders.Add(order);
                    }
                    reader.Close();
                    return orders;
                }
            }

            //Close order

        }

    }
}