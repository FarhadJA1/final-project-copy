using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<GroupCodeDto> Groups { get; set; }
    }
    public class GroupCodeDto
    {
        public string GroupCode { get; set; }
    }
}
