
namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SalaryDetails.Deductions")]
    [BasedOnRow(typeof(Entities.DeductionsRow), CheckNames = true)]
    public class DeductionsForm
    {
        public String DeductionsReason { get; set; }
        public Decimal Deduction { get; set; }
        public DateTime DeductionsDate { get; set; }

        [HideOnUpdate]
        public List<Int32> UserIdList { get; set; }
        [HideOnInsert]
        public Int32 UserId { get; set; }
    }
}