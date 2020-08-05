
namespace HRM.RequestsStatus.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("RequestsStatus/PermissionStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PermissionStatusRow))]
    public class PermissionStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/RequestsStatus/PermissionStatus/PermissionStatusIndex.cshtml");
        }
    }
}