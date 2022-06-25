using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.ResourceDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ResourceService : IResourceService
    {
        private readonly IResourceRepository _resourceRepository;
        private readonly IMapper _mapper;
        public ResourceService(IResourceRepository resourceRepository, IMapper mapper)
        {
            _resourceRepository = resourceRepository;
            _mapper = mapper;
        }
        public async Task<List<ResourceListDto>> GetAllAsync()
        {
            var model = await _resourceRepository.GetAllResources();
            return _mapper.Map<List<ResourceListDto>>(model);
        }
        public async Task CreateAsync(ResourceCreateDto resourceCreateDto)
        {
            await _resourceRepository.CreateAsync(_mapper.Map<Resource>(resourceCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Resource resource = await _resourceRepository.GetAsync(id);

            await _resourceRepository.SoftDeleteAsync(resource);
        }
        public async Task UpdateAsync(int id, ResourceUpdateDto resourceUpdateDto)
        {
            var entity = await _resourceRepository.GetAsync(id);
            _mapper.Map(resourceUpdateDto, entity);
            await _resourceRepository.UpdateAsync(entity);
        }
        public async Task<ResourceDetailsDto> ResourceDetailsAsync(int id)
        {
            var entity = await _resourceRepository.ResourceDetails(id);
            ResourceDetailsDto resourceDetailsDto = new();
            var result = _mapper.Map(entity, resourceDetailsDto);
            return result;
        }
    }
}
