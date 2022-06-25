using Domain.Common;
using System.Collections.Generic;


namespace Domain.Entities
{
    public class Resource : BaseEntity
    {
        public string Name { get; set; }
        public List<Student> Students { get; set; }
    }
}
