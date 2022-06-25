using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class HourRepository : Repository<Term>, IHourRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Term> entities;
        public HourRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Term>();
        }

        public async Task<Term> HourDetails(int id)
        {
            Term term = await entities.Where(m => m.Id == id)
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Classroom)
                .Include(x => x.GroupClassTerms)
                .ThenInclude(x => x.Group)
                .FirstOrDefaultAsync();

            return term;
        }
        public async Task<List<Term>> GetAllTermDetails()
        {
           List<Term> terms = await entities
                .OrderByDescending(m => m.Id)
                .Include(m => m.GroupClassTerms)
                .ThenInclude(m => m.Group)
                .ToListAsync();

            return terms;
        }
    }
}
