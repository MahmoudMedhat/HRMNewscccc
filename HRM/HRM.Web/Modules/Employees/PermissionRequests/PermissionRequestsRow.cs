
namespace HRM.Employees.Entities
{
    using HRM.RequestsStatus.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[PermissionRequests]")]
    [DisplayName("Permission Requests"), InstanceName("Permission Requests")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PermissionRequestsRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), Column("userID"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [HideOnInsert, HideOnUpdate]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }


        [LookupEditor(typeof(PermissionStatusRow))]
        [DisplayName("Permission"), Column("PermissionID"), NotNull, ForeignKey("[dbo].[PermissionStatus]", "ID"), LeftJoin("jPermission"), TextualField("PermissionPermissiontype")]
        public Int32? PermissionId
        {
            get { return Fields.PermissionId[this]; }
            set { Fields.PermissionId[this] = value; }
        }

        [HideOnInsert, HideOnUpdate]
        [DisplayName("Status"), Column("StatusID"), NotNull, ForeignKey("[dbo].[Status]", "ID"), LeftJoin("jStatus"), TextualField("StatusStatusName")]
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [HideOnInsert, HideOnUpdate]
        [DisplayName("Is Acceptedby Hr"), Column("IsAcceptedbyHR"), NotNull]
        public Int16? IsAcceptedbyHr
        {
            get { return Fields.IsAcceptedbyHr[this]; }
            set { Fields.IsAcceptedbyHr[this] = value; }
        }

        [HideOnInsert, HideOnUpdate]
        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Date From"), NotNull, DateTimeEditor]

        public DateTime? DateFrom
        {
            get { return Fields.DateFrom[this]; }
            set { Fields.DateFrom[this] = value; }
        }

        [DisplayName("Dateto"), NotNull, DateTimeEditor]
        public DateTime? Dateto
        {
            get { return Fields.Dateto[this]; }
            set { Fields.Dateto[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [HideOnInsert, HideOnUpdate]
        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        [DisplayName("User Finger Print Code"), Expression("jUser.[FingerPrintCode]")]
        public Int32? UserFingerPrintCode
        {
            get { return Fields.UserFingerPrintCode[this]; }
            set { Fields.UserFingerPrintCode[this] = value; }
        }



        [DisplayName("User Hire Date"), Expression("jUser.[HireDate]")]
        public DateTime? UserHireDate
        {
            get { return Fields.UserHireDate[this]; }
            set { Fields.UserHireDate[this] = value; }
        }

        [DisplayName("User Educational Qualification"), Expression("jUser.[EducationalQualification]")]
        public String UserEducationalQualification
        {
            get { return Fields.UserEducationalQualification[this]; }
            set { Fields.UserEducationalQualification[this] = value; }
        }

        [DisplayName("User Graduation Years"), Expression("jUser.[GraduationYears]")]
        public DateTime? UserGraduationYears
        {
            get { return Fields.UserGraduationYears[this]; }
            set { Fields.UserGraduationYears[this] = value; }
        }

        [DisplayName("User Military Status"), Expression("jUser.[MilitaryStatus]")]
        public String UserMilitaryStatus
        {
            get { return Fields.UserMilitaryStatus[this]; }
            set { Fields.UserMilitaryStatus[this] = value; }
        }

        [DisplayName("User Birthdate"), Expression("jUser.[Birthdate]")]
        public DateTime? UserBirthdate
        {
            get { return Fields.UserBirthdate[this]; }
            set { Fields.UserBirthdate[this] = value; }
        }

        [DisplayName("User Personalidentification"), Expression("jUser.[personalidentification]")]
        public Int32? UserPersonalidentification
        {
            get { return Fields.UserPersonalidentification[this]; }
            set { Fields.UserPersonalidentification[this] = value; }
        }

        [DisplayName("User Personal Phone Number"), Expression("jUser.[PersonalPhoneNumber]")]
        public Int32? UserPersonalPhoneNumber
        {
            get { return Fields.UserPersonalPhoneNumber[this]; }
            set { Fields.UserPersonalPhoneNumber[this] = value; }
        }

        [DisplayName("User Address"), Expression("jUser.[Address]")]
        public String UserAddress
        {
            get { return Fields.UserAddress[this]; }
            set { Fields.UserAddress[this] = value; }
        }

        [DisplayName("User Attendance Date"), Expression("jUser.[AttendanceDate]")]
        public DateTime? UserAttendanceDate
        {
            get { return Fields.UserAttendanceDate[this]; }
            set { Fields.UserAttendanceDate[this] = value; }
        }

        [DisplayName("User Departuredate"), Expression("jUser.[departuredate]")]
        public DateTime? UserDeparturedate
        {
            get { return Fields.UserDeparturedate[this]; }
            set { Fields.UserDeparturedate[this] = value; }
        }

        [DisplayName("User Employee Status"), Expression("jUser.[EmployeeStatus]")]
        public Int16? UserEmployeeStatus
        {
            get { return Fields.UserEmployeeStatus[this]; }
            set { Fields.UserEmployeeStatus[this] = value; }
        }

        [DisplayName("User Casual Vacancy"), Expression("jUser.[CasualVacancy]")]
        public Int32? UserCasualVacancy
        {
            get { return Fields.UserCasualVacancy[this]; }
            set { Fields.UserCasualVacancy[this] = value; }
        }

        [DisplayName("User Regularvacation"), Expression("jUser.[Regularvacation]")]
        public Int32? UserRegularvacation
        {
            get { return Fields.UserRegularvacation[this]; }
            set { Fields.UserRegularvacation[this] = value; }
        }

        [DisplayName("User Annual Leave"), Expression("jUser.[AnnualLeave]")]
        public Int32? UserAnnualLeave
        {
            get { return Fields.UserAnnualLeave[this]; }
            set { Fields.UserAnnualLeave[this] = value; }
        }

        [DisplayName("User Manger Id"), Expression("jUser.[MangerID]")]
        public Int32? UserMangerId
        {
            get { return Fields.UserMangerId[this]; }
            set { Fields.UserMangerId[this] = value; }
        }

        [DisplayName("User Job Id"), Expression("jUser.[JobID]")]
        public Int32? UserJobId
        {
            get { return Fields.UserJobId[this]; }
            set { Fields.UserJobId[this] = value; }
        }

        [DisplayName("Permission Permissiontype"), Expression("jPermission.[Permissiontype]")]
        public String PermissionPermissiontype
        {
            get { return Fields.PermissionPermissiontype[this]; }
            set { Fields.PermissionPermissiontype[this] = value; }
        }

        [DisplayName("Status Status Name"), Expression("jStatus.[StatusName]")]
        public String StatusStatusName
        {
            get { return Fields.StatusStatusName[this]; }
            set { Fields.StatusStatusName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PermissionRequestsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field PermissionId;
            public Int32Field StatusId;
            public Int16Field IsAcceptedbyHr;
            public DateTimeField Date;
            public DateTimeField DateFrom;
            public DateTimeField Dateto;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;
            public Int32Field UserFingerPrintCode;

            public DateTimeField UserHireDate;
            public StringField UserEducationalQualification;
            public DateTimeField UserGraduationYears;
            public StringField UserMilitaryStatus;
            public DateTimeField UserBirthdate;
            public Int32Field UserPersonalidentification;
            public Int32Field UserPersonalPhoneNumber;
            public StringField UserAddress;
            public DateTimeField UserAttendanceDate;
            public DateTimeField UserDeparturedate;
            public Int16Field UserEmployeeStatus;
            public Int32Field UserCasualVacancy;
            public Int32Field UserRegularvacation;
            public Int32Field UserAnnualLeave;
            public Int32Field UserMangerId;
            public Int32Field UserJobId;

            public StringField PermissionPermissiontype;

            public StringField StatusStatusName;
        }
    }
}
