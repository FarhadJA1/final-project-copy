using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Term : BaseEntity
    {
        public string Day { get; set; }
        public string Time { get; set; }
        public List<GroupClassTerm> GroupClassTerms { get; set; }
    }
}
