using JoesHotDogs.Models;
using Microsoft.Data.SqlClient;

namespace JoesHotDogs.Repos
{
    public class UserRepository : IUserRepository
    {
        private readonly IConfiguration _config;

        public UserRepository(IConfiguration config)
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
        public List<User> GetUsers()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT u.id,
                               u.firstName,
                               u.lastName,
                               u.email,
                               u.isAdmin
                        FROM [User] u
                    ";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<User> users = new List<User>();
                    while (reader.Read())
                    {
                        User user = new User
                        {
                            Id = reader.GetString(reader.GetOrdinal("id")),
                            FirstName = reader.GetString(reader.GetOrdinal("firstName")),
                            LastName = reader.GetString(reader.GetOrdinal("lastName")),
                            Email = reader.GetString(reader.GetOrdinal("email")),
                            IsAdmin = reader.GetBoolean(reader.GetOrdinal("isAdmin"))
                        };
                        users.Add(user);
                    }
                    reader.Close();

                    return users;
                }
            }
        }

      public User GetUserById(string id)
        {
             using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT * FROM [User]
                                        WHERE Id = @id
                                        ";

                    cmd.Parameters.AddWithValue("id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        User user = new User
                        {
                            Id = reader.GetString(reader.GetOrdinal("id")),
                            FirstName = reader.GetString(reader.GetOrdinal("firstName")),
                            LastName = reader.GetString(reader.GetOrdinal("lastName")),
                            Email = reader.GetString(reader.GetOrdinal("email")),
                            IsAdmin = reader.GetBoolean(reader.GetOrdinal("isAdmin"))

                        };

                        return user;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        } 

        public void AddUser(User user)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [User] (Id, FirstName, LastName, Email, IsAdmin)
                        OUTPUT INSERTED.ID
                        VALUES (@id, @firstName, @lastName, @email, @isAdmin);
                    ";

                    cmd.Parameters.AddWithValue("@id", user.Id);
                    cmd.Parameters.AddWithValue("@firstName", user.FirstName);
                    cmd.Parameters.AddWithValue("@lastName", user.LastName);
                    cmd.Parameters.AddWithValue("@email", user.Email);
                    cmd.Parameters.AddWithValue("@isAdmin", user.IsAdmin);

                    cmd.ExecuteNonQuery();


                }
            }
        }

        public void UpdateUser(User user)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE User
                        SET
                               Id = @id,
                               FirstName = @firstName,
                               LastName = @lastName,
                               Email = @email,
                               IsAdmin = @isAdmin
                        
                        WHERE  Id = @id
                    ";

                    cmd.Parameters.AddWithValue("@id", user.Id);
                    cmd.Parameters.AddWithValue("@firstName", user.FirstName);
                    cmd.Parameters.AddWithValue("@lastName", user.LastName);
                    cmd.Parameters.AddWithValue("@email", user.Email);
                    cmd.Parameters.AddWithValue("@isAdmin", user.IsAdmin);

                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void DeleteUser(string id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM User
                            Where Id = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery ();
                }
            }
        }


    }
}
