
namespace HRM.Employees.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.PermissionRequestsRepository;
    using MyRow = Entities.PermissionRequestsRow;

    [RoutePrefix("Services/Employees/PermissionRequests"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PermissionRequestsController : ServiceEndpoint
    {
        public static int CalculateYourVacancies(DateTime to, DateTime from)
        {
            TimeSpan diff = to - from;
            return diff.Days;
        }
        public static float CalculateYourHour(DateTime to, DateTime from)
        {
            TimeSpan diff = to.Subtract(from);
            return diff.Minutes;
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            int UserID = int.Parse(Authorization.UserId);
            request.Entity.UserId = UserID;
            request.Entity.Date = DateTime.Now;
            request.Entity.StatusId = 3; // Pending
            request.Entity.IsAcceptedbyHr = 0; // False

            List<MyRow> permissions = uow.Connection.List<MyRow>().Where(x => x.UserId == UserID && x.IsAcceptedbyHr == 1).ToList();

            double AllVacNum = 0;
            int month = DateTime.Now.Month;
            foreach (var item in permissions)
            {
                if (item.DateFrom.Value.Month == month)
                {
                    TimeSpan span = item.Dateto.Value.Subtract(item.DateFrom.Value);
                    double hours = span.TotalHours;
                    AllVacNum += hours;
                }
            }

            if (AllVacNum < 4)
            {
                float x = CalculateYourHour(request.Entity.Dateto.Value, request.Entity.DateFrom.Value);
                TimeSpan span = request.Entity.Dateto.Value.Subtract(request.Entity.DateFrom.Value);
                double hours = span.TotalHours;
                if (hours <= 4)
                {
                    return new MyRepository().Create(uow, request);
                }
            }

            throw new Exception("Sorry");
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
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
