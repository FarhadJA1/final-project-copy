using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;

namespace Repo.Repositories
{
    public class ProfessionRepository : Repository<Profession>, IProfessionRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Profession> entities;
        public ProfessionRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Profession>();
        }
    }
}
