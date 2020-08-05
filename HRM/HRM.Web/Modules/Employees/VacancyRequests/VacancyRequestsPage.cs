
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/VacancyRequests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VacancyRequestsRow))]
    public class VacancyRequestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/VacancyRequests/VacancyRequestsIndex.cshtml");
        }
    }
}