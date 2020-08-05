using Serenity.Navigation;
using MyPages = HRM.SalaryDetails.Pages;

[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Deductions", typeof(MyPages.DeductionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Emp Loans", typeof(MyPages.EmpLoansController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Entitlements", typeof(MyPages.EntitlementsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Installments", typeof(MyPages.InstallmentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Premiums", typeof(MyPages.PremiumsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SalaryDetails/Premiumstype", typeof(MyPages.PremiumstypeController), icon: null)]