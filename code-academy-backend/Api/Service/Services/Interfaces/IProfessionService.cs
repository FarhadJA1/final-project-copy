using Service.DTOs.ProfessionDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IProfessionService
    {
        Task<List<ProfessionListDto>> GetAllAsync();
    }
}
