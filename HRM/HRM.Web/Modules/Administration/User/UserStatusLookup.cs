
namespace HRM.Administration.Lookups
{
    using HRM.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("UserStatus")]
    public class UserStatusLookup : RowLookupScript<UserRow>
    {
        public UserStatusLookup()
        {
            IdField = TextField = "Status";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = UserRow.Fields;
            query.Distinct(true)
                .Select(fld.Status)
                .Where(
                    new Criteria(fld.Status) != "" &
                    new Criteria(fld.Status).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}