using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Finance:BaseEntity
    {
        public DateTime CreateDate { get; set; }
        public long Income { get; set; }
        public long Expence { get; set; }
        public long Total { get; set; }
    }
}
