using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.Administration
{
    public partial class AllowancesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HRM.Administration.AllowancesEditor";

        public AllowancesEditorAttribute()
            : base(Key)
        {
        }
    }
}

