using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092701)]
    public class vacancies20200517092701:AutoReversingMigration
    {
        
    public override void Up()
        {
            this.CreateTableWithId32("vacancies", "ID", s => s

             .WithColumn("vacancy").AsString(80).NotNullable());
        }
    }
}