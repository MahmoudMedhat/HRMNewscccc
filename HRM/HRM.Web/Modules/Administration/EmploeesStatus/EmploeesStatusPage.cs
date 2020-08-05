
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/EmploeesStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmploeesStatusRow))]
    public class EmploeesStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/EmploeesStatus/EmploeesStatusIndex.cshtml");
        }
    }
}