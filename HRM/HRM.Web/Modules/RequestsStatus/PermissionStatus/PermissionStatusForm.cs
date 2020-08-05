
namespace HRM.RequestsStatus.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("RequestsStatus.PermissionStatus")]
    [BasedOnRow(typeof(Entities.PermissionStatusRow), CheckNames = true)]
    public class PermissionStatusForm
    {
        public String Permissiontype { get; set; }
    }
}