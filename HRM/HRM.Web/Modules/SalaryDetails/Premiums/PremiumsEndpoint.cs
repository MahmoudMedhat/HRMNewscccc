
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
    using MyRepository = Repositories.PremiumsRepository;
    using MyRow = Entities.PremiumsRow;

    [RoutePrefix("Services/SalaryDetails/Premiums"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PremiumsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ListEmp = request.Entity.UserIdList;
            var PremiumDate = request.Entity.PremiumDate.Value;
            foreach (var item in ListEmp)
            {
                MyRow premium = new MyRow
                {
                    PremiumQuantity = request.Entity.PremiumQuantity,
                    PremiumDate = request.Entity.PremiumDate,
                    premiumType = request.Entity.premiumType,
                    UserId = item
                };
                uow.Connection.Insert<MyRow>(premium);


                var BalanceAccountRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == item).ToList();

                foreach (var balance in BalanceAccountRow)
                {
                    var DateBeginn = balance.DateBeginn.Value;
                    var DateEnd = balance.DateEnd.Value;


                    if (PremiumDate.Ticks >= DateBeginn.Ticks && PremiumDate.Ticks <= DateEnd.Ticks)
                    {
                        balance.BaseSalary += request.Entity.PremiumQuantity;
                        balance.GrossSalary += request.Entity.PremiumQuantity;
                        balance.NetIncome += request.Entity.PremiumQuantity;

                        var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == item && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }


                //if (BalanceAccountRow != null)
                //{
                //    BalanceAccountRow.BaseSalary += request.Entity.PremiumQuantity;
                //    BalanceAccountRow.GrossSalary += request.Entity.PremiumQuantity;
                //    BalanceAccountRow.NetIncome += request.Entity.PremiumQuantity;

                //    uow.Connection.UpdateById<BalanceAccountRow>(BalanceAccountRow);
                //}


            }
            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var UserId = request.Entity.UserId;
            var PremiumDateR = request.Entity.PremiumDate.Value;
            MyRow PremiumsEdit = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == request.Entity.Id);
            DateTime PremiumDate_DB = PremiumsEdit.PremiumDate.Value;
            var PreimumDb = PremiumsEdit.PremiumQuantity;
            var PremiumQuantityR = request.Entity.PremiumQuantity;
            var User_BonusB_update = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.EntityId.ToString()));
            var BonusB_update = User_BonusB_update.PremiumQuantity;
            var BalanceAccountRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserId).ToList();


            #region  Modify on Only Premium Date 

            if (PremiumDate_DB != PremiumDateR && PremiumQuantityR == PreimumDb) // Modify on Only Premium Date 
            {
                foreach (var balance in BalanceAccountRow)
                {
                    var DateBeginn = balance.DateBeginn.Value;
                    var DateEnd = balance.DateEnd.Value;

                    if (PremiumDate_DB.Ticks >= DateBeginn.Ticks && PremiumDate_DB.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome -= PremiumsEdit.PremiumQuantity;
                        balance.GrossSalary -= PremiumsEdit.PremiumQuantity;
                        balance.BaseSalary -= PremiumsEdit.PremiumQuantity;
                        var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }

                    if (PremiumDateR.Ticks >= DateBeginn.Ticks && PremiumDateR.Ticks <= DateEnd.Ticks)
                    {
                        balance.NetIncome += request.Entity.PremiumQuantity;
                        balance.GrossSalary += request.Entity.PremiumQuantity;
                        balance.BaseSalary += request.Entity.PremiumQuantity;
                        var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }

            }
            #endregion


            #region Modify on Premiums Only

            if (PremiumQuantityR != PreimumDb && PremiumDate_DB == PremiumDateR)  // Modify on Premiums Only
            {

                foreach (var balance in BalanceAccountRow)
                {
                    var DateBeginn = balance.DateBeginn.Value;
                    var DateEnd = balance.DateEnd.Value;

                    if (PremiumDateR.Ticks >= DateBeginn.Ticks && PremiumDateR.Ticks <= DateEnd.Ticks)
                    {

                        balance.NetIncome -= PremiumsEdit.PremiumQuantity;
                        balance.NetIncome += request.Entity.PremiumQuantity;

                        balance.GrossSalary -= PremiumsEdit.PremiumQuantity;
                        balance.GrossSalary += request.Entity.PremiumQuantity;

                        balance.BaseSalary -= PremiumsEdit.PremiumQuantity;
                        balance.BaseSalary += request.Entity.PremiumQuantity;

                        var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }

                }


            }

            #endregion


            #region Modifiy on Date and Premimums

            if (PremiumQuantityR != PreimumDb && PremiumDate_DB != PremiumDateR) // Modifiy on Date and Premimums
            {

                foreach (var balance in BalanceAccountRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;

                    //2lly h check 3lih
                    if (PremiumDate_DB.Ticks >= DateBeginn.Ticks && PremiumDate_DB.Ticks <= DateEnd.Ticks) // Modify on Entitlments 
                    {
                        balance.NetIncome -= PreimumDb;
                        balance.GrossSalary -= PreimumDb;
                        balance.BaseSalary -= PreimumDb;



                        var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                        uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                    }
                }

                foreach (var balance in BalanceAccountRow)
                {
                    DateTime DateEnd = balance.DateEnd.Value;
                    DateTime DateBeginn = balance.DateBeginn.Value;
                    if (PremiumDate_DB != PremiumDateR)
                    {
                        if (PremiumDateR.Ticks >= DateBeginn.Ticks && PremiumDateR.Ticks <= DateEnd.Ticks) // Modify on Entitlments Date
                        {
                            balance.NetIncome += PremiumQuantityR;
                            balance.GrossSalary += PremiumQuantityR;
                            var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                            uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);
                        }
                    }

                }

            }

            #endregion


            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            var MyRow = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == int.Parse(request.EntityId.ToString()));
            var PremiumDate = MyRow.PremiumDate.Value;
            var UserId = MyRow.UserId;
            var BalanceAccountRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserId).ToList();

            foreach (var balance in BalanceAccountRow)
            {
                var DateBeginn = balance.DateBeginn.Value;
                var DateEnd = balance.DateEnd.Value;
                if (PremiumDate.Ticks >= DateBeginn.Ticks && PremiumDate.Ticks <= DateEnd.Ticks)
                {
                    balance.BaseSalary -= MyRow.PremiumQuantity;
                    balance.GrossSalary -= MyRow.PremiumQuantity;
                    balance.NetIncome -= MyRow.PremiumQuantity;
                    var EditedRow = BalanceAccountRow.FirstOrDefault(x => x.User_ID == UserId && x.DateEnd == DateEnd && x.DateBeginn == DateBeginn);
                    uow.Connection.UpdateById<BalanceAccountRow>(EditedRow);

                }

            }

            //BalanceAccountRow.BaseSalary -= MyRow.PremiumQuantity;
            //BalanceAccountRow.GrossSalary -= MyRow.PremiumQuantity;
            //BalanceAccountRow.NetIncome -= MyRow.PremiumQuantity;

            //uow.Connection.UpdateById<BalanceAccountRow>(BalanceAccountRow);

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
