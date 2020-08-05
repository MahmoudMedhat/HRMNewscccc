
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Financialyear"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FinancialyearRow))]
    public class FinancialyearController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Financialyear/FinancialyearIndex.cshtml");
        }
    }
}