using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092201)]
    public class Jobs20200517092201 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Jobs", "ID", s => s
            .WithColumn("Jobtitle").AsString().NotNullable()
            .WithColumn("DepartementID").AsInt32().NotNullable().ForeignKey( "Deparetements", "ID"));

        }
    }
}