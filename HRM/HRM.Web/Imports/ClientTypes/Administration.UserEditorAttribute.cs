using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace HRM.Administration
{
    public partial class UserEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "HRM.Administration.UserEditor";

        public UserEditorAttribute()
            : base(Key)
        {
        }

        public Boolean AllowClear
        {
            get { return GetOption<Boolean>("allowClear"); }
            set { SetOption("allowClear", value); }
        }
    }
}

