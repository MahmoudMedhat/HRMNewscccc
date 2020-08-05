
namespace HRM.SalaryDetails.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SalaryDetails.Premiums")]
    [BasedOnRow(typeof(Entities.PremiumsRow), CheckNames = true)]
    public class PremiumsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String Pname { get; set; }
        public Decimal PremiumQuantity { get; set; }
        public DateTime PremiumDate { get; set; }
    }
}