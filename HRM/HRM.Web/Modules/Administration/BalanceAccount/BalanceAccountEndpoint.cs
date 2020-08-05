
namespace HRM.Administration.Endpoints
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
    using MyRepository = Repositories.BalanceAccountRepository;
    using MyRow = Entities.BalanceAccountRow;

    [RoutePrefix("Services/Administration/BalanceAccount"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class BalanceAccountController : ServiceEndpoint
    {


        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var DateEndR = request.Entity.DateEnd.Value;
            var DateBeginnR = request.Entity.DateBeginn.Value;

            List<int?> usersid = uow.Connection.List<UserRow>().Where(x => x.IsActive == 1 && x.UserId != 1).Select(x => x.UserId).ToList();
            foreach (var item in usersid) //1
            {

                BalanceAccountRow employee = new BalanceAccountRow();
                employee.User_ID = item;
                employee.BaseSalary = uow.Connection.List<MyRow>().OrderByDescending(x => x.Id).FirstOrDefault(x => x.User_ID == item).BaseSalary;
                employee.DateEnd = request.Entity.DateEnd;
                employee.DateBeginn = request.Entity.DateBeginn;


                #region Allowances

                bool UserExistanceAllowances = uow.Connection.List<AllowancesRow>().Any(x => x.UserId == item.Value);
                var AllowancList = uow.Connection.List<AllowancesRow>().Where(x => x.UserId == item.Value).ToList();


                if (UserExistanceAllowances == true)
                {

                    decimal? Allowanc = uow.Connection.List<AllowancesRow>().Where(x => x.UserId == item.Value).Select(x => x.Allowance).Sum();
                    employee.GrossSalary = employee.BaseSalary + Allowanc;

                }
                else
                {
                    employee.GrossSalary = employee.BaseSalary;
                }

                #endregion


                #region BasicInsurances

                bool UserExistanceinsurances = uow.Connection.List<BasicInsurancesRow>().Any(x => x.UserId == item.Value);

                if (UserExistanceinsurances == true)
                {
                    decimal? insurancesQ = uow.Connection.List<BasicInsurancesRow>().Where(x => x.UserId == item.Value).Select(x => x.InsurancesQ).Sum();
                    employee.NetIncome = employee.GrossSalary - insurancesQ;
                }

                else
                {
                    employee.NetIncome = employee.GrossSalary;
                }


                #endregion


                #region Installments

                List<InstallmentsRow> installmentValues = uow.Connection.List<InstallmentsRow>().Where(
                  x => x.UserId == item && x.IsAccepted == IsAcceptedEnum.Accepted).ToList();

                foreach (var install in installmentValues)
                {
                    var InstallmentDate = install.InstallmentDate.Value;


                    if (InstallmentDate.Ticks >= DateBeginnR.Ticks && InstallmentDate.Ticks <= DateEndR.Ticks)
                    {

                        employee.NetIncome -= install.InstallmentValues;
                    }

                }

                #endregion


                #region Deductions      

                //var BalanceAccount = uow.Connection.List<MyRow>().OrderByDescending(x => x.Id).FirstOrDefault(x => x.User_ID == item);
                //var Deduction = uow.Connection.List<DeductionsRow>().FirstOrDefault(x => x.UserId == item.Value && x.DeductionsDate.Value.Month == BalanceAccount.DateEnd.Value.Month);
                var DeductionsList = uow.Connection.List<DeductionsRow>().Where(x => x.UserId == item.Value).ToList();

                foreach (var Ded in DeductionsList)
                {
                    var DeductionsDate = Ded.DeductionsDate.Value;

                    if (DeductionsDate.Ticks >= DateBeginnR.Ticks && DeductionsDate.Ticks <= DateEndR.Ticks)
                    {

                        employee.NetIncome -= Ded.Deduction;
                    }

                }

                #endregion


                #region Entitlements

                var EntitlementsList = uow.Connection.List<EntitlementsRow>().Where(x => x.UserId == item.Value).ToList();

                foreach (var Ent in EntitlementsList)
                {
                    var EntitlementsDate = Ent.EntitlementsDate.Value;

                    if (EntitlementsDate.Ticks >= DateBeginnR.Ticks && EntitlementsDate.Ticks <= DateEndR.Ticks)
                    {

                        employee.NetIncome += Ent.Entitlement;
                        employee.GrossSalary += Ent.Entitlement;
                    }

                }

                #endregion


                #region Premiums


                if (uow.Connection.List<PremiumsRow>().Any(x => x.UserId == item))
                {
                    var PremiumsRow = uow.Connection.List<PremiumsRow>().Where(x => x.UserId == item).ToList();

                    foreach (var premiums in PremiumsRow)
                    {
                        var PermData = premiums.PremiumDate.Value;

                       
                        if (PermData.Ticks >= DateBeginnR.Ticks && PermData.Ticks <= DateEndR.Ticks)
                        {
                            employee.BaseSalary += premiums.PremiumQuantity;
                            employee.GrossSalary += premiums.PremiumQuantity;
                            employee.NetIncome += premiums.PremiumQuantity;
                        }
                        else
                        {
                            // L2n el base kda kda mtzwd l2ny wa5d a5r base
                            employee.GrossSalary += premiums.PremiumQuantity;
                            employee.NetIncome += premiums.PremiumQuantity;
                        }
                    }


                }


                #endregion

                uow.Connection.Insert<MyRow>(employee);
            }

            return new SaveResponse();
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
