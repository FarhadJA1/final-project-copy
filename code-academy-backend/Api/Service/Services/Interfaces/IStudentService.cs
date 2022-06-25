using Service.DTOs.StudentDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentListDto>> GetAllAsync();
        Task CreateAsync(StudentCreateDto studentCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, StudentUpdateDto studentUpdateDto);
        Task<StudentDetailDto> StudentDetailsAsync(int id);
    }
}
