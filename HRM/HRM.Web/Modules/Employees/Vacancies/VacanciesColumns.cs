
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.Vacancies")]
    [BasedOnRow(typeof(Entities.VacanciesRow), CheckNames = true)]
    public class VacanciesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Vacancy { get; set; }
    }
}