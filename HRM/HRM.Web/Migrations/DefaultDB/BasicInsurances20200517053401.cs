using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517053401)]
    public class BasicInsurances20200517053401 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("BasicInsurances", "ID", s => s
              .WithColumn("Insurance").AsString(200).NotNullable()
              .WithColumn("insurancesQ").AsDecimal().NotNullable()
              .WithColumn("InsuranceDate").AsDateTime().Nullable()
              .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId"));
        }
    }
}