using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.HourDto
{
    public class HourDetailsDto
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string Time { get; set; }
        public List<TermGroupDto> GroupClassTerms { get; set; }
    }
    public class TermGroupDto
    {
        public GroupCodeTermDto Group { get; set; }
    }
    public class GroupCodeTermDto
    {
        public string GroupCode { get; set; }
    }
}
