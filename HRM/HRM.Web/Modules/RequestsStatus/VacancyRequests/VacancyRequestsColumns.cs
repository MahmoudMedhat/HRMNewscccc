
namespace HRM.RequestsStatus.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("RequestsStatus.VacancyRequests")]
    [BasedOnRow(typeof(Entities.VacancyRequestsRow), CheckNames = true)]
    public class VacancyRequestsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String Vacancy { get; set; }
        public String StatusStatusName { get; set; }
        public Int16 IsAcceptedbyHr { get; set; }
        public DateTime Date { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime Dateto { get; set; }
    }
}