
namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
   

    [FormScript("SalaryDetails.Installments")]
    [BasedOnRow(typeof(Entities.InstallmentsRow), CheckNames = true)]
    public class InstallmentsForm
    {

        [Hidden]
        public Int32 UserId { get; set; }
        [Hidden]
        public Int32 Loanid { get; set; }

        public Decimal InstallmentValues { get; set; }
        public DateTime InstallmentDate { get; set; }

        //public DateTime DateEmpLoan { get; set; }
        //public Int16 IsAccepted { get; set; }


        //[InstallmentsEditors]
        //public List<Entities.InstallmentsRow> InstallmentsList { get; set; }
    }
}