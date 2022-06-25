using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class ClassroomRepository : Repository<Classroom>, IClassroomRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Classroom> entities;
        public ClassroomRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Classroom>();
        }

        public async Task<Classroom> ClassroomDetails(int id)
        {
            Classroom classroom = await entities
                .Where(m => m.Id == id)
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Group)
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Term)
                .FirstOrDefaultAsync();
            return classroom;
        }
        public async Task<List<Classroom>> GetAllClassrooms()
        {
            List<Classroom> classrooms = await entities
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Group)
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Term)
                .OrderByDescending(m=>m.Id)
                .ToListAsync();
            return classrooms;
        }
    }
}
