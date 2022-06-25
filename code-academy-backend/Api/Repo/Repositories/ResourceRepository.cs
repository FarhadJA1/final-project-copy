using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class ResourceRepository : Repository<Resource>, IResourceRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Resource> entities;

        public ResourceRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Resource>();
        }

        public async Task<Resource> ResourceDetails(int id)
        {
            Resource resource = await entities
                .Where(m => m.Id == id)
                .Include(m => m.Students)
                .FirstOrDefaultAsync();
            return resource;
        }
        public async Task<List<Resource>> GetAllResources()
        {
            List<Resource> resources = await entities     
                .Where(m=>m.SoftDelete==false)
                .Include(m => m.Students)
                .ToListAsync();
            return resources;
        }
    }
}
