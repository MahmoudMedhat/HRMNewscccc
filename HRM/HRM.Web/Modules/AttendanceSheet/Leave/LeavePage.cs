
namespace HRM.AttendanceSheet.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AttendanceSheet/Leave"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LeaveRow))]
    public class LeaveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AttendanceSheet/Leave/LeaveIndex.cshtml");
        }
    }
}