
namespace HRM.Employees.Entities
{
    using HRM.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[Users]")]
    [DisplayName("Users"), InstanceName("Users")]

    [ReadPermission(EmployessPermissionKeys.Employees.Modify)]
    //[DeletePermission("Employees:Users")]
    [ModifyPermission(EmployessPermissionKeys.Employees.Modify)]
    [UpdatePermission(EmployessPermissionKeys.Employees.Modify)]


    [LookupScript("Users")]
    public sealed class UsersRow : Row, IIdRow, INameRow
    {
       
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Last Directory Update")]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Finger Print Code")]
        public String FingerPrintCode
        {
            get { return Fields.FingerPrintCode[this]; }
            set { Fields.FingerPrintCode[this] = value; }
        }

        [DisplayName("Hire Date")]
        [HideOnUpdate]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
        }

        [DisplayName("Educational Qualification"), Size(400)]
        public String EducationalQualification
        {
            get { return Fields.EducationalQualification[this]; }
            set { Fields.EducationalQualification[this] = value; }
        }

        [DisplayName("Graduation Years")]
        public DateTime? GraduationYears
        {
            get { return Fields.GraduationYears[this]; }
            set { Fields.GraduationYears[this] = value; }
        }

        [DisplayName("Military Status"), Size(80)]
        public String MilitaryStatus
        {
            get { return Fields.MilitaryStatus[this]; }
            set { Fields.MilitaryStatus[this] = value; }
        }

        [DisplayName("Birthdate")]
        public DateTime? Birthdate
        {
            get { return Fields.Birthdate[this]; }
            set { Fields.Birthdate[this] = value; }
        }

        [DisplayName("Personalidentification"), Column("personalidentification")]
        public Int32? Personalidentification
        {
            get { return Fields.Personalidentification[this]; }
            set { Fields.Personalidentification[this] = value; }
        }

        [DisplayName("Personal Phone Number")]
        public Int32? PersonalPhoneNumber
        {
            get { return Fields.PersonalPhoneNumber[this]; }
            set { Fields.PersonalPhoneNumber[this] = value; }
        }

        [DisplayName("Address"), Size(100)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Attendance Date")]
        [HideOnUpdate]
        public DateTime? AttendanceDate
        {
            get { return Fields.AttendanceDate[this]; }
            set { Fields.AttendanceDate[this] = value; }
        }

        [HideOnUpdate]
        [DisplayName("Departuredate"), Column("departuredate")]
        public DateTime? Departuredate
        {
            get { return Fields.Departuredate[this]; }
            set { Fields.Departuredate[this] = value; }
        }

        [DisplayName("Employee Status")]
        public Int16? EmployeeStatus
        {
            get { return Fields.EmployeeStatus[this]; }
            set { Fields.EmployeeStatus[this] = value; }
        }

        [HideOnUpdate]
        [DisplayName("Casual Vacancy")]
        public Int32? CasualVacancy
        {
            get { return Fields.CasualVacancy[this]; }
            set { Fields.CasualVacancy[this] = value; }
        }

        [HideOnUpdate]
        [DisplayName("Regularvacation")]
        public Int32? Regularvacation
        {
            get { return Fields.Regularvacation[this]; }
            set { Fields.Regularvacation[this] = value; }
        }

        [HideOnUpdate]
        [DisplayName("Annual Leave")]
        public Int32? AnnualLeave
        {
            get { return Fields.AnnualLeave[this]; }
            set { Fields.AnnualLeave[this] = value; }
        }

        [LookupEditor(typeof(UsersRow))]
        [HideOnUpdate]
        [DisplayName("Manger"), Column("MangerID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jManger"), TextualField("MangerUsername")]
        public Int32? MangerID
        {
            get { return Fields.MangerID[this]; }
            set { Fields.MangerID[this] = value; }
        }

        [LookupEditor(typeof(JobsRow))]
        [HideOnUpdate]
        [DisplayName("Job"), Column("JobID"), NotNull, ForeignKey("[dbo].[Jobs]", "ID"), LeftJoin("jJob"), TextualField("JobJobtitle")]
        public Int32? JobId
        {
            get { return Fields.JobId[this]; }
            set { Fields.JobId[this] = value; }
        }

        [DisplayName("Manger Username"), Expression("jManger.[Username]")]
        public String MangerUsername
        {
            get { return Fields.MangerUsername[this]; }
            set { Fields.MangerUsername[this] = value; }
        }

        [DisplayName("Manger Display Name"), Expression("jManger.[DisplayName]")]
        public String MangerDisplayName
        {
            get { return Fields.MangerDisplayName[this]; }
            set { Fields.MangerDisplayName[this] = value; }
        }

        [DisplayName("Manger Email"), Expression("jManger.[Email]")]
        public String MangerEmail
        {
            get { return Fields.MangerEmail[this]; }
            set { Fields.MangerEmail[this] = value; }
        }

        [DisplayName("Manger Source"), Expression("jManger.[Source]")]
        public String MangerSource
        {
            get { return Fields.MangerSource[this]; }
            set { Fields.MangerSource[this] = value; }
        }

        [DisplayName("Manger Password Hash"), Expression("jManger.[PasswordHash]")]
        public String MangerPasswordHash
        {
            get { return Fields.MangerPasswordHash[this]; }
            set { Fields.MangerPasswordHash[this] = value; }
        }

        [DisplayName("Manger Password Salt"), Expression("jManger.[PasswordSalt]")]
        public String MangerPasswordSalt
        {
            get { return Fields.MangerPasswordSalt[this]; }
            set { Fields.MangerPasswordSalt[this] = value; }
        }


        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }


        [DisplayName("Manger Last Directory Update"), Expression("jManger.[LastDirectoryUpdate]")]
        public DateTime? MangerLastDirectoryUpdate
        {
            get { return Fields.MangerLastDirectoryUpdate[this]; }
            set { Fields.MangerLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Manger User Image"), Expression("jManger.[UserImage]")]
        public String MangerUserImage
        {
            get { return Fields.MangerUserImage[this]; }
            set { Fields.MangerUserImage[this] = value; }
        }

        [DisplayName("Manger Insert Date"), Expression("jManger.[InsertDate]")]
        public DateTime? MangerInsertDate
        {
            get { return Fields.MangerInsertDate[this]; }
            set { Fields.MangerInsertDate[this] = value; }
        }

        [DisplayName("Manger Insert User Id"), Expression("jManger.[InsertUserId]")]
        public Int32? MangerInsertUserId
        {
            get { return Fields.MangerInsertUserId[this]; }
            set { Fields.MangerInsertUserId[this] = value; }
        }

        [DisplayName("Manger Update Date"), Expression("jManger.[UpdateDate]")]
        public DateTime? MangerUpdateDate
        {
            get { return Fields.MangerUpdateDate[this]; }
            set { Fields.MangerUpdateDate[this] = value; }
        }

        [DisplayName("Manger Update User Id"), Expression("jManger.[UpdateUserId]")]
        public Int32? MangerUpdateUserId
        {
            get { return Fields.MangerUpdateUserId[this]; }
            set { Fields.MangerUpdateUserId[this] = value; }
        }

        [DisplayName("Manger Is Active"), Expression("jManger.[IsActive]")]
        public Int16? MangerIsActive
        {
            get { return Fields.MangerIsActive[this]; }
            set { Fields.MangerIsActive[this] = value; }
        }

        [DisplayName("Manger Finger Print Code"), Expression("jManger.[FingerPrintCode]")]
        public String MangerFingerPrintCode
        {
            get { return Fields.MangerFingerPrintCode[this]; }
            set { Fields.MangerFingerPrintCode[this] = value; }
        }

        [DisplayName("Manger Manager Id"), Expression("jManger.[MangerID]")]
        public Int32? MangerManagerId
        {
            get { return Fields.MangerManagerId[this]; }
            set { Fields.MangerManagerId[this] = value; }
        }

        [DisplayName("Manger Hire Date"), Expression("jManger.[HireDate]")]
        public DateTime? MangerHireDate
        {
            get { return Fields.MangerHireDate[this]; }
            set { Fields.MangerHireDate[this] = value; }
        }

        [DisplayName("Manger Educational Qualification"), Expression("jManger.[EducationalQualification]")]
        public String MangerEducationalQualification
        {
            get { return Fields.MangerEducationalQualification[this]; }
            set { Fields.MangerEducationalQualification[this] = value; }
        }

        [DisplayName("Manger Graduation Years"), Expression("jManger.[GraduationYears]")]
        public DateTime? MangerGraduationYears
        {
            get { return Fields.MangerGraduationYears[this]; }
            set { Fields.MangerGraduationYears[this] = value; }
        }

        [DisplayName("Manger Military Status"), Expression("jManger.[MilitaryStatus]")]
        public String MangerMilitaryStatus
        {
            get { return Fields.MangerMilitaryStatus[this]; }
            set { Fields.MangerMilitaryStatus[this] = value; }
        }

        [DisplayName("Manger Birthdate"), Expression("jManger.[Birthdate]")]
        public DateTime? MangerBirthdate
        {
            get { return Fields.MangerBirthdate[this]; }
            set { Fields.MangerBirthdate[this] = value; }
        }

        [DisplayName("Manger Personalidentification"), Expression("jManger.[personalidentification]")]
        public Int32? MangerPersonalidentification
        {
            get { return Fields.MangerPersonalidentification[this]; }
            set { Fields.MangerPersonalidentification[this] = value; }
        }

        [DisplayName("Manger Personal Phone Number"), Expression("jManger.[PersonalPhoneNumber]")]
        public Int32? MangerPersonalPhoneNumber
        {
            get { return Fields.MangerPersonalPhoneNumber[this]; }
            set { Fields.MangerPersonalPhoneNumber[this] = value; }
        }

        [DisplayName("Manger Address"), Expression("jManger.[Address]")]
        public String MangerAddress
        {
            get { return Fields.MangerAddress[this]; }
            set { Fields.MangerAddress[this] = value; }
        }

        [DisplayName("Manger Attendance Date"), Expression("jManger.[AttendanceDate]")]
        public DateTime? MangerAttendanceDate
        {
            get { return Fields.MangerAttendanceDate[this]; }
            set { Fields.MangerAttendanceDate[this] = value; }
        }

        [DisplayName("Manger Departuredate"), Expression("jManger.[departuredate]")]
        public DateTime? MangerDeparturedate
        {
            get { return Fields.MangerDeparturedate[this]; }
            set { Fields.MangerDeparturedate[this] = value; }
        }

        [DisplayName("Manger Employee Status"), Expression("jManger.[EmployeeStatus]")]
        public Int16? MangerEmployeeStatus
        {
            get { return Fields.MangerEmployeeStatus[this]; }
            set { Fields.MangerEmployeeStatus[this] = value; }
        }

        [DisplayName("Manger Casual Vacancy"), Expression("jManger.[CasualVacancy]")]
        public Int32? MangerCasualVacancy
        {
            get { return Fields.MangerCasualVacancy[this]; }
            set { Fields.MangerCasualVacancy[this] = value; }
        }

        [DisplayName("Manger Regularvacation"), Expression("jManger.[Regularvacation]")]
        public Int32? MangerRegularvacation
        {
            get { return Fields.MangerRegularvacation[this]; }
            set { Fields.MangerRegularvacation[this] = value; }
        }

        [DisplayName("Manger Annual Leave"), Expression("jManger.[AnnualLeave]")]
        public Int32? MangerAnnualLeave
        {
            get { return Fields.MangerAnnualLeave[this]; }
            set { Fields.MangerAnnualLeave[this] = value; }
        }

        [DisplayName("Manger Manger Id"), Expression("jManger.[MangerID]")]
        public Int32? MangerMangerId
        {
            get { return Fields.MangerMangerId[this]; }
            set { Fields.MangerMangerId[this] = value; }
        }

        [DisplayName("Manger Job Id"), Expression("jManger.[JobID]")]
        public Int32? MangerJobId
        {
            get { return Fields.MangerJobId[this]; }
            set { Fields.MangerJobId[this] = value; }
        }

        [DisplayName("Job Jobtitle"), Expression("jJob.[Jobtitle]")]
        public String JobJobtitle
        {
            get { return Fields.JobJobtitle[this]; }
            set { Fields.JobJobtitle[this] = value; }
        }

        [DisplayName("Job Departement Id"), Expression("jJob.[DepartementID]")]
        public Int32? JobDepartementId
        {
            get { return Fields.JobDepartementId[this]; }
            set { Fields.JobDepartementId[this] = value; }
        }

        [NotMapped]

        public decimal? BaseSalary
        {
            get { return Fields.BaseSalary[this]; }
            set { Fields.BaseSalary[this] = value; }
        }

        [NotMapped]
        public String AllowanceDescriptions
        {
            get { return Fields.AllowanceDescriptions[this]; }
            set { Fields.AllowanceDescriptions[this] = value; }
        }

        [NotMapped]
        public decimal? Allowance
        {
            get { return Fields.Allowance[this]; }
            set { Fields.Allowance[this] = value; }
        }

        [NotMapped]
        public String Insurance
        {
            get { return Fields.Insurance[this]; }
            set { Fields.Insurance[this] = value; }
        }

        [NotMapped]
        public decimal? insurancesQ
        {
            get { return Fields.insurancesQ[this]; }
            set { Fields.insurancesQ[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UsersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField DisplayName;
            public StringField Email;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public DateTimeField LastDirectoryUpdate;
            public StringField UserImage;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int16Field IsActive;
            public StringField FingerPrintCode;
          
            public DateTimeField HireDate;
            public StringField EducationalQualification;
            public DateTimeField GraduationYears;
            public StringField MilitaryStatus;
            public DateTimeField Birthdate;
            public Int32Field Personalidentification;
            public Int32Field PersonalPhoneNumber;
            public StringField Address;
            public DateTimeField AttendanceDate;
            public DateTimeField Departuredate;
            public Int16Field EmployeeStatus;
            public Int32Field CasualVacancy;
            public Int32Field Regularvacation;
            public Int32Field AnnualLeave;
            public Int32Field MangerID;
            public Int32Field JobId;

            public StringField MangerUsername;
            public StringField MangerDisplayName;
            public StringField MangerEmail;
            public StringField MangerSource;
            public StringField MangerPasswordHash;
            public StringField MangerPasswordSalt;
            public DateTimeField MangerLastDirectoryUpdate;
            public StringField MangerUserImage;
            public DateTimeField MangerInsertDate;
            public Int32Field MangerInsertUserId;
            public DateTimeField MangerUpdateDate;
            public Int32Field MangerUpdateUserId;
            public Int16Field MangerIsActive;
            public StringField MangerFingerPrintCode;
            public Int32Field MangerManagerId;
            public DateTimeField MangerHireDate;
            public StringField MangerEducationalQualification;
            public DateTimeField MangerGraduationYears;
            public StringField MangerMilitaryStatus;
            public DateTimeField MangerBirthdate;
            public Int32Field MangerPersonalidentification;
            public Int32Field MangerPersonalPhoneNumber;
            public StringField MangerAddress;
            public DateTimeField MangerAttendanceDate;
            public DateTimeField MangerDeparturedate;
            public Int16Field MangerEmployeeStatus;
            public Int32Field MangerCasualVacancy;
            public Int32Field MangerRegularvacation;
            public Int32Field MangerAnnualLeave;
            public Int32Field MangerMangerId;
            public Int32Field MangerJobId;
            public StringField Password;
            public StringField PasswordConfirm;



            public DecimalField BaseSalary;
            public StringField AllowanceDescriptions;
            public DecimalField Allowance;
            public DecimalField insurancesQ;
            public StringField Insurance;

            public StringField JobJobtitle;
            public Int32Field JobDepartementId;
        }
    }
}
