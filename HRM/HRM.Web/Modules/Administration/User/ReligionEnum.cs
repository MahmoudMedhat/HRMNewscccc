using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace HRM.Modules.Administration.User
{
    [EnumKey("Administration.ReligionEnum")]
    public enum ReligionEnum
    {
        [Description("Muslim")]
        Muslim = 1,
        [Description("Christian")]
        Christian =2
    }


    [EnumKey("Administration.Religion_Offical_Enum")]
    public enum Religion_Offical_Enum
    {
        [Description("Muslim")]
        Muslim = 1,
        [Description("Christian")]
        Christian = 2,
        [Description("All of them")]
        AllofThem =3
            
    }
}