
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.Jobs")]
    [BasedOnRow(typeof(Entities.JobsRow), CheckNames = true)]
    public class JobsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Jobtitle { get; set; }
        public String Departement { get; set; }
    }
}