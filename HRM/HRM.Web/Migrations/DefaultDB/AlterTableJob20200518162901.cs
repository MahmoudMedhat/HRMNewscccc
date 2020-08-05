using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200518162901)]
    public class AlterTableJob20200518162901 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("JobID").AsInt32().NotNullable()
                    .ForeignKey("Jobs", "ID").WithDefaultValue(1);

        }
    }
}