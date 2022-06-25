using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.HourDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class HourService : IHourService
    {
        private readonly IHourRepository _hourRepository;
        private readonly IMapper _mapper;
        public HourService(IHourRepository hourRepository, IMapper mapper)
        {
            _hourRepository = hourRepository;
            _mapper = mapper;
        }
        public async Task<List<HourListDto>> GetAllAsync()
        {
            List<Term> model = await _hourRepository.GetAllTermDetails();

            return _mapper.Map<List<HourListDto>>(model);
        }
        
        public async Task CreateAsync(HourCreateDto hourCreateDto)
        {
            await _hourRepository.CreateAsync(_mapper.Map<Term>(hourCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Term term = await _hourRepository.GetAsync(id);

            await _hourRepository.SoftDeleteAsync(term);
        }
        public async Task UpdateAsync(int id, HourUpdateDto hourUpdateDto)
        {
            var entity = await _hourRepository.GetAsync(id);
            _mapper.Map(hourUpdateDto, entity);
            await _hourRepository.UpdateAsync(entity);
        }
        public async Task<HourDetailsDto> HourDetailsAsync(int id)
        {
            var entity = await _hourRepository.HourDetails(id);
            HourDetailsDto hourDetailsDto = new();
            var result = _mapper.Map(entity, hourDetailsDto);
            return result;
        }
    }
}
