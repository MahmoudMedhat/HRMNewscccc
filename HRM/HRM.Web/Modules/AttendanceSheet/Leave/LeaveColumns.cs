
namespace HRM.AttendanceSheet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AttendanceSheet.Leave")]
    [BasedOnRow(typeof(Entities.LeaveRow), CheckNames = true)]
    public class LeaveColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String FingerPrint { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public String IpAddress { get; set; }
        public String Device { get; set; }
    }
}