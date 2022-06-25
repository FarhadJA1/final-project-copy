using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Repo.Migrations
{
    public partial class test55 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Finance",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2022, 6, 15, 15, 48, 23, 698, DateTimeKind.Local).AddTicks(4848)),
                    Income = table.Column<long>(type: "bigint", nullable: false, defaultValue: 0L),
                    Expence = table.Column<long>(type: "bigint", nullable: false, defaultValue: 0L),
                    Total = table.Column<long>(type: "bigint", nullable: false, defaultValue: 0L),
                    SoftDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Finance", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Finance");
        }
    }
}
