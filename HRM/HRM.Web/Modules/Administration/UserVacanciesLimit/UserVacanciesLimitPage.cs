
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/UserVacanciesLimit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserVacanciesLimitRow))]
    public class UserVacanciesLimitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/UserVacanciesLimit/UserVacanciesLimitIndex.cshtml");
        }
    }
}