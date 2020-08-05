
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.BasicInsurances")]
    [BasedOnRow(typeof(Entities.BasicInsurancesRow), CheckNames = true)]
    public class BasicInsurancesForm
    {
        public String Insurance { get; set; }
        public Decimal InsurancesQ { get; set; }
        public DateTime InsuranceDate { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
    }
}