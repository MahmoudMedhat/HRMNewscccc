
namespace HRM.RequestsStatus.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("RequestsStatus.PermissionStatus")]
    [BasedOnRow(typeof(Entities.PermissionStatusRow), CheckNames = true)]
    public class PermissionStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Permissiontype { get; set; }
    }
}