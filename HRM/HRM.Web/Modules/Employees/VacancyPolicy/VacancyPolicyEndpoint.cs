
namespace HRM.Employees.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.VacancyPolicyRepository;
    using MyRow = Entities.VacancyPolicyRow;

    [RoutePrefix("Services/Employees/VacancyPolicy"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VacancyPolicyController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var FromYearsR = request.Entity.FromYears;
            var ToYearsR = request.Entity.ToYears;
            var VacancyIdR = request.Entity.VacancyId;

            var VacancyDetails = uow.Connection.List<MyRow>().Where(x => x.VacancyId == VacancyIdR).ToList();

            foreach (var item in VacancyDetails)
            {

                var ToYears = item.ToYears;
                var FromYears = item.FromYears;
                if (ToYears == ToYearsR && FromYears == FromYearsR /*||  FromYearsR== ToYears*/ )
                {
                    throw new Exception("Sorry please change from Years and to Years ");
                }
            }


            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            //var FromYearsR = request.Entity.FromYears;
            //var ToYearsR = request.Entity.ToYears;
            //var VacancyIdR = request.Entity.VacancyId;

            //var VacancyDetails = uow.Connection.List<MyRow>().Where(x => x.VacancyId == VacancyIdR).ToList();

            //foreach (var item in VacancyDetails)
            //{

            //    var ToYears = item.ToYears;
            //    var FromYears = item.FromYears;
            //    if (ToYears == ToYearsR && FromYears == FromYearsR || FromYearsR == ToYears)
            //    {
            //        throw new Exception("Sorry please change from Years and to Years ");
            //    }
            //}
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
