using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IHourRepository : IRepository<Term>
    {
        Task<Term> HourDetails(int id);
        Task<List<Term>> GetAllTermDetails();
    }
}
