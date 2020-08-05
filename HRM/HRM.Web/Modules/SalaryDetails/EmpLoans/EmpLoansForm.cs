namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SalaryDetails.EmpLoans")]
    [BasedOnRow(typeof(Entities.EmpLoansRow), CheckNames = true)]
    public class EmpLoansForm
    {
        [Hidden]
        public Int32 UserId { get; set; }
        public Decimal Loan { get; set; }
        public String AdvancReason { get; set; }
        //public DateTime Date { get; set; }


        //public Int16 IsAccepted { get; set; }


        [InstallmentsEditors]
        public List<Entities.InstallmentsRow> InstallmentsList { get; set; }
    }
}