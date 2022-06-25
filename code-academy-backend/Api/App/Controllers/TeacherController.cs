using Microsoft.AspNetCore.Mvc;
using Service.DTOs.TeacherDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class TeacherController : BaseController
    {
        private readonly ITeacherService _teacherService;
        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _teacherService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateTeacher")]
        public async Task<IActionResult> Create([FromBody] TeacherCreateDto teacherCreateDto)
        {
            await _teacherService.CreateAsync(teacherCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteTeacher/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _teacherService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateTeacher/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] TeacherUpdateDto teacherUpdateDto)
        {
            await _teacherService.UpdateAsync(id, teacherUpdateDto);
            return Ok();
        }
        [HttpGet]
        [Route("TeacherDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _teacherService.TeacherDetailsAsync(id));
        }
    }
}
