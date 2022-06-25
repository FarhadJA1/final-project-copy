using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IGroupRepository : IRepository<Group>
    {
        Task<Group> GetWithDetails(int id);
        Task<Group> GetLastGroup();
        Task<List<Group>> GetAllSGroupDetails();
        Task<Group> GetGroupDetails(int id);

    }
}
