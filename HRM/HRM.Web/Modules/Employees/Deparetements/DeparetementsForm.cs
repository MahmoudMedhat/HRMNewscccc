
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.Deparetements")]
    [BasedOnRow(typeof(Entities.DeparetementsRow), CheckNames = true)]
    public class DeparetementsForm
    {
        public String Departement { get; set; }
    }
}