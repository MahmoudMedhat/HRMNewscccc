
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.BalanceAccount")]
    [BasedOnRow(typeof(Entities.BalanceAccountRow), CheckNames = true)]
    public class BalanceAccountForm
    {
        //public Int32 User_ID { get; set; }
        //public Decimal BaseSalary { get; set; }
        public DateTime DateBeginn { get; set; }
        public DateTime DateEnd { get; set; }
        //public Decimal GrossSalary { get; set; }
        //public Decimal NetIncome { get; set; }
        //public DateTime SalaryDate { get; set; }
    }
}