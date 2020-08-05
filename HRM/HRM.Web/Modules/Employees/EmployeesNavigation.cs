using Serenity.Navigation;
using MyPages = HRM.Employees.Pages;

[assembly: NavigationLink(int.MaxValue, "Employees/Deparetements", typeof(MyPages.DeparetementsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Jobs", typeof(MyPages.JobsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Users", typeof(MyPages.UsersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Vacancies", typeof(MyPages.VacanciesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Vacancy Requests", typeof(MyPages.VacancyRequestsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Status", typeof(MyPages.StatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Permission Requests", typeof(MyPages.PermissionRequestsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Employees/Vacancy Policy", typeof(MyPages.VacancyPolicyController), icon: null)]