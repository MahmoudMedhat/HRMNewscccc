
namespace HRM.AttendanceSheet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AttendanceSheet.AttendanceSheet")]
    [BasedOnRow(typeof(Entities.AttendanceSheetRow), CheckNames = true)]
    public class AttendanceSheetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight ]
        public Int32 Id { get; set; }
        [EditLink]
        public String EmployeeName { get; set; }
        public String Email { get; set; }
        public Int16 Status_Out { get; set; }
        public String Remark_Out { get; set; }
        public Int16 Status_In { get; set; }
        public String Remarks { get; set; }
        public DateTime AttendanceDate { get; set; }
        //public String Reason { get; set; }
    }
}