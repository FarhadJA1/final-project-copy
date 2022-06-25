using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.StudentDto
{
    public class StudentDetailDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public DateTime Birthday { get; set; }
        public StudentDetailGroupDto Group { get; set; }
        public StudentDetailPaymentDto PayType { get; set; }
        public StudentDetailResourceDto Resource { get; set; }
        public bool IsGraduated { get; set; }

    }
    public class StudentDetailGroupDto
    {
        public string GroupCode { get; set; }
    }
    public class StudentDetailPaymentDto
    {
        public string Name { get; set; }
    }
    public class StudentDetailResourceDto
    {
        public string Name { get; set; }
    }
}
