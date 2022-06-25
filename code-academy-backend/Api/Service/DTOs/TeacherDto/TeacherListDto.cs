using Service.DTOs.GroupDto;
using Service.DTOs.ProfessionDto;
using System;

namespace Service.DTOs.TeacherDto
{
    public class TeacherListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int Salary { get; set; }
        public long Phone { get; set; }
        public TeacherGroupDto TeacherGroupDto { get; set; }
        public ProfessionListDto Profession { get; set; }
    }
}
