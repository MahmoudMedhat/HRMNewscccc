
namespace HRM.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.EmploymentStatus")]
    [BasedOnRow(typeof(Entities.EmploymentStatusRow), CheckNames = true)]
    public class EmploymentStatusForm
    {
        public String Status { get; set; }
    }
}