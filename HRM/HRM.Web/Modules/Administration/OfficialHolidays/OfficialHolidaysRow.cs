
namespace HRM.Administration.Entities
{
    using HRM.Modules.Administration.OfficialHolidays;
    using HRM.Modules.Administration.User;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[OfficialHolidays]")]
    [DisplayName("Official Holidays"), InstanceName("Official Holidays")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OfficialHolidaysRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("From Holiday"), Column("From_Holiday")]
        public DateTime? FromHoliday
        {
            get { return Fields.FromHoliday[this]; }
            set { Fields.FromHoliday[this] = value; }
        }

        [DisplayName("To Holiday"), Column("To_Holiday")]
        public DateTime? ToHoliday
        {
            get { return Fields.ToHoliday[this]; }
            set { Fields.ToHoliday[this] = value; }
        }


        [DisplayName("week days"), Column("weekdays")]
        public WeekDaysEnum ? weekdays

        {
            get { return(WeekDaysEnum) Fields.weekdays[this]; }
            set { Fields.weekdays[this] = (Int16?)value; }
        }

        [DisplayName("Select Religion")]
        public Religion_Offical_Enum? Religion
        {
            get { return (Religion_Offical_Enum)Fields.Religion[this]; }
            set { Fields.Religion[this] = (Int16?)value; }
        }


        [DisplayName("The Reason Of Holiday"), Column("The_reason_of_holiday"), Size(100), QuickSearch, TextAreaEditor]
        public String TheReasonOfHoliday
        {
            get { return Fields.TheReasonOfHoliday[this]; }
            set { Fields.TheReasonOfHoliday[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TheReasonOfHoliday; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfficialHolidaysRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField FromHoliday;
            public DateTimeField ToHoliday;
            public StringField TheReasonOfHoliday;
            public Int16Field weekdays;
            public Int16Field Religion;
        }
    }
}
