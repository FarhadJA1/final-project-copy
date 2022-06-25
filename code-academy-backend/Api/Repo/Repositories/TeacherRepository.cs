using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Teacher> entities;
        public TeacherRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Teacher>();
        }

        public async Task<List<Teacher>> GetAllTeacherDetails()
        {
            List<Teacher> teachers = await entities
                .Where(m => m.SoftDelete == false)
                .OrderByDescending(m => m.Id)
                .Include(m => m.Groups)
                .Include(m => m.Profession)
                .ToListAsync();

            return teachers;
        }
        public async Task<Teacher> GetTeacherDetails(int id)
        {
            Teacher teacher = await entities
                .Where(m => m.Id == id)                
                .Include(m => m.Groups)
                .Include(m => m.Profession)
                .FirstOrDefaultAsync();

            return teacher;
        }
    }
}
