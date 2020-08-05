
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/Status"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusRow))]
    public class StatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/Status/StatusIndex.cshtml");
        }
    }
}