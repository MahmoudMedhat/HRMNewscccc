
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/Premiums"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PremiumsRow))]
    public class PremiumsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/Premiums/PremiumsIndex.cshtml");
        }
    }
}