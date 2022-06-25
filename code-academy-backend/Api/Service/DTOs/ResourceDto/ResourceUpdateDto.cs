using FluentValidation;


namespace Service.DTOs.ResourceDto
{
    public class ResourceUpdateDto
    {
        public string Name { get; set; }
    }
    public class ResourceUpdateValidator : AbstractValidator<ResourceUpdateDto>
    {
        public ResourceUpdateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Resource Type'").MaximumLength(40);
        }
    }
}
