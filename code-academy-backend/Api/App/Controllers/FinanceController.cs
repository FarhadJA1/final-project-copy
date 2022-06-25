using Microsoft.AspNetCore.Mvc;
using Service.DTOs.FinanceDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class FinanceController : BaseController
    {
        private readonly IFinanceService _financeService;
        public FinanceController(IFinanceService financeService)
        {
            _financeService = financeService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _financeService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateReport")]
        public async Task<IActionResult> Create([FromBody] FinanceCreateDto financeCreateDto)
        {
            await _financeService.CreateAsync(financeCreateDto);
            return Ok();
        }
    }
}
