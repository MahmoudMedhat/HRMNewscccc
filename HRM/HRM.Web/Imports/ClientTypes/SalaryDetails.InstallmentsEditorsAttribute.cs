using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.SalaryDetails
{
    public partial class InstallmentsEditorsAttribute : CustomEditorAttribute
    {
        public const string Key = "HRM.SalaryDetails.InstallmentsEditors";

        public InstallmentsEditorsAttribute()
            : base(Key)
        {
        }
    }
}

