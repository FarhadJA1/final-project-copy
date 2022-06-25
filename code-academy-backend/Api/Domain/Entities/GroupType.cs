using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class GroupType : BaseEntity
    {
        public string Name { get; set; }
        public List<Group> Groups { get; set; }
    }
}
