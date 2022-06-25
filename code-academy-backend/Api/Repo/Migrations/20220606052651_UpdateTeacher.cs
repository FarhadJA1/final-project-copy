using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Repo.Migrations
{
    public partial class UpdateTeacher : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreateDate",
                table: "Teacher");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 6, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreateDate",
                table: "Teacher",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 6, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
