using System;

namespace Service.DTOs.TeacherDto
{
    public class TeacherCreateDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int Salary { get; set; }
        public long Phone { get; set; }
        public int ProfessionId { get; set; }
    }
}
