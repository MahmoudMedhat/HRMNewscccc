
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.VacancyPolicy")]
    [BasedOnRow(typeof(Entities.VacancyPolicyRow), CheckNames = true)]
    public class VacancyPolicyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [QuickFilter]
        public String Vacancy { get; set; }
        [QuickFilter]
        public Int16 Duration { get; set; }
        [QuickFilter]
        public Int16 Limit { get; set; }
        [QuickFilter]
        public Int16 Sending { get; set; }
        [QuickFilter]
        public Decimal FromYears { get; set; }
        [QuickFilter]
        public Decimal ToYears { get; set; }
    }
}