using FluentValidation;

namespace Service.DTOs.PayTypeDto
{
    public class PayTypeUpdateDto
    {
        public string Name { get; set; }
    }
    public class PayTypeUpdateValidator : AbstractValidator<PayTypeUpdateDto>
    {
        public PayTypeUpdateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);
        }
    }
}
