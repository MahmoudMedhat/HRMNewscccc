
namespace HRM.SalaryDetails.Endpoints
{
    using HRM.Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EntitlementsRepository;
    using MyRow = Entities.EntitlementsRow;

    [RoutePrefix("Services/SalaryDetails/Entitlements"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EntitlementsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ListEmp = request.Entity.UserIdList;
            foreach (var item in ListEmp)
            {
                MyRow Entitlemtns = new MyRow
                {
                    Entitlement = request.Entity.Entitlement,
                    EntitlementsDate = request.Entity.EntitlementsDate,
                    EntitlementReason = request.Entity.EntitlementReason,
                    UserId = item
                };
                uow.Connection.Insert<MyRow>(Entitlemtns);
                var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == item).ToList();

                DateTime EntitlmentsDateR = request.Entity.EntitlementsDate.Value;

                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (EntitlmentsDateR.Ticks >= DateBeginn.Ticks && EntitlmentsDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.GrossSalary += request.Entity.Entitlement;
                        balance.NetIncome += request.Entity.Entitlement;
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
            MyRow EntitlemntsEdit = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == request.Entity.Id);


            var UserId = request.Entity.UserId;
            DateTime EntitlmentDateR = request.Entity.EntitlementsDate.Value;
            DateTime EntitlmentDate_DB = EntitlemntsEdit.EntitlementsDate.Value;
            var EntitlmentDb = EntitlemntsEdit.Entitlement;
            var EntitlmentR = request.Entity.Entitlement;
            var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserId).ToList();



            if (EntitlmentDate_DB != EntitlmentDateR && EntitlmentR == EntitlmentDb) // Modify on Only Entitlemts Date 
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (EntitlmentDate_DB.Ticks >= DateBeginn.Ticks && EntitlmentDate_DB.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome -= EntitlemntsEdit.Entitlement;
                        balance.GrossSalary -= EntitlemntsEdit.Entitlement;

                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                    if (EntitlmentDateR.Ticks >= DateBeginn.Ticks && EntitlmentDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome += request.Entity.Entitlement;
                        balance.GrossSalary += request.Entity.Entitlement;
                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }
            }

            if (EntitlmentR != EntitlmentDb && EntitlmentDate_DB == EntitlmentDateR)  // Modify on Entitlments Only
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;
                    if (EntitlmentDateR.Ticks >= DateBeginn.Ticks && EntitlmentDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome -= EntitlemntsEdit.Entitlement;
                        balance.NetIncome += request.Entity.Entitlement;

                        balance.GrossSalary -= EntitlemntsEdit.Entitlement;
                        balance.GrossSalary += request.Entity.Entitlement;
                        var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }

            }

            if (EntitlmentR != EntitlmentDb && EntitlmentDate_DB != EntitlmentDateR) // Modifiy on Date an Entitlments
            {
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    if (EntitlmentR != EntitlmentDb)
                    {
                        //2lly h check 3lih
                        if (EntitlmentDate_DB.Ticks >= DateBeginn.Ticks && EntitlmentDate_DB.Ticks <= DateEnd.Ticks) // Modify on Entitlments 
                        {
                            balance.NetIncome -= EntitlmentDb;
                            balance.GrossSalary -= EntitlmentDb;                       
                            var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                            uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                        }
                    }
                }
                foreach (var balance in BalanceAccountListRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;
                    if (EntitlmentDate_DB != EntitlmentDateR)
                    {
                        if (EntitlmentDateR.Ticks >= DateBeginn.Ticks && EntitlmentDateR.Ticks <= DateEnd.Ticks) // Modify on Entitlments Date
                        {
                            balance.NetIncome += EntitlmentR;
                            balance.GrossSalary += EntitlmentR;
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
            var entitlements = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.EntityId.ToString()));

            var EntitlmentsDate_DB = entitlements.EntitlementsDate.Value;
            var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == entitlements.UserId).ToList();

            foreach (var balance in BalanceAccountListRow)
            {
                DateTime DateEnd = balance.DateEnd.Value;
                DateTime DateBeginn = balance.DateBeginn.Value;

                if (EntitlmentsDate_DB.Ticks >= DateBeginn.Ticks && EntitlmentsDate_DB.Ticks <= DateEnd.Ticks)
                {
                    balance.NetIncome -= entitlements.Entitlement;
                    balance.GrossSalary -= entitlements.Entitlement;
                    var EditedRow = BalanceAccountListRow.FirstOrDefault(x => x.User_ID == entitlements.UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
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
