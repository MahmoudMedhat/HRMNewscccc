using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Migrations.DefaultDB

{
    [Migration(20200517092501)]
    public class Premiums20200517092501 : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Premiums", "ID", s => s

           .WithColumn("userID").AsInt32().NotNullable().ForeignKey( "Users", "UserId")
           .WithColumn("Premium_Quantity").AsDecimal().NotNullable()
           .WithColumn("Premium_Date").AsDateTime().NotNullable()
         
           );
        }
    }
}