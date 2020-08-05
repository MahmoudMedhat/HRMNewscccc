
namespace HRM.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserColumns
    {
        [EditLink, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }
        //[Width(100)]
        //public String Source { get; set; }

        [Width(100) , DisplayName("Finger Print")]
        public String FingerPrintCode { get; set; }

        [Width(100)]
        
        public Int32 Status { get; set; }

        //public Int32 IsActive { get; set; }
        [Width(150)]
        public DateTime HireDate { get; set; }
        [Width(150)]
        public String EducationalQualification { get; set; }
        [Width(150)]
        public DateTime GraduationYears { get; set; }
        [Width(150)]
        public String MilitaryStatus { get; set; }
        [Width(150)]
        public DateTime Birthdate { get; set; }
        [Width(150)]
        public Int32 Personalidentification { get; set; }
        [Width(150)]
        public Int32 PersonalPhoneNumber { get; set; }
        [Width(150)]
        public String Address { get; set; }
        [Width(150) , DateTimeFormatter ]
        public DateTime AttendanceDate { get; set; }
        [Width(150), DateTimeFormatter]
        public DateTime Departuredate { get; set; }
       
        //public Int16 EmployeeStatus { get; set; }
        //public Int32 CasualVacancy { get; set; }     // Fi module lwa7do
        //public Int32 Regularvacation { get; set; }  // Fi module lwa7do
        //public Int32 AnnualLeave { get; set; }  
        // Fi module lwa7do
        [Width(150)]
        public String MangerUsername { get; set; }
        [Width(150)]
        public String Jobtype { get; set; }

        [Width(150)]
        public Decimal Balance { get; set; }
        
        //public String AllowanceDescriptions { get; set; }
        //public decimal Allowance { get; set; }
        //public String Insurance { get; set; }
        //public decimal insurancesQ { get; set; }
    }
}
