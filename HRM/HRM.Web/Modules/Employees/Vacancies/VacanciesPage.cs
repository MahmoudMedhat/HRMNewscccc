
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/Vacancies"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VacanciesRow))]
    public class VacanciesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/Vacancies/VacanciesIndex.cshtml");
        }
    }
}