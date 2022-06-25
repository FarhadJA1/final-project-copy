using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ResourceDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class ResourceController : BaseController
    {
        private readonly IResourceService _resourceService;
        public ResourceController(IResourceService resourceService)
        {
            _resourceService = resourceService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _resourceService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateResource")]
        public async Task<IActionResult> Create([FromBody] ResourceCreateDto groupCreateDto)
        {
            await _resourceService.CreateAsync(groupCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteResource/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _resourceService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateResource/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] ResourceUpdateDto resourceUpdateDto)
        {
            await _resourceService.UpdateAsync(id, resourceUpdateDto);
            return Ok();
        }
        [HttpGet]
        [Route("ResourceDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _resourceService.ResourceDetailsAsync(id));
        }
    }
}
