
namespace HRM.Employees.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Employees.Users")]
    [BasedOnRow(typeof(Entities.UsersRow), CheckNames = true)]
    public class UsersColumns
    {
        [Tab("Personnal")]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserId { get; set; }
        [EditLink]
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public String Source { get; set; }
       
        public String UserImage { get; set; }
       
        public String FingerPrintCode { get; set; }
        
        public DateTime HireDate { get; set; }
        public String EducationalQualification { get; set; }
        public DateTime GraduationYears { get; set; }
        public String MilitaryStatus { get; set; }
        public DateTime Birthdate { get; set; }
        public Int32 Personalidentification { get; set; }
        public Int32 PersonalPhoneNumber { get; set; }
        public String Address { get; set; }
        public DateTime AttendanceDate { get; set; }
        public DateTime Departuredate { get; set; }
        public Int16 EmployeeStatus { get; set; }
        public Int32 CasualVacancy { get; set; }
        public Int32 Regularvacation { get; set; }
        public Int32 AnnualLeave { get; set; }
        public String MangerUsername { get; set; }
        public String JobJobtitle { get; set; }
    }
}