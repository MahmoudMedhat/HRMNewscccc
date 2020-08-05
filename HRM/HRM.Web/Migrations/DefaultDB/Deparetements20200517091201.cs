using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517091201)]
    
    public class Deparetements20200517091201 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Deparetements", "ID", s => s
            .WithColumn("Departement").AsString().NotNullable());
        }
    }
}