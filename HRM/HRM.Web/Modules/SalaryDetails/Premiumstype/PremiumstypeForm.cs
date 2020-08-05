
namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SalaryDetails.Premiumstype")]
    [BasedOnRow(typeof(Entities.PremiumstypeRow), CheckNames = true)]
    public class PremiumstypeForm
    {
        public String Premium { get; set; }
    }
}