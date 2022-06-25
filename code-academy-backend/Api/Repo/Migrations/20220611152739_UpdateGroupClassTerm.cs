using Microsoft.EntityFrameworkCore.Migrations;

namespace Repo.Migrations
{
    public partial class UpdateGroupClassTerm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_Classroom_ClassroomId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Classroom_ClassroomId",
                table: "GroupClassTerm");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Group_GroupId",
                table: "GroupClassTerm");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Term_TermId",
                table: "GroupClassTerm");

            migrationBuilder.DropIndex(
                name: "IX_GroupClassTerm_GroupId",
                table: "GroupClassTerm");

            migrationBuilder.DropIndex(
                name: "IX_Group_ClassroomId",
                table: "Group");

            migrationBuilder.DropColumn(
                name: "ClassroomId",
                table: "Group");

            migrationBuilder.AlterColumn<int>(
                name: "TermId",
                table: "GroupClassTerm",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "GroupId",
                table: "GroupClassTerm",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ClassroomId",
                table: "GroupClassTerm",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_GroupClassTerm_GroupId",
                table: "GroupClassTerm",
                column: "GroupId",
                unique: true,
                filter: "[GroupId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Classroom_ClassroomId",
                table: "GroupClassTerm",
                column: "ClassroomId",
                principalTable: "Classroom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Group_GroupId",
                table: "GroupClassTerm",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Term_TermId",
                table: "GroupClassTerm",
                column: "TermId",
                principalTable: "Term",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Classroom_ClassroomId",
                table: "GroupClassTerm");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Group_GroupId",
                table: "GroupClassTerm");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupClassTerm_Term_TermId",
                table: "GroupClassTerm");

            migrationBuilder.DropIndex(
                name: "IX_GroupClassTerm_GroupId",
                table: "GroupClassTerm");

            migrationBuilder.AlterColumn<int>(
                name: "TermId",
                table: "GroupClassTerm",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupId",
                table: "GroupClassTerm",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ClassroomId",
                table: "GroupClassTerm",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ClassroomId",
                table: "Group",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_GroupClassTerm_GroupId",
                table: "GroupClassTerm",
                column: "GroupId");

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

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Classroom_ClassroomId",
                table: "GroupClassTerm",
                column: "ClassroomId",
                principalTable: "Classroom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Group_GroupId",
                table: "GroupClassTerm",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupClassTerm_Term_TermId",
                table: "GroupClassTerm",
                column: "TermId",
                principalTable: "Term",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
