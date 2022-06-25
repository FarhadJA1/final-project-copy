using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Domain.Configurations
{
    public class ResourceConfiguration : IEntityTypeConfiguration<Resource>
    {
        public void Configure(EntityTypeBuilder<Resource> builder)
        {
            builder.Property(m => m.Name).IsRequired().HasMaxLength(50);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
        }
    }
}
