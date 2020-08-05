
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.Deparetements")]
    [BasedOnRow(typeof(Entities.DeparetementsRow), CheckNames = true)]
    public class DeparetementsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Departement { get; set; }
    }
}