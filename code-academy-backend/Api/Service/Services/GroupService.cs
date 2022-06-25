using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.GroupDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IStudentRepository _studentRepository;
        private readonly IGroupTypeRepository _groupTypeRepository;
        private readonly IGroupClassTermRepository _groupClassTermRepository;
        private readonly IMapper _mapper;
        public GroupService(IGroupTypeRepository groupTypeRepository
                            , IGroupRepository groupRepository
                            , IMapper mapper
                            , IGroupClassTermRepository groupClassTermRepository
                            , IStudentRepository studentRepository)
        {
            _groupRepository = groupRepository;
            _mapper = mapper;
            _groupTypeRepository = groupTypeRepository;
            _groupClassTermRepository = groupClassTermRepository;
            _studentRepository = studentRepository;
        }

        public async Task<List<GroupListDto>> GetAllAsync()
        {
            var model = await _groupRepository.GetAllSGroupDetails();
            var result = _mapper.Map<List<GroupListDto>>(model);
            return result;
        }

        public async Task CreateAsync(GroupCreateDto groupCreateDto)
        {
            var lastGroup = await _groupRepository.GetLastGroup();
            string code;
            if (lastGroup == null)
            {
                code = "10";
            }
            else
            {
                code = lastGroup.GroupCode.Substring(2, 2);
            }

            var result = Int32.Parse(code) + 1;
            var groupType = await _groupTypeRepository.GetAsync(groupCreateDto.TermId);
            Group group = new()
            {
                GroupTypeId = groupCreateDto.GroupTypeId,
                CreateDate = groupCreateDto.CreateDate,
                ExpireDate = groupCreateDto.CreateDate.AddDays(1).AddMonths(6).AddDays(-1),
                GroupCode = groupType.Name[0].ToString() + groupCreateDto.TermId.ToString() + result,
                Capacity = groupCreateDto.Capacity,
                IsOver = false,

            };

            await _groupRepository.CreateAsync(group);
            GroupClassTerm groupClassTerm = new()
            {
                GroupId = group.Id,
                TermId = groupCreateDto.TermId
            };
            await _groupClassTermRepository.CreateAsync(groupClassTerm);
        }
        public async Task DeleteAsync(int id)
        {
            Group group = await _groupRepository.GetAsync(id);

            await _groupRepository.SoftDeleteAsync(group);
        }
        public async Task AssignTeacherAsync(int id, AddTeacherDto addTeacherDto)
        {
            Group group = await _groupRepository.GetAsync(id);
            group.TeacherId = addTeacherDto.TeacherId;
            await _groupRepository.UpdateAsync(group);
        }
        public async Task AssignClassroomAsync(int id, AddClassroomDto addClassroomDto)
        {
            GroupClassTerm groupClassTerm = await _groupClassTermRepository.GetGroupById(id);
            groupClassTerm.ClassroomId = addClassroomDto.ClassroomId;
            await _groupClassTermRepository.UpdateAsync(groupClassTerm);
        }
        public async Task AddStudentsAsync(int id,AddStudentDto addStudentDto)
        {
            Group group = await _groupRepository.GetAsync(id);
            foreach (var studentId in addStudentDto.Students)
            {
                var student=await _studentRepository.GetAsync(studentId);
                student.GroupId = id;
                await _studentRepository.UpdateAsync(student);
            }
        }
        public async Task<GroupDetailsDto> GroupDetailsAsync(int id)
        {
            var entity = await _groupRepository.GetGroupDetails(id);
            GroupDetailsDto groupDetailDto = new();
            var result = _mapper.Map(entity, groupDetailDto);
            return result;
        }


    }
}
