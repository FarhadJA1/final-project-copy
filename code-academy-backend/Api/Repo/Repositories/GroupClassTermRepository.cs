using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class GroupClassTermRepository : Repository<GroupClassTerm>, IGroupClassTermRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<GroupClassTerm> entities;
        public GroupClassTermRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<GroupClassTerm>();
        }
        public async Task<GroupClassTerm> GetGroupById(int id)
        {
            GroupClassTerm groupClassTerm = await entities.Where(m => m.GroupId == id).FirstOrDefaultAsync();
            return groupClassTerm;
        }
    }
}
