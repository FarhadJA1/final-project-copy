using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.EducationDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class EducationService : IEducationService
    {
        private readonly IGroupTypeRepository _groupTypeRepository;
        private readonly IMapper _mapper;
        public EducationService(IGroupTypeRepository groupTypeRepository, IMapper mapper)
        {
            _groupTypeRepository = groupTypeRepository;
            _mapper = mapper;
        }
        public async Task<List<GroupTypeListDto>> GetAllAsync()
        {
            var model = await _groupTypeRepository.GetAllGroupTypeDetails();
            return _mapper.Map<List<GroupTypeListDto>>(model);
        }
        public async Task CreateAsync(GroupTypeCreateDto groupTypeCreate)
        {
            await _groupTypeRepository.CreateAsync(_mapper.Map<GroupType>(groupTypeCreate));
        }
        public async Task DeleteAsync(int id)
        {
            GroupType groupType = await _groupTypeRepository.GetAsync(id);

            await _groupTypeRepository.SoftDeleteAsync(groupType);
        }
        public async Task UpdateAsync(int id, GroupTypeUpdateDto groupTypeUpdate)
        {
            var entity = await _groupTypeRepository.GetAsync(id);
            _mapper.Map(groupTypeUpdate, entity);
            await _groupTypeRepository.UpdateAsync(entity);
        }
        public async Task<GroupTypeDetailsDto> GroupTypeDetailsAsync(int id)
        {
            var entity = await _groupTypeRepository.GroupTypeDetails(id);
            GroupTypeDetailsDto groupTypeDetails = new();
            var result = _mapper.Map(entity, groupTypeDetails);
            return result;
        }

    }
}
