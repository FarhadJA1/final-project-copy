using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class AccountRepository:IAccountRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<AppUser> entities;
        public AccountRepository(AppDbContext context)
        {
            _context = context;
            entities = _context.Set<AppUser>();
        }
        public async Task<List<AppUser>> GetAllEmployeesAsync()
        {
            List<AppUser> employees = await entities.ToListAsync();
            return employees;
        }


    }
}
