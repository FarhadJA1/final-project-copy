using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.IdentityDto
{
    public class RegisterDto
    {
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

    }
}
