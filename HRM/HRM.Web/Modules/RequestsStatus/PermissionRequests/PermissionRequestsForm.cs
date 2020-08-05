
namespace HRM.RequestsStatus.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("RequestsStatus.PermissionRequests")]
    [BasedOnRow(typeof(Entities.PermissionRequestsRow), CheckNames = true)]
    public class PermissionRequestsForm
    {
        public Int32 UserId { get; set; }
        public Int32 PermissionId { get; set; }
        public Int32 StatusId { get; set; }
        public Int16 IsAcceptedbyHr { get; set; }
        public DateTime Date { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime Dateto { get; set; }
    }
}