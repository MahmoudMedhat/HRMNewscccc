using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB
{
    [Migration(20200517092901)]
    public class VacancyRequests20200517092901 : AutoReversingMigration
    {
        public override void Up()
        {
            
            this.CreateTableWithId32("VacancyRequests", "ID", s => s

             .WithColumn("userID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")
              .WithColumn("VacancyID").AsInt32().NotNullable().ForeignKey( "vacancies", "ID")
             .WithColumn("StatusID").AsInt32().NotNullable().ForeignKey( "Status", "ID")
             .WithColumn("IsAcceptedbyHR").AsInt16().NotNullable()
             .WithColumn("Date").AsDateTime().NotNullable()
             .WithColumn("DateFrom").AsDateTime().NotNullable()
             .WithColumn("Dateto").AsDateTime().NotNullable()
             );
        }

        
    }
}