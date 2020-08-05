
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Financialyear")]
    [BasedOnRow(typeof(Entities.FinancialyearRow), CheckNames = true)]
    public class FinancialyearForm
    {
       
        public DateTime DateFrom { get; set; }
       
        public DateTime DateTo { get; set; }

        [HalfWidth]
        public Boolean Status { get; set; }
    }
}