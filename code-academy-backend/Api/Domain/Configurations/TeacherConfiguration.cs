using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Domain.Configurations
{
    public class TeacherConfiguration : IEntityTypeConfiguration<Teacher>
    {
        public void Configure(EntityTypeBuilder<Teacher> builder)
        {
            builder.Property(m => m.Name).IsRequired().HasMaxLength(100);
            builder.Property(m => m.Surname).IsRequired().HasMaxLength(100);
            builder.Property(m => m.Birthday).IsRequired();
            builder.Property(m => m.Email).IsRequired().HasMaxLength(100);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
        }
    }
}
