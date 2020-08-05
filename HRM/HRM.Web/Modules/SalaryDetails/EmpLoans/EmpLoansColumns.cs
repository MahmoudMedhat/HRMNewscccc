
namespace HRM.SalaryDetails.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SalaryDetails.EmpLoans")]
    [BasedOnRow(typeof(Entities.EmpLoansRow), CheckNames = true)]
    public class EmpLoansColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public Decimal Loan { get; set; }
        [EditLink]
        public String AdvancReason { get; set; }
        public DateTime Date { get; set; }
        public Int16 IsAccepted { get; set; }
    }
}