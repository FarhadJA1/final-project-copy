using AutoMapper;
using Domain.Entities;
using Service.DTOs.ClassroomDto;
using Service.DTOs.EducationDto;
using Service.DTOs.FinanceDto;
using Service.DTOs.GroupDto;
using Service.DTOs.HourDto;
using Service.DTOs.IdentityDto;
using Service.DTOs.PayTypeDto;
using Service.DTOs.ProfessionDto;
using Service.DTOs.ResourceDto;
using Service.DTOs.StudentDto;
using Service.DTOs.TeacherDto;

namespace Service.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Group, GroupListDto>();
            CreateMap<Group, GroupDetailDto>().ReverseMap();
            CreateMap<Resource, ResourceListDto>();
            CreateMap<Resource, ResourceCreateDto>().ReverseMap();
            CreateMap<Resource, ResourceUpdateDto>().ReverseMap();
            CreateMap<Resource, ResourceDetailsDto>();
            CreateMap<PayType, PayTypeListDto>();
            CreateMap<PayType, PayTypeCreateDto>().ReverseMap();
            CreateMap<PayType, PayTypeUpdateDto>().ReverseMap();
            CreateMap<PayType, PaymentDetailsDto>();
            CreateMap<GroupType, GroupTypeListDto>();
            CreateMap<GroupType, GroupTypeCreateDto>().ReverseMap();
            CreateMap<GroupType, GroupTypeUpdateDto>().ReverseMap();
            CreateMap<GroupType, GroupTypeDetailsDto>();
            CreateMap<Term, HourListDto>();
            CreateMap<Term, HourCreateDto>().ReverseMap();
            CreateMap<Term, HourUpdateDto>().ReverseMap();
            CreateMap<Term, HourDetailsDto>();
            CreateMap<GroupClassTerm, TermGroupDto>().ReverseMap();
            CreateMap<Group, GroupCodeTermDto>();
            CreateMap<GroupClassTerm, ClassroomGroupDto>().ReverseMap();
            CreateMap<Group, GroupCodeClassroomDto>();
            CreateMap<Group, GroupCodeDto>();
            CreateMap<GroupClassTerm, ClassroomGroupListDto>().ReverseMap();
            CreateMap<Group, GroupCodeClassroomListDto>();
            CreateMap<Classroom, ClassroomListDto>();
            CreateMap<Classroom, ClassroomCreateDto>().ReverseMap();
            CreateMap<Classroom, ClassroomUpdateDto>().ReverseMap();
            CreateMap<Classroom, ClassroomDetailsDto>();
            CreateMap<Student, StudentListDto>().ReverseMap();
            CreateMap<Student, StudentCreateDto>().ReverseMap();
            CreateMap<Student, StudentUpdateDto>().ReverseMap();
            CreateMap<Student, ResourceStudentDto>().ReverseMap();
            CreateMap<Student, PaymentStudentsDto>().ReverseMap();
            CreateMap<PayType, PaymentGetDto>().ReverseMap();
            CreateMap<Resource, ResourceGetDto>().ReverseMap();
            CreateMap<Teacher, TeacherListDto>();
            CreateMap<Group, TeacherGroupDto>();
            CreateMap<Teacher, TeacherCreateDto>().ReverseMap();
            CreateMap<Teacher, TeacherDetailDto>().ReverseMap();
            CreateMap<Teacher, TeacherUpdateDto>().ReverseMap();
            CreateMap<Profession, ProfessionListDto>();
            CreateMap<Teacher, TeacherGDto>().ReverseMap();
            CreateMap<Classroom, ClassroomGDto>().ReverseMap();
            CreateMap<GroupClassTerm, GroupClassTermGDto>().ReverseMap();
            CreateMap<Student, GroupStudentsDto>().ReverseMap();
            CreateMap<Finance, FinanceCreateDto>().ReverseMap();
            CreateMap<Finance, FinanceListDto>().ReverseMap();
            CreateMap<UserDto, AppUser>().ReverseMap();
            CreateMap<AppUser, RegisterDto>().ReverseMap();
            CreateMap<Student, StudentDetailDto>().ReverseMap();
            CreateMap<Group, StudentDetailGroupDto>().ReverseMap();
            CreateMap<PayType, StudentDetailPaymentDto>().ReverseMap();
            CreateMap<Resource, StudentDetailResourceDto>().ReverseMap();
            CreateMap<Term, TermGDto>();
            CreateMap<GroupType, GroupDetailsGroupTypeDto>();
            CreateMap<Student, GroupDetailsStudentsDto>();
            CreateMap<Teacher, GroupDetailsTeacherDto>();
            CreateMap<Group, GroupDetailsDto>().ReverseMap();
        }
    }
}
