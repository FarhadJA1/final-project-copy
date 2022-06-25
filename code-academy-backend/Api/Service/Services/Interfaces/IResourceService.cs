using Service.DTOs.ResourceDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IResourceService
    {
        Task<List<ResourceListDto>> GetAllAsync();
        Task CreateAsync(ResourceCreateDto resourceCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, ResourceUpdateDto resourceUpdateDto);
        Task<ResourceDetailsDto> ResourceDetailsAsync(int id);
    }
}
