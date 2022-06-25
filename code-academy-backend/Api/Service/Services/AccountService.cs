using AutoMapper;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Repo.Data;
using Repo.Repositories.Interfaces;
using Service.DTOs.IdentityDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class AccountService:IAccountService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;
        private readonly IEmailService _emailService;
        private readonly IAccountRepository _accountRepository;
        public AccountService(UserManager<AppUser> userManager,
                                 IMapper mapper,
                                 ITokenService tokenService,
                                 IEmailService emailService,
                                 IAccountRepository accountRepository)
        {
            _mapper = mapper;
            _userManager = userManager;
            _tokenService = tokenService;
            _emailService = emailService;
            _accountRepository = accountRepository;
        }
        public async Task Register(RegisterDto registerDto)
        {
            string password = "Code12345_";
            string fullname = registerDto.Name + " " + registerDto.Surname;
            string prefix = "(+994)";
            AppUser user = new()
            {
                Fullname=fullname,
                Email=registerDto.Email,
                PhoneNumber=prefix+registerDto.PhoneNumber.ToString(),
                UserName=registerDto.Email,
            };
            await _userManager.CreateAsync(user, password);            
        }
        public async Task<string> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user is null) return null;

            if (!await _userManager.CheckPasswordAsync(user, loginDto.Password)) return null;

            var roles = await _userManager.GetRolesAsync(user);

            string token = _tokenService.GenerateJwtToken(user.Email, user.UserName, (List<string>)roles);

            return token;
        }
        public async Task<List<AppUser>> GetAllEmployeesAsync()
        {
            var model = await _accountRepository.GetAllEmployeesAsync();
            return model;            
        }
        public async Task<UserDto> GetUserByEmailAsync(string email)
        {
            var appuser = await _userManager.FindByEmailAsync(email);
            var user = _mapper.Map<UserDto>(appuser);
            return user;
        }

    }
}
