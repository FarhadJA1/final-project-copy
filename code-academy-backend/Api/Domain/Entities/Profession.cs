using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Profession : BaseEntity
    {
        public string Name { get; set; }
        public List<Teacher> Teachers { get; set; }
    }
}
