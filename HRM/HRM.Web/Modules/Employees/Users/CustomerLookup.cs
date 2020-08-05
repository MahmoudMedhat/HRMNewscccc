using HRM.Employees.Entities;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Modules.Employees.Users
{
    public class LookupUsers : RowLookupScript<UsersRow>
    {
      public LookupUsers()
        {
            IdField = UsersRow.Fields.UserId.PropertyName;
            Permission = "*";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(UsersRow.Fields.UserId);
        }
    }
}