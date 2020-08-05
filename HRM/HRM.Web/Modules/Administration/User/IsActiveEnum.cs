using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Modules.Administration.User
{
    [EnumKey("Administration.IsActive")]
    public enum IsActiveEnum
    {
        [Description("Active")]
        Active = 1,

        [Description("Not Active")]
        NotActive = 0,

        
    }
}