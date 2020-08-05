
namespace HRM.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/OfficialHolidays"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OfficialHolidaysRow))]
    public class OfficialHolidaysController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/OfficialHolidays/OfficialHolidaysIndex.cshtml");
        }
    }
}