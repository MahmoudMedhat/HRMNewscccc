
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.PermissionRequests")]
    [BasedOnRow(typeof(Entities.PermissionRequestsRow), CheckNames = true)]
    public class PermissionRequestsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String PermissionPermissiontype { get; set; }
        public String StatusStatusName { get; set; }
        public Int16 IsAcceptedbyHr { get; set; }
        public DateTime Date { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime Dateto { get; set; }
    }
}