
namespace HRM.RequestsStatus.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("RequestsStatus/PermissionRequests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PermissionRequestsRow))]
    public class PermissionRequestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/RequestsStatus/PermissionRequests/PermissionRequestsIndex.cshtml");
        }
    }
}