using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;


namespace HRM.Employees
{
    [EnumKey("Employees.VacancyEnum")]
    public enum Duration
    {
        [Description("Monthly")]
        Monthly = 0,

        [Description("yearly")]
        yearly = 1
    }

    [EnumKey("Employees.Sending")]
    public enum Sending
    {
        [Description( "Not relay")]
        Norelay =0,
        [Description("Relay")]
        relay =1
    }

    
}








