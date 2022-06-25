using Microsoft.AspNetCore.Mvc;
using Service.DTOs.EducationDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class EducationController : BaseController
    {
        private readonly IEducationService _educationService;
        public EducationController(IEducationService educationService)
        {
            _educationService = educationService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _educationService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateEducation")]
        public async Task<IActionResult> Create([FromBody] GroupTypeCreateDto groupTypeCreate)
        {
            await _educationService.CreateAsync(groupTypeCreate);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteEducation/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _educationService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateEducation/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] GroupTypeUpdateDto groupTypeUpdate)
        {
            await _educationService.UpdateAsync(id, groupTypeUpdate);
            return Ok();
        }
        [HttpGet]
        [Route("EducationDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _educationService.GroupTypeDetailsAsync(id));
        }
    }
}
