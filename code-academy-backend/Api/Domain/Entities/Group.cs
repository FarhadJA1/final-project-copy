using Domain.Common;
using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Group : BaseEntity
    {
        public int? GroupTypeId { get; set; }
        public GroupType GroupType { get; set; }
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public int? TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsOver { get; set; }
        public GroupClassTerm GroupClassTerm { get; set; }
    }
}
