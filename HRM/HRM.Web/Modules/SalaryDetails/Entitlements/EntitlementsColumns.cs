
namespace HRM.SalaryDetails.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SalaryDetails.Entitlements")]
    [BasedOnRow(typeof(Entities.EntitlementsRow), CheckNames = true)]
    public class EntitlementsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public Decimal Entitlement { get; set; }
        public DateTime EntitlementsDate { get; set; }
        [EditLink]
        public String EntitlementReason { get; set; }
    }
}