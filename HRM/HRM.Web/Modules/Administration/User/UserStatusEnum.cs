using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Administration
{
   
    [EnumKey("Administration.UserStatusEnum")]
    public enum UserStatusEnum
    {
        [Description("Employee")]
        Employee = 1,

        [Description("Resignation")]
        Resignation = 2,

        [Description("Died")]
        Died = 3

    }
}