
namespace HRM.SalaryDetails.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SalaryDetails.Installments")]
    [BasedOnRow(typeof(Entities.InstallmentsRow), CheckNames = true)]
    public class InstallmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        //public String UserUsername { get; set; }
        //public Decimal LoanidLoan { get; set; }
        public Decimal InstallmentValues { get; set; }
        public DateTime InstallmentDate { get; set; }
        public DateTime DateEmpLoan { get; set; }
        public Int16 IsAccepted { get; set; }
    }
}