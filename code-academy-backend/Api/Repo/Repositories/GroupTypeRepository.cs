using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class GroupTypeRepository : Repository<GroupType>, IGroupTypeRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<GroupType> entities;
        public GroupTypeRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<GroupType>();
        }

        public async Task<GroupType> GroupTypeDetails(int id)
        {
            GroupType groupType = await entities.Where(m => m.Id == id)
                .Include(m => m.Groups)
                .FirstOrDefaultAsync();
            return groupType;
        }
        public async Task<List<GroupType>> GetAllGroupTypeDetails()
        {
            List<GroupType> groupType = await entities
                .OrderByDescending(m=>m.Id)
                .Include(m => m.Groups)
                .ToListAsync();
            return groupType;
        }
    }
}
