
namespace HRM.Administration.Endpoints
{
    using HRM.Modules.Administration.OfficialHolidays;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.OfficialHolidaysRepository;
    using MyRow = Entities.OfficialHolidaysRow;

    [RoutePrefix("Services/Administration/OfficialHolidays"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OfficialHolidaysController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            try
            {
                if (request.Entity.weekdays == null)
                {
                    request.Entity.weekdays = WeekDaysEnum.Null;
                }
            }
            catch (Exception)
            {
                request.Entity.weekdays = WeekDaysEnum.Null;

            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            //DateTime ClockInfoFromSystem = DateTime.Now;
            //int day1 = (int)ClockInfoFromSystem.DayOfWeek;
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
