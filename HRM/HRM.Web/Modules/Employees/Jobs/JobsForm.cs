
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.Jobs")]
    [BasedOnRow(typeof(Entities.JobsRow), CheckNames = true)]
    public class JobsForm
    {
        public String Jobtitle { get; set; }
        public Int32 DepartementId { get; set; }
    }
}