
namespace HRM.RequestsStatus.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("RequestsStatus/EmpLoans"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpLoansRow))]
    public class EmpLoansController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/RequestsStatus/EmpLoans/EmpLoansIndex.cshtml");
        }
    }
}