
namespace HRM.RequestsStatus.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("RequestsStatus.EmpLoans")]
    [BasedOnRow(typeof(Entities.EmpLoansRow), CheckNames = true)]
    public class EmpLoansColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String UserUsername { get; set; }
        public Decimal Loan { get; set; }
        public Decimal InstallmentValues { get; set; }
      
        public String AdvancReason { get; set; }
        public DateTime Date { get; set; }
        public Int16 IsAccepted { get; set; }

        //public Decimal installments { get; set; }
    }
}