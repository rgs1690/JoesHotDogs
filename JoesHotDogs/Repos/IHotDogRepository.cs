using JoesHotDogs.Models;

namespace JoesHotDogs.Repos
{
    public interface IHotDogRepository
    {
            List<HotDog> GetAllHotDogs();
            HotDog GetHotDogById(int id);
    }
}
