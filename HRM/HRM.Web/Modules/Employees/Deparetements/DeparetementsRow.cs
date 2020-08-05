
namespace HRM.Employees.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[Deparetements]")]
    [DisplayName("Deparetements"), InstanceName("Deparetements")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DeparetementsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Departement"), Size(255), NotNull, QuickSearch]
        public String Departement
        {
            get { return Fields.Departement[this]; }
            set { Fields.Departement[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Departement; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DeparetementsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Departement;
        }
    }
}
