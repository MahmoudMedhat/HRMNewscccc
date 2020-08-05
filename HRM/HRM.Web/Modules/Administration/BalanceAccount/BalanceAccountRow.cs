
namespace HRM.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using HRM.Administration;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Balance]")]
    [DisplayName("Balance Account"), InstanceName("Balance Account")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BalanceAccountRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        //GrossSalary =  BasicSalary +  Entitlements   //5+
        //NetIncome   =  GrossSalary-TotalDeductions 


        [FilterUserEditor]
        //[LookupEditor(typeof(UserRow))]
        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? User_ID
        {
            get { return Fields.User_ID[this]; }
            set { Fields.User_ID[this] = value; }
        }

        [DisplayName("Base Salary"), Size(19), Scale(5)]
        public Decimal? BaseSalary
        {
            get { return Fields.BaseSalary[this]; }
            set { Fields.BaseSalary[this] = value; }
        }

        [DisplayName("Gross Salary"), Size(19), Scale(5)]
        public Decimal? GrossSalary
        {
            get { return Fields.GrossSalary[this]; }
            set { Fields.GrossSalary[this] = value; }
        }

        [DisplayName("Net Income"), Size(19), Scale(5)]
        public Decimal? NetIncome
        {
            get { return Fields.NetIncome[this]; }
            set { Fields.NetIncome[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? DateEnd
        {
            get { return Fields.DateEnd[this]; }
            set { Fields.DateEnd[this] = value; }
        }

        [DisplayName("Beggin Date")]
        public DateTime? DateBeginn
        {
            get { return Fields.DateBeginn[this]; }
            set { Fields.DateBeginn[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BalanceAccountRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field User_ID;
            public DecimalField BaseSalary;
            public DecimalField GrossSalary;
            public DecimalField NetIncome;
            public DateTimeField DateEnd;
            public DateTimeField DateBeginn;

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
        }
    }
}
