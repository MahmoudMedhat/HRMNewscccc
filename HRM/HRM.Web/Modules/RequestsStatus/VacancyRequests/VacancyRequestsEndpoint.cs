
namespace HRM.RequestsStatus.Endpoints
{
    using HRM.Employees;
    using HRM.Employees.Entities;
    
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.VacancyRequestsRepository;
    using MyRow = Entities.VacancyRequestsRow;

    [RoutePrefix("Services/RequestsStatus/VacancyRequests"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VacancyRequestsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
            //int ID = int.Parse(request.EntityId.ToString());
            //VacancyRequestsRow VacancyRequestsRow = connection.List<VacancyRequestsRow>().FirstOrDefault(x => x.Id == ID);
            //int? StatusId = VacancyRequestsRow.StatusId;
            //AcceptedHREnum? IsAcceptedbyHr = VacancyRequestsRow.IsAcceptedbyHr;
            //if (StatusId == 1 && IsAcceptedbyHr == AcceptedHREnum.Approved) // Approved and closed 
            //{
            //    throw new Exception("Your request are approved and closed");
            //}
            //else if (StatusId == 2) // Refused
            //{
            //    throw new Exception("Your request are refused");
            //}

            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
