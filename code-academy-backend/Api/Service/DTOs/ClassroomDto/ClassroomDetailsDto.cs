using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.ClassroomDto
{
    public class ClassroomDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsBusy { get; set; }
        public int Capacity { get; set; }
        public List<ClassroomGroupDto> GroupClassTerms { get; set; }
    }
    public class ClassroomGroupDto
    {
        public GroupCodeClassroomDto Group { get; set; }
    }
    public class GroupCodeClassroomDto
    {
        public string GroupCode { get; set; }
    }
}
