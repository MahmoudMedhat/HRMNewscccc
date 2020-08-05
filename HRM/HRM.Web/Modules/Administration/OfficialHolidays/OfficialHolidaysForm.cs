
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.OfficialHolidays")]
    [BasedOnRow(typeof(Entities.OfficialHolidaysRow), CheckNames = true)]
    public class OfficialHolidaysForm
    {
        public DateTime FromHoliday { get; set; }
        public DateTime ToHoliday { get; set; }
        public String TheReasonOfHoliday { get; set; }
        public String weekdays { get; set; }
        public Int16 Religion { get; set; }
    }
}