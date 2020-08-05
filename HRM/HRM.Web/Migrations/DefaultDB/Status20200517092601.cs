using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092601)]
    public class Status20200517092601 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Status", "ID", s => s
          .WithColumn("StatusName").AsString().NotNullable()


          );
        }
    }
}