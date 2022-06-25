using System;

namespace Service.DTOs.GroupDto
{
    public class GroupTermClassDto
    {
        public int GroupId { get; set; }
        public string GroupName { get; set; }
        public int ClassroomId { get; set; }
        public string ClassroomName { get; set; }
        public int TermId { get; set; }
        public string TermName { get; set; }
        public int GroupTypeId { get; set; }
        public string GroupTypeName { get; set; }
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
        public DateTime CreateDate { get; set; }
        public int Capacity { get; set; }
        public bool IsOver { get; set; }
    }
}
