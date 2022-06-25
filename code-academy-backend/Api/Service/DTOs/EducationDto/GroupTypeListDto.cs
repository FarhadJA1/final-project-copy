using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<GroupCodeDto> Groups { get; set; }
    }
}
