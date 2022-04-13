using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IUserRepository
    {
        List<User> GetUsers();
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(Int64 id);
    }
}
