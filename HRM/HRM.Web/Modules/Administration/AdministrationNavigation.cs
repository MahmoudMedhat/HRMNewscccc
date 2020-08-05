using Serenity.Navigation;
using MyPages = HRM.Administration.Pages;
using Administration = HRM.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: HRM.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Emploees Status", typeof(MyPages.EmploeesStatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Allowances", typeof(MyPages.AllowancesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Balance Account", typeof(MyPages.BalanceAccountController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Basic Insurances", typeof(MyPages.BasicInsurancesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Financialyear", typeof(MyPages.FinancialyearController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/User Vacancies Limit", typeof(MyPages.UserVacanciesLimitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Official Holidays", typeof(MyPages.OfficialHolidaysController), icon: null)]