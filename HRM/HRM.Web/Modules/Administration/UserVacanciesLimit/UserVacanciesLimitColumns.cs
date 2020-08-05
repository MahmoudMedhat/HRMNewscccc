
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.UserVacanciesLimit")]
    [BasedOnRow(typeof(Entities.UserVacanciesLimitRow), CheckNames = true)]
    public class UserVacanciesLimitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Vacancy { get; set; }
        public String UserUsername { get; set; }
        public Int32 Limit { get; set; }
    }
}