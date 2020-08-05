using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517051701)]
    public class Allowances20200517051701 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Allowances", "ID", s => s
               .WithColumn("AllowancesDescriptions").AsString(100).NotNullable()
               .WithColumn("Allowance").AsDecimal().NotNullable()
               .WithColumn("AllowanceDate").AsDateTime().Nullable()
               .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId"));
               
        }
    }
}