using Microsoft.EntityFrameworkCore.Migrations;

namespace Repo.Migrations
{
    public partial class NewMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_GroupType_GroupTypeId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group");

            migrationBuilder.AlterColumn<int>(
                name: "TeacherId",
                table: "Group",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "GroupTypeId",
                table: "Group",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Group_GroupType_GroupTypeId",
                table: "Group",
                column: "GroupTypeId",
                principalTable: "GroupType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group",
                column: "TeacherId",
                principalTable: "Teacher",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_GroupType_GroupTypeId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group");

            migrationBuilder.AlterColumn<int>(
                name: "TeacherId",
                table: "Group",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupTypeId",
                table: "Group",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_GroupType_GroupTypeId",
                table: "Group",
                column: "GroupTypeId",
                principalTable: "GroupType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group",
                column: "TeacherId",
                principalTable: "Teacher",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
