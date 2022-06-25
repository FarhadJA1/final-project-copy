using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.ClassroomDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ClassroomService : IClassroomService
    {
        private readonly IClassroomRepository _classroomRepository;
        private readonly IMapper _mapper;
        public ClassroomService(IClassroomRepository classroomRepository, IMapper mapper)
        {
            _classroomRepository = classroomRepository;
            _mapper = mapper;
        }
        public async Task<List<ClassroomListDto>> GetAllAsync()
        {
            var model = await _classroomRepository.GetAllClassrooms();
            return _mapper.Map<List<ClassroomListDto>>(model);
        }
        public async Task CreateAsync(ClassroomCreateDto classroomCreateDto)
        {
            await _classroomRepository.CreateAsync(_mapper.Map<Classroom>(classroomCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Classroom classroom = await _classroomRepository.GetAsync(id);

            await _classroomRepository.SoftDeleteAsync(classroom);
        }
        public async Task UpdateAsync(int id, ClassroomUpdateDto classroomUpdateDto)
        {
            var entity = await _classroomRepository.GetAsync(id);
            _mapper.Map(classroomUpdateDto, entity);
            await _classroomRepository.UpdateAsync(entity);
        }
        public async Task<ClassroomDetailsDto> ClassroomDetailsAsync(int id)
        {
            var entity = await _classroomRepository.ClassroomDetails(id);
            ClassroomDetailsDto classroomDetailsDto = new();
            var result = _mapper.Map(entity, classroomDetailsDto);
            return result;
        }
    }
}
