
namespace HRM.Employees.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class IsAcceptedHrEditor : RowLookupScript<Entities.VacancyRequestsRow>
    {
        public IsAcceptedHrEditor()
        {
            IdField = TextField = "IsAcceptedbyHr";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.VacancyRequestsRow.Fields;
            query.Distinct(true)
                .Select(fld.IsAcceptedbyHr)
                .Where(
                    new Criteria(fld.IsAcceptedbyHr) != "" &
                    new Criteria(fld.IsAcceptedbyHr).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}