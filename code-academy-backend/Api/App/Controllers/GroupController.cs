using Microsoft.AspNetCore.Mvc;

using Service.DTOs.GroupDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class GroupController : BaseController
    {
        private readonly IGroupService _groupService;
        public GroupController(IGroupService groupService)
        {
            _groupService = groupService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _groupService.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [Route("CreateGroup")]
        public async Task<IActionResult> Create([FromBody] GroupCreateDto groupCreateDto)
        {
            await _groupService.CreateAsync(groupCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteGroup/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _groupService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("AddTeacher/{id}")]
        public async Task<IActionResult> AddTeacher([FromRoute] int id, [FromBody] AddTeacherDto addTeacherDto)
        {
            await _groupService.AssignTeacherAsync(id, addTeacherDto);
            return Ok();
        }
        [HttpPut]
        [Route("AddClassroom/{id}")]
        public async Task<IActionResult> AddClassroom([FromRoute] int id, [FromBody] AddClassroomDto addClassroomDto)
        {
            await _groupService.AssignClassroomAsync(id, addClassroomDto);
            return Ok();
        }
        [HttpPut]
        [Route("AddStudents/{id}")]
        public async Task<IActionResult> AddStudents([FromRoute] int id, [FromBody] AddStudentDto addStudentDto)
        {
            await _groupService.AddStudentsAsync(id, addStudentDto);
            return Ok();
        }
        [HttpGet]
        [Route("GroupDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _groupService.GroupDetailsAsync(id));
        }


    }
}
