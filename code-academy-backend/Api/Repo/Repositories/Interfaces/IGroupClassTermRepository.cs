using Domain.Entities;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IGroupClassTermRepository : IRepository<GroupClassTerm>
    {
        Task<GroupClassTerm> GetGroupById(int id);
    }
}
