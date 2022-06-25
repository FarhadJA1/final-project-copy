using Domain.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.DTOs.IdentityDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static App.Utilities.Helpers.Helper;

namespace App.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;
        private readonly IWebHostEnvironment _env;
        private readonly UserManager<AppUser> _userManager;
        private readonly IEmailService _emailService;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AccountController(IAccountService service, IWebHostEnvironment env, UserManager<AppUser> userManager
                                , IEmailService emailService, RoleManager<IdentityRole> roleManager)
        {
            _accountService = service;
            _env = env;
            _userManager = userManager;
            _emailService = emailService;
            _roleManager = roleManager;

        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            await _accountService.Register(registerDto);
            _emailService.Register(registerDto);
            return Ok();
        }
        [HttpPost]
        [Route("Login")]
        public async Task<string> Login([FromBody] LoginDto loginDto)
        {
            return await _accountService.Login(loginDto);
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAllEmployees()        {
            
            return Ok(await _accountService.GetAllEmployeesAsync());
        }

        [HttpPost]
        [Route("CreateRole")]
        public async Task CreateRole()
        {
            foreach (var role in Enum.GetValues(typeof(Roles)))
            {
                if (!await _roleManager.RoleExistsAsync(role.ToString()))
                {
                    await _roleManager.CreateAsync(new IdentityRole { Name = role.ToString() });
                }
            }
        }
        [HttpGet]
        [Route("GetUserByEmail/{email}")]
        public async Task<UserDto> GetUserByEmail([FromRoute] string email)
        {
            var user = await _accountService.GetUserByEmailAsync(email);

            return user;
        }
    }
}
