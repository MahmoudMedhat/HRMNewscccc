
namespace HRM.AttendanceSheet.Entities
{
    using HRM.Modules.AttendanceSheet.AttendanceSheet;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AttendanceSheet"), TableName("[dbo].[AttendanceSheet]")]
    [DisplayName("Attendance Sheet"), InstanceName("Attendance Sheet")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AttendanceSheetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee Name"), Column("Employee_Name"), Size(80), QuickSearch]
        public String EmployeeName
        {
            get { return Fields.EmployeeName[this]; }
            set { Fields.EmployeeName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("In")]
        public LeavingStatusEnum? Status_In
        {
            get { return (LeavingStatusEnum?) Fields.Status_In[this]; }
            set { Fields.Status_In[this] =(Int16?) value; }
        }
        [DisplayName("Out")]
        public LeavingStatusEnum? Status_Out
        {
            get { return (LeavingStatusEnum?)Fields.Status_Out[this]; }
            set { Fields.Status_Out[this] = (Int16?)value; }
        }

        [DisplayName("Remarks"), Size(50)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }
        [DisplayName("Remarks"), Size(50)]
        public String Remark_Out
        {
            get { return Fields.Remark_Out[this]; }
            set { Fields.Remark_Out[this] = value; }
        }

        [DisplayName("Attendance Date")]
        public DateTime? AttendanceDate
        {
            get { return Fields.AttendanceDate[this]; }
            set { Fields.AttendanceDate[this] = value; }
        }

        //public String Reason
        //{
        //    get { return Fields.Reason[this]; }
        //    set { Fields.Reason[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AttendanceSheetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField EmployeeName;
            public StringField Email;
            public Int16Field Status_In;
            public Int16Field Status_Out;
            public StringField Remarks;
            public StringField Remark_Out;
            public DateTimeField AttendanceDate;
            //public StringField Reason;
        }
    }
}
