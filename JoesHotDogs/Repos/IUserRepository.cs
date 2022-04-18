using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IUserRepository
    {
        List<User> GetUsers();
    //   User GetUserById(int id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int id);
    }
}
