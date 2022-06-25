using Domain.Common;
using System.Collections.Generic;


namespace Domain.Entities
{
    public class Classroom : BaseEntity
    {
        public string Name { get; set; }
        public bool IsBusy { get; set; }
        public int Capacity { get; set; }
        public List<GroupClassTerm> GroupClassTerms { get; set; }

    }
}
