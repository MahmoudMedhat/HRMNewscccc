using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.SalaryDetails
{
    public partial class InstallmentsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HRM.SalaryDetails.InstallmentsEditor";

        public InstallmentsEditorAttribute()
            : base(Key)
        {
        }
    }
}

