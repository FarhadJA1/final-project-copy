using Service.DTOs.GroupDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IGroupService
    {
        Task<List<GroupListDto>> GetAllAsync();
        Task DeleteAsync(int id);
        Task CreateAsync(GroupCreateDto groupCreateDto);
        Task AssignTeacherAsync(int id, AddTeacherDto addTeacherDto);
        Task AssignClassroomAsync(int id, AddClassroomDto addClassroomDto);
        Task AddStudentsAsync(int id, AddStudentDto addStudentDto);
        Task<GroupDetailsDto> GroupDetailsAsync(int id);
    }
}
