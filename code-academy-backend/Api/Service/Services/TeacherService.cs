using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.TeacherDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;
        private readonly IMapper _mapper;
        public TeacherService(ITeacherRepository teacherRepository, IMapper mapper)
        {
            _teacherRepository = teacherRepository;
            _mapper = mapper;
        }
        public async Task<List<TeacherListDto>> GetAllAsync()
        {
            var model = await _teacherRepository.GetAllTeacherDetails();
            return _mapper.Map<List<TeacherListDto>>(model);
        }
        public async Task CreateAsync(TeacherCreateDto teacherCreateDto)
        {
            await _teacherRepository.CreateAsync(_mapper.Map<Teacher>(teacherCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Teacher teacher = await _teacherRepository.GetAsync(id);

            await _teacherRepository.SoftDeleteAsync(teacher);
        }
        public async Task UpdateAsync(int id, TeacherUpdateDto teacherUpdateDto)
        {
            var entity = await _teacherRepository.GetAsync(id);
            _mapper.Map(teacherUpdateDto, entity);
            await _teacherRepository.UpdateAsync(entity);
        }
        public async Task<TeacherDetailDto> TeacherDetailsAsync(int id)
        {
            var entity = await _teacherRepository.GetTeacherDetails(id);
            TeacherDetailDto teacherDetailDto = new();
            var result = _mapper.Map(entity, teacherDetailDto);
            return result;
        }

    }
}
