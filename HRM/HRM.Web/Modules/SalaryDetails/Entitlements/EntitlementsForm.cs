
namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SalaryDetails.Entitlements")]
    [BasedOnRow(typeof(Entities.EntitlementsRow), CheckNames = true)]
    public class EntitlementsForm
    {
        [HideOnInsert]
        public Int32 UserId { get; set; }
        [HideOnUpdate]
        public List<Int32> UserIdList { get; set; }
        public Decimal Entitlement { get; set; }
        public DateTime EntitlementsDate { get; set; }
        public String EntitlementReason { get; set; }
    }
}