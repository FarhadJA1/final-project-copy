using Domain.Entities;
using Service.DTOs.HourDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IHourService
    {
        Task<List<HourListDto>> GetAllAsync();
        Task CreateAsync(HourCreateDto hourCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, HourUpdateDto hourUpdateDto);
        Task<HourDetailsDto> HourDetailsAsync(int id);
        

    }
}
