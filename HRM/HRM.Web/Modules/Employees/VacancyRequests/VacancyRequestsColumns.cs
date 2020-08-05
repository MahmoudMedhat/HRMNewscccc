
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("Employees.VacancyRequests")]
    [BasedOnRow(typeof(Entities.VacancyRequestsRow), CheckNames = true)]
    public class VacancyRequestsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }

        [Width(150)]
        public String UserUsername { get; set; }
        [Width(120) , QuickFilter]
        public String Vacancy { get; set; }
        [Width(150)]
        [QuickFilter]
        public String StatusStatusName { get; set; }
        [Width(150)]
        [ QuickFilter]
        public Int16 IsAcceptedbyHr { get; set; }
        [Width(120)]
        public DateTime Date { get; set; }
        [Width(120)]
        public DateTime DateFrom { get; set; }
        [Width(120)]
        public DateTime Dateto { get; set; }
        
        [DateTimeFormatter(DisplayFormat ="MM")]
        public DateTime Balance { get; set; }
        
    }
}