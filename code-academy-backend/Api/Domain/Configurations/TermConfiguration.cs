using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Domain.Configurations
{
    public class TermConfiguration : IEntityTypeConfiguration<Term>
    {
        public void Configure(EntityTypeBuilder<Term> builder)
        {
            builder.Property(m => m.Day).IsRequired();
            builder.Property(m => m.Time).IsRequired();
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
        }
    }
}
