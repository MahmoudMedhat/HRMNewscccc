
namespace HRM.AttendanceSheet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AttendanceSheet"), TableName("[dbo].[Leave]")]
    [DisplayName("Leave"), InstanceName("Leave")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LeaveRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Finger Print"), Size(100), QuickSearch]
        public String FingerPrint
        {
            get { return Fields.FingerPrint[this]; }
            set { Fields.FingerPrint[this] = value; }
        }

        [DisplayName("Check In")]
        public DateTime? CheckIn
        {
            get { return Fields.CheckIn[this]; }
            set { Fields.CheckIn[this] = value; }
        }

        [DisplayName("Check Out")]
        public DateTime? CheckOut
        {
            get { return Fields.CheckOut[this]; }
            set { Fields.CheckOut[this] = value; }
        }

        [DisplayName("Ip Address"), Size(60)]
        public String IpAddress
        {
            get { return Fields.IpAddress[this]; }
            set { Fields.IpAddress[this] = value; }
        }

        [DisplayName("Device"), Size(100)]
        public String Device
        {
            get { return Fields.Device[this]; }
            set { Fields.Device[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FingerPrint; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LeaveRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField Date;
            public StringField FingerPrint;
            public DateTimeField CheckIn;
            public DateTimeField CheckOut;
            public StringField IpAddress;
            public StringField Device;
        }
    }
}
