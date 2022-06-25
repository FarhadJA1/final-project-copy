using Microsoft.AspNetCore.Mvc;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class ProfessionController : BaseController
    {
        private readonly IProfessionService _professionService;
        public ProfessionController(IProfessionService professionService)
        {
            _professionService = professionService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _professionService.GetAllAsync();
            return Ok(result);
        }
    }
}
