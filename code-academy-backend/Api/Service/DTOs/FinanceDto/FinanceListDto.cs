using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.FinanceDto
{
    public class FinanceListDto
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public long Income { get; set; }
        public long Expence { get; set; }
        public long Total { get; set; }
    }
}
