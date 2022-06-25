using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IGroupTypeRepository : IRepository<GroupType>
    {
        Task<GroupType> GroupTypeDetails(int id);
        Task<List<GroupType>> GetAllGroupTypeDetails();
    }
}
