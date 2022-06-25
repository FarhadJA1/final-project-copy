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
    public class FinanceRepository : Repository<Finance>, IFinanceRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Finance> entities;
        public FinanceRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Finance>();
        }

    }
}
