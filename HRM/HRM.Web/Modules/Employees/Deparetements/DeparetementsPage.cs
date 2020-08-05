
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/Deparetements"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DeparetementsRow))]
    public class DeparetementsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/Deparetements/DeparetementsIndex.cshtml");
        }
    }
}