using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Configurations
{
    public class FinanceConfiguration : IEntityTypeConfiguration<Finance>
    {
        public void Configure(EntityTypeBuilder<Finance> builder)
        {
            builder.Property(m => m.CreateDate).HasDefaultValue(DateTime.Now);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
            builder.Property(m => m.Expence).HasDefaultValue(0);
            builder.Property(m => m.Income).HasDefaultValue(0);
            builder.Property(m => m.Total).HasDefaultValue(0);
        }
    }
}
