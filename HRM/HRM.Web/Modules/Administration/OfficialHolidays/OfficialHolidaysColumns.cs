
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.OfficialHolidays")]
    [BasedOnRow(typeof(Entities.OfficialHolidaysRow), CheckNames = true)]
    public class OfficialHolidaysColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String TheReasonOfHoliday { get; set; }
        public DateTime FromHoliday { get; set; }
        public DateTime ToHoliday { get; set; }
        
        public Int16 weekdays { get; set; }
        public Int16 Religion { get; set; }
    }
}