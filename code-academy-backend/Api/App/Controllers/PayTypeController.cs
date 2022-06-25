using Microsoft.AspNetCore.Mvc;
using Service.DTOs.PayTypeDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class PayTypeController : BaseController
    {
        private readonly IPayTypeService _payTypeService;
        public PayTypeController(IPayTypeService payTypeService)
        {
            _payTypeService = payTypeService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _payTypeService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreatePayment")]
        public async Task<IActionResult> Create([FromBody] PayTypeCreateDto payTypeCreateDto)
        {
            await _payTypeService.CreateAsync(payTypeCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeletePayment/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _payTypeService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdatePayment/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] PayTypeUpdateDto payTypeUpdateDto)
        {
            await _payTypeService.UpdateAsync(id, payTypeUpdateDto);
            return Ok();
        }
        [HttpGet]
        [Route("PaymentDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _payTypeService.PayTypeDetailsAsync(id));
        }
    }
}
