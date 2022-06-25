using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Repo.Migrations
{
    public partial class UpdateClassroom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Teacher",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 5, 25, 11, 44, 56, 386, DateTimeKind.Local).AddTicks(6694));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Student",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 5, 25, 0, 0, 0, 0, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 5, 25, 0, 0, 0, 0, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Teacher",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 5, 25, 11, 44, 56, 386, DateTimeKind.Local).AddTicks(6694),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Student",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 5, 25, 0, 0, 0, 0, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 5, 25, 0, 0, 0, 0, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
