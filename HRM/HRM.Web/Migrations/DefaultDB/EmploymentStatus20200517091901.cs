





using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517091901)]
    public class EmploymentStatus20200517091901 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("EmploymentStatus", "id", s => s


                 .WithColumn("Status").AsString(150).Nullable()


                 );
        }
    }
}