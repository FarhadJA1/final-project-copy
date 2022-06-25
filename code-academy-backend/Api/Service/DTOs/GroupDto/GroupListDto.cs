using Domain.Entities;
using System;
using System.Collections.Generic;

namespace Service.DTOs.GroupDto
{
    public class GroupListDto
    {
        public int Id { get; set; }
        public string GroupCode { get; set; }
        public List<GroupStudentsDto> Students { get; set; }
        public int TeacherId { get; set; }
        public TeacherGDto Teacher { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsOver { get; set; }
        public GroupClassTermGDto GroupClassTerm { get; set; }


    }

    public class TeacherGDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
    public class GroupStudentsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
    public class GroupClassTermGDto
    {
        public ClassroomGDto Classroom { get; set; }
        public TermGDto Term { get; set; }
    }
    public class ClassroomGDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class TermGDto
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string Time { get; set; }
    }


}
