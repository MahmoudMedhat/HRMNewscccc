
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.Users")]
    [BasedOnRow(typeof(Entities.UsersRow), CheckNames = true)]
    public class UsersForm
    {
        [Tab("Personnal Information")]
        [Category("Employee Information")]
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        public String EducationalQualification { get; set; }
        public DateTime GraduationYears { get; set; }
        public String MilitaryStatus { get; set; }
        public DateTime Birthdate { get; set; }
        public Int32 Personalidentification { get; set; }

        [Category("Address")]
        public Int32 PersonalPhoneNumber { get; set; }
        public String Address { get; set; }
        [OneWay]
        public string Source { get; set; }
        public String FingerPrintCode { get; set; }


        [Tab("Contracting")]
        [Category("Contract")]
        public DateTime HireDate { get; set; }
        public Int32 MangerID { get; set; }
        public Int32 JobId { get; set; }
        public decimal BaseSalary { get; set; }
        public String AllowanceDescriptions { get; set; }
        public decimal Allowance { get; set; }
        public String Insurance { get; set; }
        public decimal insurancesQ { get; set; }


        //[Tab("Attendance")]
        //[Category("Attendance")]
        public DateTime AttendanceDate { get; set; }
        public DateTime Departuredate { get; set; }

        //public Int16 EmployeeStatus { get; set; }


        //[Tab("Vacancy")]
        //[Category("Vacancy")]
        public Int32 CasualVacancy { get; set; }
        public Int32 Regularvacation { get; set; }
        public Int32 AnnualLeave { get; set; }



        //Salary

        //insuranc
    }
}