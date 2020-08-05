
namespace HRM.Employees.Endpoints
{
  
    using HRM.Administration.Entities;
    using HRM.Employees.Entities;
    using HRM.SalaryDetails.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.UsersRepository;
    using MyRow = Entities.UsersRow;

    [RoutePrefix("Services/Employees/Users"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]

    [ReadPermission(EmployessPermissionKeys.Employees.Modify)]
    [ModifyPermission(EmployessPermissionKeys.Employees.Modify)]

    public class UsersController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //BalanceRow balanceRow = new BalanceRow();
            //BasicInsurancesRow insurancesRow = new BasicInsurancesRow();
            //AllowancesRow allowancesRow = new AllowancesRow();
            EmploeesStatusRow emploeesStatus = new EmploeesStatusRow();
            int? UserID = request.Entity.UserId;
            var Enitiy = request.Entity;


            //balanceRow.UserId = UserID;
            //balanceRow.BaseSalary = request.Entity.BaseSalary;
            //balanceRow.GrossSalary = request.Entity.BaseSalary;
            //balanceRow.NetIncome = request.Entity.BaseSalary;
            //balanceRow.SalaryDate = DateTime.Now;
            //balanceRow.GrossSalary += Enitiy.Allowance;
            //balanceRow.NetIncome = balanceRow.GrossSalary - Enitiy.insurancesQ;
            //uow.Connection.Insert<BalanceRow>(balanceRow);



            //allowancesRow.AllowancesDescriptions = Enitiy.AllowanceDescriptions;
            //allowancesRow.Allowance = Enitiy.Allowance;
            //allowancesRow.AllowanceDate = DateTime.Now;
            //allowancesRow.UserId = UserID;

         
            //uow.Connection.Insert<AllowancesRow>(allowancesRow);


            //insurancesRow.Insurance = Enitiy.Insurance;
            //insurancesRow.InsurancesQ = Enitiy.insurancesQ;
            //insurancesRow.InsuranceDate = DateTime.Now;
            //insurancesRow.UserId = UserID;

          
            //uow.Connection.Insert<BasicInsurancesRow>(insurancesRow);


            emploeesStatus.UserId = UserID;
            emploeesStatus.EmploymentStatusID = 1; //Active in employmentStatus
            emploeesStatus.EmpSDate = DateTime.Now;
            uow.Connection.Insert<EmploeesStatusRow>(emploeesStatus);


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
            //int UserId = int.Parse(Authorization.UserId);
            //request.EqualityFilter = new Dictionary<string, object>() {
            //    { "UserId", UserId}
            //};

            return new MyRepository().List(connection, request);
        }
    }
}
