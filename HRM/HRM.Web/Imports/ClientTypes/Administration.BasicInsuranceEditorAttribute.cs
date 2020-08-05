using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.Administration
{
    public partial class BasicInsuranceEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "HRM.Administration.BasicInsuranceEditor";

        public BasicInsuranceEditorAttribute()
            : base(Key)
        {
        }
    }
}

