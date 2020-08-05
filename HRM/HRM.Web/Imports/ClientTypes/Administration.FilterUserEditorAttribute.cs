using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.Administration
{
    public partial class FilterUserEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "HRM.Administration.FilterUserEditor";

        public FilterUserEditorAttribute()
            : base(Key)
        {
        }
    }
}

