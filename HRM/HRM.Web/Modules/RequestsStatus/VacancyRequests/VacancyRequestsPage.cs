
namespace HRM.RequestsStatus.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("RequestsStatus/VacancyRequests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VacancyRequestsRow))]
    public class VacancyRequestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/RequestsStatus/VacancyRequests/VacancyRequestsIndex.cshtml");
        }
    }
}