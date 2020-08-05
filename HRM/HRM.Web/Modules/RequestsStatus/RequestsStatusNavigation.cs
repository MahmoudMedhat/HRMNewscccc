using Serenity.Navigation;
using MyPages = HRM.RequestsStatus.Pages;


[assembly: NavigationLink(int.MaxValue, "RequestsStatus/Vacancy Requests", typeof(MyPages.VacancyRequestsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "RequestsStatus/Permission Requests", typeof(MyPages.PermissionRequestsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "RequestsStatus/Permission Status", typeof(MyPages.PermissionStatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "RequestsStatus/Emp Loans", typeof(MyPages.EmpLoansController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "RequestsStatus/Installments", typeof(MyPages.InstallmentsController), icon: null)]