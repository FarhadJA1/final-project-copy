using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Configurations
{
    public class ClassroomConfiguration : IEntityTypeConfiguration<Classroom>
    {
        public void Configure(EntityTypeBuilder<Classroom> builder)
        {
            builder.Property(m => m.Name).IsRequired();
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
            builder.Property(m => m.IsBusy).HasDefaultValue(false);
        }
    }
}
