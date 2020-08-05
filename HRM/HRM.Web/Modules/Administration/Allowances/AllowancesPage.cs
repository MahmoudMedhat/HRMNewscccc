
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Allowances"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AllowancesRow))]
    public class AllowancesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Allowances/AllowancesIndex.cshtml");
        }
    }
}