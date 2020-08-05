
namespace HRM.SalaryDetails.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SalaryDetails.Deductions")]
    [BasedOnRow(typeof(Entities.DeductionsRow), CheckNames = true)]
    public class DeductionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DeductionsReason { get; set; }
        public Decimal Deduction { get; set; }
        public DateTime DeductionsDate { get; set; }
        public String UserUsername { get; set; }
    }
}