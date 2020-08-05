using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Employees
{
    [EnumKey("Employees.AcceptedHREnum")]
    
   
    public enum AcceptedHREnum
    {
        [Description("Approved and closed")]
        Approved = 1,
        [Description("Refused")]
        refused = 2,
        [Description("Pending")]
        pending = 0
    }

}