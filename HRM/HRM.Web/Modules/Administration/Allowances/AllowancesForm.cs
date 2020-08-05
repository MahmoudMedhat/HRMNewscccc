
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Allowances")]
    [BasedOnRow(typeof(Entities.AllowancesRow), CheckNames = true)]
    public class AllowancesForm
    {
        public String AllowancesDescriptions { get; set; }
        public Decimal Allowance { get; set; }
        public DateTime AllowanceDate { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
    }
}