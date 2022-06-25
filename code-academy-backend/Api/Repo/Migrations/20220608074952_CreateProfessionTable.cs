using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Repo.Migrations
{
    public partial class CreateProfessionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProfessionId",
                table: "Teacher",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 8, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 7, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Profession",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoftDelete = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profession", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_ProfessionId",
                table: "Teacher",
                column: "ProfessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher_Profession_ProfessionId",
                table: "Teacher",
                column: "ProfessionId",
                principalTable: "Profession",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teacher_Profession_ProfessionId",
                table: "Teacher");

            migrationBuilder.DropTable(
                name: "Profession");

            migrationBuilder.DropIndex(
                name: "IX_Teacher_ProfessionId",
                table: "Teacher");

            migrationBuilder.DropColumn(
                name: "ProfessionId",
                table: "Teacher");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Group",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 6, 7, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 6, 8, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
