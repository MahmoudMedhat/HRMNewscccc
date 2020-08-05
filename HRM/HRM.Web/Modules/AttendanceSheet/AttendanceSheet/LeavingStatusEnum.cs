using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Modules.AttendanceSheet.AttendanceSheet
{
    [EnumKey("AttendanceSheet.LeavingStatusEnum")]
    public enum LeavingStatusEnum
    {
        [Description("Present")]
        Present = 1,

        [Description("Absence")]
        Absence = 0,

        [Description("Late")]
        Late = 2,

        [Description("Early")]
        early = 3
    }
}