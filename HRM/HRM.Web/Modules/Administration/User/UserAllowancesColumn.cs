
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Allowances")]
    [BasedOnRow(typeof(Entities.AllowancesRow), CheckNames = true)]
    public class AllowancesColumns
    {
        
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String AllowancesDescriptions { get; set; }
        public Decimal Allowance { get; set; }
        public DateTime AllowanceDate { get; set; }
        public String UserUsername { get; set; }
    }
}