
namespace HRM.SalaryDetails.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("SalaryDetails"), TableName("[dbo].[Premiumstype]")]
    [DisplayName("Premiumstype"), InstanceName("Premiumstype")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PremiumstypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bonus"), Size(50), QuickSearch]
        public String Premium
        {
            get { return Fields.Premium[this]; }
            set { Fields.Premium[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Premium; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PremiumstypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Premium;
        }
    }
}
