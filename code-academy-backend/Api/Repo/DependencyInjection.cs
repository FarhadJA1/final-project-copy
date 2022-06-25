using Microsoft.Extensions.DependencyInjection;
using Repo.Repositories;
using Repo.Repositories.Interfaces;


namespace Repo
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRepositoryLayer(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IGroupRepository, GroupRepository>();
            services.AddScoped<IGroupTypeRepository, GroupTypeRepository>();
            services.AddScoped<IPayTypeRepository, PayTypeRepository>();
            services.AddScoped<IResourceRepository, ResourceRepository>();
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<ITeacherRepository, TeacherRepository>();
            services.AddScoped<IHourRepository, HourRepository>();
            services.AddScoped<IClassroomRepository, ClassroomRepository>();
            services.AddScoped<IProfessionRepository, ProfessionRepository>();
            services.AddScoped<IGroupClassTermRepository, GroupClassTermRepository>();
            services.AddScoped<IFinanceRepository, FinanceRepository>();
            services.AddScoped<IAccountRepository, AccountRepository>();
            return services;
        }
    }
}
