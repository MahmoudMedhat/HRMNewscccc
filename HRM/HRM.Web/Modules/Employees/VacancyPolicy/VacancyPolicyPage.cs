
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/VacancyPolicy"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VacancyPolicyRow))]
    public class VacancyPolicyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/VacancyPolicy/VacancyPolicyIndex.cshtml");
        }
    }
}