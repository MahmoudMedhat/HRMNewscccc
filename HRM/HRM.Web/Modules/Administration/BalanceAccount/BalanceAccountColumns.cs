
namespace HRM.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.BalanceAccount")]
    [BasedOnRow(typeof(Entities.BalanceAccountRow), CheckNames = true)]
    public class BalanceAccountColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public Decimal BaseSalary { get; set; }
        public Decimal GrossSalary { get; set; }
        public Decimal NetIncome { get; set; }
      
        public DateTime DateEnd { get; set; }
        public DateTime DateBeginn { get; set; }
    }
}