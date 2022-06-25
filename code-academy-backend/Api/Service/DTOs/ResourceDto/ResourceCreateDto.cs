using FluentValidation;

namespace Service.DTOs.ResourceDto
{
    public class ResourceCreateDto
    {
        public string Name { get; set; }

    }
    public class ResourceCreateValidator : AbstractValidator<ResourceCreateDto>
    {
        public ResourceCreateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Resource Type'").MaximumLength(40);

        }
    }
}
