using Service.DTOs.PayTypeDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IPayTypeService
    {
        Task<List<PayTypeListDto>> GetAllAsync();
        Task CreateAsync(PayTypeCreateDto payTypeCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, PayTypeUpdateDto payTypeUpdateDto);
        Task<PaymentDetailsDto> PayTypeDetailsAsync(int id);
    }
}
