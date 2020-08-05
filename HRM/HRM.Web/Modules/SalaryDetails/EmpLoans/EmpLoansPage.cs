
namespace HRM.SalaryDetails.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SalaryDetails/EmpLoans"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpLoansRow))]
    public class EmpLoansController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SalaryDetails/EmpLoans/EmpLoansIndex.cshtml");
        }
    }
}