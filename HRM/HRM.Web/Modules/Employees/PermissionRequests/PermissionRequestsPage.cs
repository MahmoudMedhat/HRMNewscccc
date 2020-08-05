
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/PermissionRequests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PermissionRequestsRow))]
    public class PermissionRequestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/PermissionRequests/PermissionRequestsIndex.cshtml");
        }
    }
}