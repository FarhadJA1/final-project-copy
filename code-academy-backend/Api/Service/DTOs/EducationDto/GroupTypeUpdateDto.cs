using FluentValidation;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeUpdateDto
    {
        public string Name { get; set; }
    }
    public class GroupTypeUpdateValidator : AbstractValidator<GroupTypeUpdateDto>
    {
        public GroupTypeUpdateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);
        }
    }
}
