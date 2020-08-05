using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.RequestsStatus
{
    public partial class InstallmentsRequestEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HRM.RequestsStatus.InstallmentsRequestEditor";

        public InstallmentsRequestEditorAttribute()
            : base(Key)
        {
        }
    }
}

