using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IPayTypeRepository : IRepository<PayType>
    {
        Task<PayType> PayTypeDetails(int id);
        Task<List<PayType>> GetAllPayTypeDetails();
    }
}
