
namespace HRM.SalaryDetails.Endpoints
{
    using HRM.Administration.Entities;
    using HRM.Modules.RequestsStatus.EmpLoans;
    using HRM.SalaryDetails.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EmpLoansRepository;
    using MyRow = Entities.EmpLoansRow;

    [RoutePrefix("Services/SalaryDetails/EmpLoans"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EmpLoansController : ServiceEndpoint
    {

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            int UserID = int.Parse(Authorization.UserId);
            var LoanID = uow.Connection.InsertAndGetID<MyRow>(new MyRow
            {
                UserId = UserID,
                Loan = request.Entity.Loan,
                AdvancReason = request.Entity.AdvancReason,
                Date = DateTime.Now,
                IsAccepted = IsAcceptedEnum.Pending
            });
            var InstallmentsListR = request.Entity.InstallmentsList;
            decimal? InstallmentsSum = 0;

            foreach (var item in InstallmentsListR)
            {
                var InstallmentDateR = item.InstallmentDate.Value;
                var InstallmentValuesR = item.InstallmentValues;
                InstallmentsSum += item.InstallmentValues;

                InstallmentsRow installmentsRow = new InstallmentsRow();

                installmentsRow.UserId = UserID;
                installmentsRow.Loanid = int.Parse(LoanID.ToString());
                installmentsRow.InstallmentDate = InstallmentDateR;
                installmentsRow.InstallmentValues = InstallmentValuesR;
                installmentsRow.DateEmpLoan = DateTime.Now;
                installmentsRow.IsAccepted = IsAcceptedEnum.Pending;
                uow.Connection.Insert<InstallmentsRow>(installmentsRow);

                //var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.UserId == UserID).ToList();

                //foreach (var balance in BalanceAccountListRow)
                //{
                //    DateTime DateEnd = balance.DateEnd.Value;
                //    DateTime DateBeginn = balance.DateBeginn.Value;
                //    if (InstallmentDateR.Ticks > DateBeginn.Ticks && InstallmentDateR.Ticks < DateEnd.Ticks)
                //    {
                //        if (balance.NetIncome <= 0)
                //        {
                //            throw new Exception("Sorry, the net income is less than zero ");
                //        }
                //        balance.NetIncome -= InstallmentValuesR;
                //        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.UserId == UserID && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                //        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                //    }
                //}
            }
            if (InstallmentsSum != request.Entity.Loan)
            {
                throw new Exception("The sum of the installment amount must be equal to the loan amount !");
            }
            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            int LoanIdR = int.Parse(request.EntityId.ToString());
            var InstallmentsListR = request.Entity.InstallmentsList;
            decimal? InstallmentsSum = 0;
            foreach (var item in InstallmentsListR)
            {
                InstallmentsSum += item.InstallmentValues;
                item.Loanid = LoanIdR;
                item.UserId = request.Entity.UserId;
                item.DateEmpLoan = DateTime.Now;
                item.IsAccepted = IsAcceptedEnum.Pending;
            }

            if (InstallmentsSum != request.Entity.Loan)
            {
                throw new Exception("The sum of the installment amount must be equal to the loan amount !");
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
            var IsAccepted = connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.EntityId.ToString())).IsAccepted.Value;

            var Accepted = IsAcceptedEnum.Accepted;
            var Refused = IsAcceptedEnum.NotAccepted;
            if (IsAccepted == Accepted)
            {
                throw new Exception("The loan amount has been approved");
            }
            else if (IsAccepted == Refused)
            {
                throw new Exception("The loan amount has been refused");
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
