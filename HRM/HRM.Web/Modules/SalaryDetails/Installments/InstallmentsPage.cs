
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/Installments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InstallmentsRow))]
    public class InstallmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/Installments/InstallmentsIndex.cshtml");
        }
    }
}