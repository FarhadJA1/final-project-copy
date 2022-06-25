using Service.DTOs.ClassroomDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IClassroomService
    {
        Task<List<ClassroomListDto>> GetAllAsync();
        Task CreateAsync(ClassroomCreateDto classroomCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, ClassroomUpdateDto classroomUpdateDto);
        Task<ClassroomDetailsDto> ClassroomDetailsAsync(int id);

    }
}
