
namespace HRM.SalaryDetails.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SalaryDetails.Premiums")]
    [BasedOnRow(typeof(Entities.PremiumsRow), CheckNames = true)]
    public class PremiumsForm
    {
        [HideOnUpdate]
        public List<Int32> UserIdList { get; set; }
        [HideOnInsert]
        public Int32 UserId { get; set; }
        public Decimal PremiumQuantity { get; set; }
        public DateTime PremiumDate { get; set; }
        public Int32 premiumType { get; set; }
    }
}