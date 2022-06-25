using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Repo.Migrations
{
    public partial class UpdateStudent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreateDate",
                table: "Student");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Teacher",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<bool>(
                name: "IsGraduated",
                table: "Student",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Teacher",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<bool>(
                name: "IsGraduated",
                table: "Student",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreateDate",
                table: "Student",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
