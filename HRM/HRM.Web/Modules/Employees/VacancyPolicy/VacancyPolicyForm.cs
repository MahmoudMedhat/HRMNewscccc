
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.VacancyPolicy")]
    [BasedOnRow(typeof(Entities.VacancyPolicyRow), CheckNames = true)]
    public class VacancyPolicyForm
    {
        public Int32 VacancyId { get; set; }

        public Int16 Duration { get; set; }
        public Int16 Limit { get; set; }
        public Int16 Sending { get; set; }
        public Decimal FromYears { get; set; }
        public Decimal ToYears { get; set; }
    }
}