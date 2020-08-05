using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Modules.Administration.OfficialHolidays
{
    [EnumKey("Administration.WeekDaysEnum")]
   
    public enum WeekDaysEnum
    {
        [Description("Fri-day")]
        Friday = 5,

        [Description("Satur-day")]
        Saturday = 6,

        [Description("Sun-day")]
        Sunday = 0,

        [Description("Mon-day")]
        Monday = 1,

        [Description("Tues-day")]
        Tuesday = 2,

        [Description("Wednes-day")]
        Wednesday = 3,

        [Description("Thurs-day")]
        Thursday = 4,
        [Hidden]
        Null = 7
       
    }
    
}