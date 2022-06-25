using Domain.Entities;
using Service.DTOs.IdentityDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IAccountService
    {
        Task Register(RegisterDto registerDto);
        Task<string> Login(LoginDto loginDto);
        Task<List<AppUser>> GetAllEmployeesAsync();
        Task<UserDto> GetUserByEmailAsync(string email);
    }
}
