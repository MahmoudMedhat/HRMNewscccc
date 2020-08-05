
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.BasicInsurances")]
    [BasedOnRow(typeof(Entities.BasicInsurancesRow), CheckNames = true)]
    public class BasicInsurancesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [EditLink]
        public String Insurance { get; set; }
        public Decimal InsurancesQ { get; set; }
        public DateTime InsuranceDate { get; set; }
        public String UserUsername { get; set; }
    }
}