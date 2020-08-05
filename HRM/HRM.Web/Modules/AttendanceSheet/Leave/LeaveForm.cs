
namespace HRM.AttendanceSheet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AttendanceSheet.Leave")]
    [BasedOnRow(typeof(Entities.LeaveRow), CheckNames = true)]
    public class LeaveForm
    {
        public DateTime Date { get; set; }
        public String FingerPrint { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public String IpAddress { get; set; }
        public String Device { get; set; }
    }
}