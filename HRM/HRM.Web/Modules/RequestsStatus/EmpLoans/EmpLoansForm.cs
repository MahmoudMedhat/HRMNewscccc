
namespace HRM.RequestsStatus.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using HRM.Modules.RequestsStatus.EmpLoans;

    [FormScript("RequestsStatus.EmpLoans")]
    [BasedOnRow(typeof(Entities.EmpLoansRow), CheckNames = true)]
    public class EmpLoansForm
    {
        //public Int32 UserId { get; set; }
        [ReadOnly(true)]
        public Decimal Loan { get; set; }
        [Hidden]
        public int UserId { get; set; }
        //public String AdvancReason { get; set; }
        //public DateTime Date { get; set; }
        [Hidden]
        public Int32 Id { get; set; }
        public IsAcceptedEnum IsAccepted { get; set; }

        [InstallmentsRequestEditor]
        public List<Entities.InstallmentsRow> InstallmentsList { get; set; }
    }
}