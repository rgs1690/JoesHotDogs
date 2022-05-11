using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IUserRepository
    {
        List<User> GetUsers();
        User GetUserById(string id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(string id);
    }
}
