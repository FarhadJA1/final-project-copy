using FluentValidation;

namespace Service.DTOs.PayTypeDto
{
    public class PayTypeCreateDto
    {
        public string Name { get; set; }
    }
    public class PayTypeCreateValidator : AbstractValidator<PayTypeUpdateDto>
    {
        public PayTypeCreateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);

        }
    }
}
