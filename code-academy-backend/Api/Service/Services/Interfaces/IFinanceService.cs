using Service.DTOs.FinanceDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IFinanceService
    {
        Task<List<FinanceListDto>> GetAllAsync();
        Task CreateAsync(FinanceCreateDto financeCreateDto);
    }
}
