using FluentValidation;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeCreateDto
    {
        public string Name { get; set; }
    }
    public class GroupTypeCreateValidator : AbstractValidator<GroupTypeCreateDto>
    {
        public GroupTypeCreateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);

        }
    }
}
