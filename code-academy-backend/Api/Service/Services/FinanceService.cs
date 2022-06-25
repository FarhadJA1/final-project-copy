using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.FinanceDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class FinanceService : IFinanceService
    {
        private readonly IFinanceRepository _financeRepository;
        private readonly IStudentRepository _studentRepository;
        private readonly ITeacherRepository _teacherRepository;
        private readonly IMapper _mapper;
        public FinanceService(IFinanceRepository financeRepository, IMapper mapper, ITeacherRepository teacherRepository, IStudentRepository studentRepository)
        {
            _financeRepository = financeRepository;
            _mapper = mapper;
            _teacherRepository = teacherRepository;
            _studentRepository = studentRepository;
        }
        public async Task<List<FinanceListDto>> GetAllAsync()
        {
            var model = await _financeRepository.GetAllAsync();
            return _mapper.Map<List<FinanceListDto>>(model);
        }
        public async Task CreateAsync(FinanceCreateDto financeCreateDto)
        {
            var teachers =await _teacherRepository.GetAllAsync();

            List<int> salaries = new List<int>();           

            if (teachers == null)
            {
                salaries.Add(0);
            }
            else
            {
                foreach (var teacher in teachers)
                {
                    salaries.Add(teacher.Salary);
                }
            }
            int expence = salaries.Sum();

            var students = await _studentRepository.GetAllAsync();

            int income = students.Count() * 3000;


            Finance finance = new()
            {
                CreateDate = financeCreateDto.CreateDate,
                Expence = expence,
                Income = income,
                Total=income-expence     
            };
            await _financeRepository.CreateAsync(finance);
        }
    }
}
