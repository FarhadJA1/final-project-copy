using System;

namespace Service.DTOs.StudentDto
{
    public class StudentCreateDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public DateTime Birthday { get; set; }
        public int PayTypeId { get; set; }
        public int ResourceId { get; set; }

    }
}
