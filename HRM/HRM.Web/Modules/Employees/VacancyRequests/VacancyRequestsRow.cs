
namespace HRM.Employees.Entities
{
    using HRM.Employees;
    using HRM.Employees.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Web.Mvc;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[VacancyRequests]")]
    [DisplayName("Vacancy Requests"), InstanceName("Vacancy Requests")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    

    //[LeftJoin("vp", "VacancyPolicy", "vp.vacancyId=t0.VacancyId and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 > vp.FromYears and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 < vp.ToYears and vp.Sending=0 and vp.Duration=1")]  //Not relay and Annual
    //[LeftJoin("vpR", "VacancyPolicy", "vpR.vacancyId=t0.VacancyId and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 > vpR.FromYears and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 < vpR.ToYears and vpR.Sending=1 and vpR.Duration=0")]  // relay and Monthaly
    //[LeftJoin("vpnm", "VacancyPolicy", "vpnm.vacancyId=t0.VacancyId and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 > vpnm.FromYears and DATEDIFF(day,jUser.[HireDate],GETDATE())/365.0 < vpnm.ToYears  and vpnm.Sending=0 and vpnm.Duration=0")]  // Not relay and Monthaly
    [LeftJoin("B", "Balance", "t0.DateFrom >= B.DateBeginn and t0.DateFrom <= B.DateEnd and t0.Dateto >= B.DateBeginn and t0.Dateto<=B.DateEnd and t0.UserId=B.User_ID ")]
    [LeftJoin("T", "VacancyRequests", "T.userID=t0.UserId")]

    public sealed class VacancyRequestsRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity , Width(50)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [HideOnInsert]
        [HideOnUpdate]
        
        [DisplayName("User"), Column("userID"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }


       
        [DisplayName("Vacancy"), Column("VacancyID"), NotNull, ForeignKey("[dbo].[vacancies]", "ID"), LeftJoin("jVacancy"), TextualField("Vacancy")]
        [LookupEditor(typeof(VacanciesRow)/*,InplaceAdd = true, DialogType = "Employees.VacancyRequests"*/)]
        public Int32? VacancyId
        {
            get { return Fields.VacancyId[this]; }
            set { Fields.VacancyId[this] = value; }
        }

        [HideOnInsert]
        [HideOnUpdate]
        [DisplayName("Status"), Column("StatusID"), NotNull, ForeignKey("[dbo].[Status]", "ID"), LeftJoin("jStatus"), TextualField("StatusStatusName")]
        [LookupEditor(typeof(StatusRow))]
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [HideOnInsert]
        [HideOnUpdate]
        [DisplayName("HR"), Column("IsAcceptedbyHR"), NotNull ]      
        public AcceptedHREnum? IsAcceptedbyHr
        {
            get { return(AcceptedHREnum?) Fields.IsAcceptedbyHr[this]; }
            set { Fields.IsAcceptedbyHr[this] =(Int16?) value; }          
        }

        [HideOnInsert]
        [HideOnUpdate]
        [DisplayName("Date"), NotNull ]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Date From"), QuickFilter, NotNull]
        public DateTime? DateFrom
        {
            get { return Fields.DateFrom[this]; }
            set { Fields.DateFrom[this] = value; }
        }

        [DisplayName("Date to"), QuickFilter, NotNull]
        public DateTime? Dateto
        {
            get { return Fields.Dateto[this]; }
            set { Fields.Dateto[this] = value; } 
        }


        [DisplayName("Total"),ReadOnly(true) , NotMapped]
        public Int16? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [Expression("B.DateBeginn")]
        public DateTime ? Balance
        {
            get { return Fields.Balance[this]; }
            set { Fields.Balance[this] = value; }
        }


        [DisplayName("Username"), Expression("jUser.[Username]"), LookupEditor(typeof(UsersRow))]
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
        public String UserFingerPrintCode
        {
            get { return Fields.UserFingerPrintCode[this]; }
            set { Fields.UserFingerPrintCode[this] = value; }
        }

        //[DisplayName("User Manager Id"), Expression("jUser.[ManagerID]")]
        //public Int32? UserManagerId
        //{
        //    get { return Fields.UserManagerId[this]; }
        //    set { Fields.UserManagerId[this] = value; }
        //}

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

        [DisplayName("Vacancy"), Expression("jVacancy.[vacancy]"),QuickSearch]
        public String Vacancy
        {
            get { return Fields.Vacancy[this]; }
            set { Fields.Vacancy[this] = value; }
        }

        [DisplayName("Direct Manager"), Expression("jStatus.[StatusName]")]
        public String StatusStatusName
        {
            get { return Fields.StatusStatusName[this]; }
            set { Fields.StatusStatusName[this] = value; }
        }


        //[Expression("vp.Limit") , DisplayName("Limit") ,ReadOnly(true)]
        //public Int16? LimitNotRelay
        //{
        //    get { return Fields.LimitNotRelay[this]; }
        //    set { Fields.LimitNotRelay[this] = value; }
        //}

        //[Expression("vpR.Limit"), DisplayName("Limit"), ReadOnly(true)]
        //public Int16? LimitRelay
        //{
        //    get { return Fields.LimitRelay[this]; }
        //    set { Fields.LimitRelay[this] = value; }
        //}

        //[Expression("vpnm.Limit"), DisplayName("Limit"), ReadOnly(true)]
        //public Int16? LimitNotRelaym
        //{
        //    get { return Fields.LimitNotRelaym[this]; }
        //    set { Fields.LimitNotRelaym[this] = value; }
        //}

        [DisplayName("Limit after adding relay days") , NotMapped , ReadOnly(true)]
        public Int16? TotlaLimit_relay
        {
            get { return Fields.TotlaLimit_relay[this]; }
            set { Fields.TotlaLimit_relay[this] = value; }
        }

        [DisplayName("Limit"), NotMapped, ReadOnly(true)]
        public Int16? Limit_in_Inser
        {
            get { return Fields.Limit_in_Inser[this]; }
            set { Fields.Limit_in_Inser[this] = value; }
        }



        [DisplayName("The leave taken"), NotMapped, ReadOnly(true)]
        public Int16? LeaveTaken
        {
            get { return Fields.LeaveTaken[this]; }
            set { Fields.LeaveTaken[this] = value; }
        }

        [DisplayName("Comments"),  TextAreaEditor]
        public String UserComment
        {
            get { return Fields.UserComment[this]; }
            set { Fields.UserComment[this] = value; }
        }

        


        //[DisplayName("Comments"), NotMapped, ReadOnly(true)]
        //public String MangerComment
        //{
        //    get { return Fields.MangerComment[this]; }
        //    set { Fields.MangerComment[this] = value; }
        //}

        //[DisplayName("Comments"), NotMapped, ReadOnly(true)]
        //public String HrComment
        //{
        //    get { return Fields.HrComment[this]; }
        //    set { Fields.HrComment[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VacancyRequestsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            //public Int32Field Relay;ski.
            public Int32Field Id;
            public Int32Field UserId;
            //public Int16Field LimitNotRelay;
            //public Int16Field LimitRelay;
            //public Int16Field LimitNotRelaym;
            public Int16Field TotlaLimit_relay;
            public Int16Field Limit_in_Inser;
            public Int16Field LeaveTaken;
            public Int32Field VacancyId;
            public Int32Field StatusId;
            public Int16Field IsAcceptedbyHr;
            public DateTimeField Date;
            public DateTimeField DateFrom;
            public DateTimeField Dateto;
            public Int16Field Total;
            public DateTimeField Balance;

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
            public StringField UserFingerPrintCode;
           
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

            public StringField Vacancy;
            public StringField UserComment;
            //public StringField HrComment;
            //public StringField MangerComment;

            public StringField StatusStatusName;

        }
    }
}
