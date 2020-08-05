
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/Premiumstype"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PremiumstypeRow))]
    public class PremiumstypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/Premiumstype/PremiumstypeIndex.cshtml");
        }
    }
}