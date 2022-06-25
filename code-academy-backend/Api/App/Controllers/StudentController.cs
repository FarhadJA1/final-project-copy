using Microsoft.AspNetCore.Mvc;
using Service.DTOs.StudentDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class StudentController : BaseController
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _studentService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateStudent")]
        public async Task<IActionResult> Create([FromBody] StudentCreateDto studentCreateDto)
        {
            await _studentService.CreateAsync(studentCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteStudent/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _studentService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateStudent/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] StudentUpdateDto studentUpdateDto)
        {
            await _studentService.UpdateAsync(id, studentUpdateDto);
            return Ok();
        }
        [HttpGet]
        [Route("StudentDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _studentService.StudentDetailsAsync(id));
        }
    }
}
