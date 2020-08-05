
namespace HRM.RequestsStatus.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("RequestsStatus"), TableName("[dbo].[PermissionStatus]")]
    [DisplayName("Permission Status"), InstanceName("Permission Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PermissionStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Permissiontype"), Size(80), NotNull, QuickSearch]
        public String Permissiontype
        {
            get { return Fields.Permissiontype[this]; }
            set { Fields.Permissiontype[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Permissiontype; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PermissionStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Permissiontype;
        }
    }
}
