
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/BalanceAccount"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BalanceAccountRow))]
    public class BalanceAccountController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/BalanceAccount/BalanceAccountIndex.cshtml");
        }
    }
}