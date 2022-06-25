using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Repo.Migrations
{
    public partial class UpdateGroupClassTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 8, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "ClassroomId",
                table: "Group",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Group_ClassroomId",
                table: "Group",
                column: "ClassroomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Classroom_ClassroomId",
                table: "Group",
                column: "ClassroomId",
                principalTable: "Classroom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_Classroom_ClassroomId",
                table: "Group");

            migrationBuilder.DropIndex(
                name: "IX_Group_ClassroomId",
                table: "Group");

            migrationBuilder.DropColumn(
                name: "ClassroomId",
                table: "Group");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 8, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 11, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
