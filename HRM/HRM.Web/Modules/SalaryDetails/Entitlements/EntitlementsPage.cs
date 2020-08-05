
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/Entitlements"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EntitlementsRow))]
    public class EntitlementsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/Entitlements/EntitlementsIndex.cshtml");
        }
    }
}