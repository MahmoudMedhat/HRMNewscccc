
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.Vacancies")]
    [BasedOnRow(typeof(Entities.VacanciesRow), CheckNames = true)]
    public class VacanciesForm
    {
        public String Vacancy { get; set; }
    }
}