
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/BasicInsurances"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BasicInsurancesRow))]
    public class BasicInsurancesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/BasicInsurances/BasicInsurancesIndex.cshtml");
        }
    }
}