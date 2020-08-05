
namespace HRM.AttendanceSheet.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AttendanceSheet/AttendanceSheet"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AttendanceSheetRow))]
    public class AttendanceSheetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AttendanceSheet/AttendanceSheet/AttendanceSheetIndex.cshtml");
        }
    }
}