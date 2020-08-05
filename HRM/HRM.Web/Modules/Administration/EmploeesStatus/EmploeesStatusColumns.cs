
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.EmploeesStatus")]
    [BasedOnRow(typeof(Entities.EmploeesStatusRow), CheckNames = true)]
    public class EmploeesStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String Status { get; set; }
        public DateTime EmpSDate { get; set; }
    }
}