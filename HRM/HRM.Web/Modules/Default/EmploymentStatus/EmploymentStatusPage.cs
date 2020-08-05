
namespace HRM.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/EmploymentStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmploymentStatusRow))]
    public class EmploymentStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/EmploymentStatus/EmploymentStatusIndex.cshtml");
        }
    }
}