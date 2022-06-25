using Service.DTOs.GroupDto;
using Service.DTOs.ProfessionDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.TeacherDto
{
    public class TeacherDetailDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int Salary { get; set; }
        public long Phone { get; set; }
        public List<TeacherGroupDto> Groups { get; set; }
        public ProfessionListDto Profession { get; set; }
    }
}
