using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517091801)]
    public class EmployeeViewModels20200517091801 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Balance", "ID", s => s

            .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")
             
              .WithColumn("BaseSalary").AsDecimal().Nullable()
              .WithColumn("GrossSalary").AsDecimal().Nullable()
              .WithColumn("NetIncome").AsDecimal().Nullable()
              .WithColumn("SalaryDate").AsDateTime().Nullable()
             

              );
        }
    }
}