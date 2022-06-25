using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.PayTypeDto
{
    public class PaymentDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<PaymentStudentsDto> Students { get; set; }
    }
    public class PaymentStudentsDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}
