
namespace HRM.Administration.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.FinancialyearRepository;
    using MyRow = Entities.FinancialyearRow;

    [RoutePrefix("Services/Administration/Financialyear"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FinancialyearController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            var StatusId = uow.Connection.InsertAndGetID<MyRow>(new MyRow
            {
                DateFrom = request.Entity.DateFrom,
                DateTo = request.Entity.DateTo,
                Status = request.Entity.Status

            });

            if (request.Entity.Status == true)
            {
                var FinancialList = uow.Connection.List<MyRow>().Where(x => x.Id != StatusId).ToList();

                foreach (var financialyear in FinancialList)
                {
                    var MyRow = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == financialyear.Id);
                    MyRow.Status = false;
                    uow.Connection.UpdateById<MyRow>(MyRow);
                }
            }

            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            var ID = request.Entity.Id;
            var StatusR = request.Entity.Status;
            var MyRow = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == ID);
            var Status = MyRow.Status;

            if (StatusR!=Status)
            {
                if (StatusR==true)
                {
                    var FinancialList = uow.Connection.List<MyRow>().Where(x => x.Id != ID).ToList();

                    foreach (var financialyear in FinancialList)
                    {
                        var MyRowEdited = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == financialyear.Id);
                      
                        MyRowEdited.Status = false;
                        uow.Connection.UpdateById<MyRow>(MyRowEdited);
                    }
                }
            }

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
