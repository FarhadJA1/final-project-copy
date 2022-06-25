using AutoMapper;
using Repo.Repositories.Interfaces;
using Service.DTOs.ProfessionDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProfessionService : IProfessionService
    {
        private readonly IProfessionRepository _professionRepository;
        private readonly IMapper _mapper;
        public ProfessionService(IProfessionRepository professionRepository, IMapper mapper)
        {
            _professionRepository = professionRepository;
            _mapper = mapper;
        }
        public async Task<List<ProfessionListDto>> GetAllAsync()
        {
            var model = await _professionRepository.GetAllAsync();
            return _mapper.Map<List<ProfessionListDto>>(model);
        }
    }
}
