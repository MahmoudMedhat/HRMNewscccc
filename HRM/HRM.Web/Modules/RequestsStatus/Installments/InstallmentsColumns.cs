
namespace HRM.RequestsStatus.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("RequestsStatus.Installments")]
    [BasedOnRow(typeof(Entities.InstallmentsRow), CheckNames = true)]
    public class InstallmentsColumns
    {
        [ DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        //public String UserUsername { get; set; }
        //public Decimal LoanidLoan { get; set; }
        public Decimal InstallmentValues { get; set; }
        public DateTime InstallmentDate { get; set; }
        public DateTime DateEmpLoan { get; set; }
        public Int16 IsAccepted { get; set; }
    }
}