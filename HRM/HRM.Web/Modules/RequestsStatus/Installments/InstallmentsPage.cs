
namespace HRM.RequestsStatus.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("RequestsStatus/Installments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InstallmentsRow))]
    public class InstallmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/RequestsStatus/Installments/InstallmentsIndex.cshtml");
        }
    }
}