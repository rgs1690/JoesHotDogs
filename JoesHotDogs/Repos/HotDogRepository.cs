using JoesHotDogs.Models;
using Microsoft.Data.SqlClient;

namespace JoesHotDogs.Repos
{
    public class HotDogRepository : IHotDogRepository
    {
        private readonly IConfiguration _config;
        public HotDogRepository(IConfiguration config)
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

        public List<HotDog> GetAllHotDogs()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               [Name],
                                               Description,
                                               ImageUrl
                                        FROM HotDog";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<HotDog> hotdogs = new List<HotDog>();
                    while (reader.Read())
                    {
                        HotDog hotdog = new HotDog()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl"))
                        };
                        hotdogs.Add(hotdog);
                    }
                    reader.Close();
                    return hotdogs;
                }
            }
        }

        public HotDog GetHotDogById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                HotDog hotdog = null;

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               [Name],
                                               Description,
                                               ImageUrl
                                        FROM HotDog
                                        WHERE Id = @Id";

                    cmd.Parameters.AddWithValue("@Id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        hotdog = new HotDog()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl"))
                        };
                    }
                    reader.Close();
                }
                return hotdog;
            }
        }
    }
}