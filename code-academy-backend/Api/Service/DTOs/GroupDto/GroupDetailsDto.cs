using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.GroupDto
{
    public class GroupDetailsDto
    {
        public int Id { get; set; }
        public string GroupCode { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsOver { get; set; }
        public GroupDetailsGroupTypeDto GroupType { get; set; }
        public List<GroupDetailsStudentsDto> Students { get; set; }
        public GroupDetailsTeacherDto Teacher { get; set; }
        public GroupClassTermGDto GroupClassTerm { get; set; }

    }
    public class GroupDetailsGroupTypeDto
    {
        public string Name { get; set; }
    }
    public class GroupDetailsStudentsDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }
    public class GroupDetailsTeacherDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }



}
