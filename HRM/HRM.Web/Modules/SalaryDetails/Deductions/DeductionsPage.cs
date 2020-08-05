
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/Deductions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DeductionsRow))]
    public class DeductionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/Deductions/DeductionsIndex.cshtml");
        }
    }
}