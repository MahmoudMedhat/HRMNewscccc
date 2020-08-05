
namespace HRM.SalaryDetails.Endpoints
{
    using HRM.Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using static MVC.Views.Administration;
    using MyRepository = Repositories.DeductionsRepository;
    using MyRow = Entities.DeductionsRow;




    [RoutePrefix("Services/SalaryDetails/Deductions"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]

    public class DeductionsController : ServiceEndpoint
    {

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ListEmp = request.Entity.UserIdList;
            foreach (var item in ListEmp)
            {
                MyRow deductions = new MyRow
                {
                    Deduction = request.Entity.Deduction,
                    DeductionsDate = request.Entity.DeductionsDate,
                    DeductionsReason = request.Entity.DeductionsReason,
                    UserId = item
                };
                uow.Connection.Insert<MyRow>(deductions);
                var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == item).ToList();

                DateTime DeductionsDateR = request.Entity.DeductionsDate.Value;

                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (DeductionsDateR.Ticks >= DateBeginn.Ticks && DeductionsDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome = balance.NetIncome - request.Entity.Deduction;
                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == item && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }
            }

            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            MyRow deductionsEdit = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.Entity.Id.ToString()));
            var UserId = request.Entity.UserId;
            DateTime DeductionsDateR = request.Entity.DeductionsDate.Value;
            DateTime DeductionsDate_DB = deductionsEdit.DeductionsDate.Value;
            var DeductionDb = deductionsEdit.Deduction;
            var DeductionR = request.Entity.Deduction;
            var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserId).ToList();

            if (DeductionsDate_DB != DeductionsDateR && DeductionR == DeductionDb) // Modify on Only Deducions Date 
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (DeductionsDate_DB.Ticks >= DateBeginn.Ticks && DeductionsDate_DB.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome += deductionsEdit.Deduction;

                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                    if (DeductionsDateR.Ticks > DateBeginn.Ticks && DeductionsDateR.Ticks < DateEnd.Ticks)
                    {
                        balance.NetIncome -= request.Entity.Deduction;
                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }
            }

            if (DeductionR != DeductionDb && DeductionsDate_DB == DeductionsDateR)  // Modify on Deduction Only
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;
                    if (DeductionsDateR.Ticks >= DateBeginn.Ticks && DeductionsDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome += deductionsEdit.Deduction;
                        balance.NetIncome -= request.Entity.Deduction;
                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }

            }

            if (DeductionR != DeductionDb && DeductionsDate_DB != DeductionsDateR) // Modifiy on Date and Dedudction
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (DeductionR != DeductionDb)
                    {
                        //2lly h check 3lih
                        if (DeductionsDate_DB.Ticks >= DateBeginn.Ticks && DeductionsDate_DB.Ticks <= DateEnd.Ticks) // Modify on Deduction 
                        {
                            balance.NetIncome += DeductionDb /*request.Entity.Deduction*/;
                            var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                            uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                        }
                    }
                }
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;
                    if (DeductionsDate_DB != DeductionsDateR)
                    {
                        if (DeductionsDateR.Ticks >= DateBeginn.Ticks && DeductionsDateR.Ticks <= DateEnd.Ticks) // Modify on Deduction Date
                        {
                            balance.NetIncome -= DeductionR;
                            var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                            uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                        }
                    }

                }

            }

            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            var deductions = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.EntityId.ToString()));
            var DeductionsDate_DB = deductions.DeductionsDate.Value;
            var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == deductions.UserId).ToList();

            foreach (var balance in BalanceAccountListRow)
            {
                DateTime DateEnd = balance.DateEnd.Value;
                DateTime DateBeginn = balance.DateBeginn.Value;

                if (DeductionsDate_DB.Ticks >= DateBeginn.Ticks && DeductionsDate_DB.Ticks <= DateEnd.Ticks)
                {
                    balance.NetIncome += deductions.Deduction;
                    var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == deductions.UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                    uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                }
            }


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
