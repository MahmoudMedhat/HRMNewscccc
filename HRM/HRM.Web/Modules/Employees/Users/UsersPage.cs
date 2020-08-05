
namespace HRM.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employees/Users"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UsersRow))]
    public class UsersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employees/Users/UsersIndex.cshtml");
        }
    }
}