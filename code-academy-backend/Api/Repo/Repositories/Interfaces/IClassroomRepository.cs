using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IClassroomRepository : IRepository<Classroom>
    {
        Task<Classroom> ClassroomDetails(int id);
        Task<List<Classroom>> GetAllClassrooms();
    }
}
