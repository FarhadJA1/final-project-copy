using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IStudentRepository : IRepository<Student>
    {
        Task<Student> GetStudentDetails(int id);
        Task<List<Student>> GetAllStudentDetails();
    }
}
