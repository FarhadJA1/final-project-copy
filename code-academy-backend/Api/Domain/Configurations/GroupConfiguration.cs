using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace Domain.Configurations
{
    public class GroupConfiguration : IEntityTypeConfiguration<Group>
    {
        public void Configure(EntityTypeBuilder<Group> builder)
        {
            builder.Property(m => m.CreateDate).HasDefaultValue(DateTime.Now.ToShortDateString());
            builder.Property(m => m.IsOver).HasDefaultValue(false);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);

        }
    }
}
