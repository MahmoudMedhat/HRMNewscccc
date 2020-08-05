
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/Jobs"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.JobsRow))]
    public class JobsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/Jobs/JobsIndex.cshtml");
        }
    }
}