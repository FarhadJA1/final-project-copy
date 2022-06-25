using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface ITeacherRepository : IRepository<Teacher>
    {
        Task<Teacher> GetTeacherDetails(int id);
        Task<List<Teacher>> GetAllTeacherDetails();
    }
}
