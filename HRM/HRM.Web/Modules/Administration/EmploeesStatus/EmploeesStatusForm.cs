
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.EmploeesStatus")]
    [BasedOnRow(typeof(Entities.EmploeesStatusRow), CheckNames = true)]
    public class EmploeesStatusForm
    {
        public Int32 UserId { get; set; }
        public DateTime EmpSDate { get; set; }
        public Int32 EmploymentStatusID { get; set; }
    }
}