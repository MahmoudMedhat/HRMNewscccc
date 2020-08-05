using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092401)]
    public class PermissionStatus20200517092401 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("PermissionStatus", "ID", s => s

              .WithColumn("Permissiontype").AsString(80).NotNullable());
        }
    }
}