using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200528151101)]
    public class AltertableEmploeesStatus20200528151101 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EmploeesStatus").AddColumn("EmploymentStatusID").AsInt32().NotNullable()
               .ForeignKey("EmploymentStatus", "id");
            

        }
    }
}