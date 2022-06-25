
using Service.DTOs.EducationDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IEducationService
    {
        Task<List<GroupTypeListDto>> GetAllAsync();
        Task CreateAsync(GroupTypeCreateDto groupTypeCreate);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, GroupTypeUpdateDto groupTypeUpdate);
        Task<GroupTypeDetailsDto> GroupTypeDetailsAsync(int id);

    }
}
