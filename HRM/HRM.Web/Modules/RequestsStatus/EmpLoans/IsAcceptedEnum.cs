using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Modules.RequestsStatus.EmpLoans
{
    [EnumKey("RequestsStatus.IsAccepted")]
   public enum IsAcceptedEnum
    {
        [Description("Accepted")]
        Accepted = 1,

        [Description("Refused")]
        NotAccepted = 0,

        [Description("Pending")]
        Pending = 2
    }
}