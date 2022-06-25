using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.ResourceDto
{
    public class ResourceDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ResourceStudentDto> Students { get; set; }
    }
    public class ResourceStudentDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }
    
}
