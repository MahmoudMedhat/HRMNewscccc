using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517091601)]
    public class EmpLoans20200517091601 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("EmpLoans", "ID", s => s
             .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")           
            .WithColumn("Loan").AsDecimal().NotNullable()
            .WithColumn("AdvancReason").AsString().NotNullable()
            .WithColumn("Date").AsDateTime().NotNullable()
            .WithColumn("IsAccepted").AsInt16().NotNullable()

             );

        }
    }
}