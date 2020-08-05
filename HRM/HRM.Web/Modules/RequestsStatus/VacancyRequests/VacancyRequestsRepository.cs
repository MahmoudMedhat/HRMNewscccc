
namespace HRM.RequestsStatus.Repositories
{
    using HRM.Employees.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.VacancyRequestsRow;

    public class VacancyRequestsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {

            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {

            protected override void ApplyFilters(SqlQuery query)
            {
                //Authorization.HasPermission
                int id = int.Parse(Authorization.UserId);
                var MangerID = Connection.List<UsersRow>().Where(x => x.MangerID == id).ToList();
                List<int?> ListOfUserId = MangerID.Select(x => x.UserId).ToList(); // 2ally ELLcurrent User modirhm
                var vacancies = Connection.List<VacancyRequestsRow>().Where(x => ListOfUserId.Contains(x.UserId));
                List<int?> vsID = vacancies.Select(x => x.Id).ToList();
                var vacancyRequest = Connection.List<VacancyRequestsRow>().Where(x => vsID.Contains(x.Id.Value)/* && x.StatusId == 3*/).Select(x => x.UserId.Value).ToList();//Pending

                var UserID = fld.UserId;

                foreach (var item in vacancyRequest)
                {
                    query.Where(UserID==item);
                }

                base.ApplyFilters(query);

            }
        }
    }
}