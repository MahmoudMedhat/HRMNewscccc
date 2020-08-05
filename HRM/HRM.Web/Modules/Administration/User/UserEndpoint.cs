

namespace HRM.Administration.Endpoints
{
    using Entities;
    using HRM.Administration.Columns;
    using HRM.SalaryDetails.Entities;
    using Repositories;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;


    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;


    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {


            //request.Entity.Status = 1;
            var userid = new MyRepository().Create(uow, request).EntityId.ToString();

            BalanceAccountRow balance = new BalanceAccountRow();
            EmploeesStatusRow statusRow = new EmploeesStatusRow();

            balance.User_ID = int.Parse(userid);
            balance.BaseSalary = request.Entity.Balance;
            balance.GrossSalary = request.Entity.Balance;
            balance.NetIncome = request.Entity.Balance;
            balance.DateEnd = DateTime.Now;

            foreach (var item in request.Entity.AlowancesList)
            {
                item.UserId = int.Parse(userid);
                item.AllowanceDate = DateTime.Now;

                balance.GrossSalary += item.Allowance; //3200
                balance.NetIncome += item.Allowance; //3200
            }

            foreach (var item in request.Entity.InsuranceList)
            {
                item.UserId = int.Parse(userid);
                item.InsuranceDate = DateTime.Now;

                /*balance.NetIncome = balance.GrossSalary;*/ //3200 -50
                balance.NetIncome -= item.InsurancesQ;

            }

            #region UserVacanciesLimit


            var VacancationsLimitR = request.Entity.UserVacanciesLimit;
            if (VacancationsLimitR.Count != 0)
            {

                int VacancationsLimitR_Distinct_count = VacancationsLimitR.Select(x => x.VacancyId).Distinct().Count();
                int VacancationsLimitR_Count = VacancationsLimitR.Select(x => x.VacancyId).Count();

                if (VacancationsLimitR_Distinct_count == VacancationsLimitR_Count)
                {
                    foreach (var item in VacancationsLimitR)
                    {
                        item.UserId = int.Parse(userid);
                    }
                }
                else
                {
                    throw new Exception("Sorry You cannot Enter more than one Vaction Limit");
                }


            }

            #endregion



            statusRow.UserId = int.Parse(userid);
            statusRow.EmploymentStatusID = 1; //Active in employmentStatus
            statusRow.EmpSDate = DateTime.Now;
            uow.Connection.Insert<EmploeesStatusRow>(statusRow);

            uow.Connection.Insert<BalanceAccountRow>(balance);

            return new SaveResponse();

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var UserID = int.Parse(request.EntityId.ToString());

            #region Base salary


            var BaseSalary = uow.Connection.List<BalanceAccountRow>().LastOrDefault(x => x.User_ID == UserID);
            var OldBaseSalary = BaseSalary.BaseSalary;
            BaseSalary.BaseSalary = request.Entity.Balance;

            if (OldBaseSalary != request.Entity.Balance)
            {
                BaseSalary.NetIncome -= OldBaseSalary;
                BaseSalary.GrossSalary -= OldBaseSalary;

                BaseSalary.NetIncome += request.Entity.Balance;
                BaseSalary.GrossSalary += request.Entity.Balance;
            }
            uow.Connection.UpdateById<BalanceAccountRow>(BaseSalary);

            #endregion


            #region Allowance


            var AllowanceSummR = request.Entity.AlowancesList.Sum(x => x.Allowance);
            var AllowanceSumm = uow.Connection.List<AllowancesRow>().Where(x => x.UserId == UserID).Select(x => x.Allowance).Sum();

            var AllAllowances = uow.Connection.List<AllowancesRow>().Where(x => x.UserId == UserID).Select(x => x.Id).ToList();
            var AllowancesRID = request.Entity.AlowancesList.Select(x => x.Id).ToList();

            var AllownancesID = request.Entity.AlowancesList.Select(x => x.Id).ToList();


            List<int?> AllowancesIDDeleted = new List<int?>();
            //Check If Delete Items
            foreach (var item in AllAllowances)
            {
                if (!AllowancesRID.Contains(item))
                {
                    AllowancesIDDeleted.Add(item);
                }

                else if (AllowancesRID.Count == 0)
                {
                    AllowancesIDDeleted.AddRange(AllAllowances);
                }

            }

            if (AllowanceSummR != AllowanceSumm)
            {
                decimal? AllownancesSumDB = uow.Connection.List<AllowancesRow>().Where(x => AllownancesID.Contains(x.Id)).Sum(x => x.Allowance);
                var BalanceUserID = uow.Connection.List<BalanceAccountRow>().LastOrDefault(x => x.User_ID == UserID);

                BalanceUserID.NetIncome -= AllownancesSumDB;
                BalanceUserID.NetIncome += AllowanceSummR;

                BalanceUserID.GrossSalary -= AllownancesSumDB;
                BalanceUserID.GrossSalary += AllowanceSummR;


                // Deleted Check
                if (AllowancesIDDeleted.Count != 0)
                {
                    var AllowancesIDDeletedSum = uow.Connection.List<AllowancesRow>().Where(x => AllowancesIDDeleted.Contains(x.Id)).Select(x => x.Allowance).Sum();
                    BalanceUserID.NetIncome -= AllowancesIDDeletedSum;
                    BalanceUserID.GrossSalary -= AllowancesIDDeletedSum;
                }
                uow.Connection.UpdateById<BalanceAccountRow>(BalanceUserID);
            }

            #endregion


            #region Insurances

            var InsuranceSummR = request.Entity.InsuranceList.Sum(x => x.InsurancesQ);
            var InsurancesSumm = uow.Connection.List<BasicInsurancesRow>().Where(x => x.UserId == UserID).Select(x => x.InsurancesQ).Sum();
            var AllInsurances = uow.Connection.List<BasicInsurancesRow>().Where(x => x.UserId == UserID).Select(x => x.Id).ToList();
            var InsurancesRID = request.Entity.InsuranceList.Select(x => x.Id).ToList();
            List<int?> InsurancesIDDeleted = new List<int?>();
            //Check If Delete Items
            foreach (var item in AllInsurances)
            {
                if (!InsurancesRID.Contains(item))
                {
                    InsurancesIDDeleted.Add(item);
                }

                else if (InsurancesRID.Count == 0)
                {
                    InsurancesIDDeleted.AddRange(AllInsurances);
                }

            }

            if (InsuranceSummR != InsurancesSumm)
            {
                decimal? InsurancesSumDB = uow.Connection.List<BasicInsurancesRow>().Where(x => InsurancesRID.Contains(x.Id)).Sum(x => x.InsurancesQ);
                var InsuranceBalanceUsersID = uow.Connection.List<BalanceAccountRow>().LastOrDefault(x => x.User_ID == UserID);
                var insuranceCount = uow.Connection.List<BasicInsurancesRow>().Where(x => x.UserId == UserID).Select(x => x.InsurancesQ).Count();
                InsuranceBalanceUsersID.NetIncome += InsurancesSumDB;
                InsuranceBalanceUsersID.NetIncome -= InsuranceSummR;
                // Deleted Check
                if (InsurancesIDDeleted.Count != 0)
                {
                    var InsurancesIDDeletedSum = uow.Connection.List<BasicInsurancesRow>().Where(x => InsurancesIDDeleted.Contains(x.Id)).Select(x => x.InsurancesQ).Sum();
                    InsuranceBalanceUsersID.NetIncome += InsurancesIDDeletedSum;
                }
                uow.Connection.UpdateById<BalanceAccountRow>(InsuranceBalanceUsersID);
            }
            #endregion


            #region EmployementStatus

            var EmploeesStatusRowdb = uow.Connection.List<EmploeesStatusRow>().FirstOrDefault(x => x.UserId == UserID);
            if (request.Entity.Status != UserStatusEnum.Employee) // Not Employee
            {
                UserStatusEnum? statusEnumR = request.Entity.Status;
                EmploeesStatusRow emploeesStatus = new EmploeesStatusRow();
                emploeesStatus.UserId = request.Entity.UserId;
                emploeesStatus.EmpSDate = DateTime.Now;
                if (statusEnumR == UserStatusEnum.Died)
                {
                    emploeesStatus.EmploymentStatusID = 3;
                    request.Entity.IsActive = 0;
                }
                else if (statusEnumR == UserStatusEnum.Resignation)
                {
                    emploeesStatus.EmploymentStatusID = 2;
                    request.Entity.IsActive = 0;
                }

                uow.Connection.Insert<EmploeesStatusRow>(emploeesStatus);
            }

            else if (request.Entity.Status == UserStatusEnum.Employee) // lw el request == 1
            {
                var EmploeesStatusRow = uow.Connection.List<EmploeesStatusRow>().LastOrDefault(x => x.UserId == UserID);
                var EmpStatus = EmploeesStatusRow.EmploymentStatusID.Value;

                if (EmpStatus != 1)
                {
                    EmploeesStatusRow emploeesStatus = new EmploeesStatusRow();
                    emploeesStatus.UserId = request.Entity.UserId;
                    emploeesStatus.EmpSDate = DateTime.Now;
                    emploeesStatus.EmploymentStatusID = 1;
                    request.Entity.IsActive = 1;
                    uow.Connection.Insert<EmploeesStatusRow>(emploeesStatus);
                }
            }

            #endregion

            #region UserVacanciesLimit


            var VacancationsLimitR = request.Entity.UserVacanciesLimit;
            if (VacancationsLimitR.Count != 0)
            {

                int VacancationsLimitR_Distinct_count = VacancationsLimitR.Select(x => x.VacancyId).Distinct().Count();
                int VacancationsLimitR_Count = VacancationsLimitR.Select(x => x.VacancyId).Count();

                if (VacancationsLimitR_Distinct_count == VacancationsLimitR_Count)
                {
                    foreach (var item in VacancationsLimitR)
                    {
                        item.UserId = UserID;
                    }
                }
                else
                {
                    throw new Exception("Sorry You cannot Enter more than one Vaction Limit");
                }
               

            }

            #endregion


            return new MyRepository().Update(uow, request);

        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            Session["UserID"] = request.EntityId;
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, SaveRequest<UserRow> saveRequest)
        {
            //int UserId = int.Parse(Authorization.UserId);
            //request.EqualityFilter = new Dictionary<string, object>() {
            //    { "UserId", UserId}
            //};

            //request.Criteria = new Criteria("UserId") != 1 && new Criteria("Status") == 1;

            return new MyRepository().List(connection, request);
        }

        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1), ServiceAuthorize]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
