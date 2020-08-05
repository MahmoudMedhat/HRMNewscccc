using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517054101)]
    public class Deductions20200517054101 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Deductions", "ID", s => s
             .WithColumn("DeductionsReason").AsString().NotNullable()
             .WithColumn("Deduction").AsDecimal().NotNullable()
             .WithColumn("DeductionsDate").AsDateTime().Nullable()
             .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId"));
        }
    }
}