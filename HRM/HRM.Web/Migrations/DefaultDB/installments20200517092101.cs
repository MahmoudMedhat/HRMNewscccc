using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092101)]
    public class installments20200517092101 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("installments", "id", s => s

                .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")
                .WithColumn("Loanid").AsInt32().Nullable().ForeignKey("EmpLoans", "ID")
                 .WithColumn("installmentValues").AsDecimal().Nullable()
                 .WithColumn("installmentDate").AsDateTime().Nullable()
                  .WithColumn("DateEmpLoan").AsDateTime().Nullable()
                 .WithColumn("IsAccepted").AsInt16().Nullable()
                 );
        }
    }
}