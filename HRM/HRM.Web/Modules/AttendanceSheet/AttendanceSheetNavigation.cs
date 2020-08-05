using Serenity.Navigation;
using MyPages = HRM.AttendanceSheet.Pages;

[assembly: NavigationLink(int.MaxValue, "AttendanceSheet/Attendance Sheet", typeof(MyPages.AttendanceSheetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "AttendanceSheet/Leave", typeof(MyPages.LeaveController), icon: null)]