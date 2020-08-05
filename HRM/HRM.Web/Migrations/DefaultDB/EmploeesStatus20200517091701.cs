using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517091701)]
    public class EmploeesStatus20200517091701 : AutoReversingMigration
    {

        public override void Up()
        {
            this.CreateTableWithId32("EmploeesStatus", "ID", s => s

             .WithColumn("UserID").AsInt32().NotNullable().ForeignKey("Users", "UserId")
              
               .WithColumn("EmpSDate").AsDateTime().Nullable()

              );

        }
    }
}





