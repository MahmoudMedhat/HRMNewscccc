
namespace HRM.RequestsStatus.Endpoints
{
    using HRM.Administration.Entities;
    using HRM.Modules.RequestsStatus.EmpLoans;
    using HRM.SalaryDetails.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EmpLoansRepository;
    //using InstallmentsRow = Entities.InstallmentsRow;
    using MyRow = Entities.EmpLoansRow;

    [RoutePrefix("Services/RequestsStatus/EmpLoans"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EmpLoansController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().Update(uow, request);
            var UserID = request.Entity.UserId;
            var c = request.Entity.IsAccepted ;
            
            if (request.Entity.IsAccepted.ToString() == "Accepted")
            {
                var InstallmentAccepted = uow.Connection.List<InstallmentsRow>().Where(x => x.Loanid == request.Entity.Id).ToList();
                foreach (var installments in InstallmentAccepted)
                {
                    installments.IsAccepted = IsAcceptedEnum.Accepted;

                    var InstallmentsRowEdit = uow.Connection.List<InstallmentsRow>().FirstOrDefault(x => x.Id == installments.Id);
                    InstallmentsRowEdit.IsAccepted = IsAcceptedEnum.Accepted;
                    uow.Connection.UpdateById<InstallmentsRow>(InstallmentsRowEdit);

                }

                var installment = request.Entity.InstallmentsList.ToList();
                //List<InstallmentsRow> installment = uow.Connection.List<InstallmentsRow>().Where(x => x.Loanid == request.Entity.Id).ToList();
                foreach (var item in installment)
                {
                    var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserID).ToList();
                    var InstallmentDateR = item.InstallmentDate.Value;
                    var InstallmentValuesR = item.InstallmentValues;
                    foreach (var balance in BalanceAccountListRow)
                    {
                        DateTime DateEnd = balance.DateEnd.Value;
                        DateTime DateBeginn = balance.DateBeginn.Value;
                        if (InstallmentDateR.Ticks >= DateBeginn.Ticks && InstallmentDateR.Ticks <= DateEnd.Ticks)
                        {
                            if (balance.NetIncome <= 0)
                            {
                                throw new Exception("Sorry, the net income is less than zero ");
                            }
                            balance.NetIncome -= InstallmentValuesR;
                            var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserID && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                            uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                        }
                    }
                }

            }

            return new SaveResponse();
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            int EmploaanidR = int.Parse(request.EntityId.ToString());
            var IsAcceptedR = connection.List<MyRow>().FirstOrDefault(x => x.Id == EmploaanidR).IsAccepted;

            if (IsAcceptedR == IsAcceptedEnum.Accepted)
            {
                throw new Exception("The Loan request are accepted");
            }

            else if (IsAcceptedR == IsAcceptedEnum.NotAccepted)
            {
                throw new Exception("The Loan request are rejected");
            }
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
