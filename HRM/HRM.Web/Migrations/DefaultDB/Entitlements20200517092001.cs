using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092001)]
    public class Entitlements20200517092001 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Entitlements", "id", s => s

               .WithColumn("UserID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")
               .WithColumn("Entitlement").AsDecimal().Nullable()
                .WithColumn("EntitlementsDate").AsDateTime().Nullable()
                .WithColumn("EntitlementReason").AsString(150).Nullable()

                );
        }
    }
}