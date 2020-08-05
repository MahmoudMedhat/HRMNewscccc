namespace HRM.Administration.Forms
{
    using HRM.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations.Schema;
    using static MVC.Views.Default;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {
        [Tab("Personnal Information")]
        [Category("Employee Information")]

        [Hidden]
        public Int32 UserId { get; set; }
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String FingerPrintCode { get; set; }
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
        public Int16 Religion { get; set; }

        [Category("Address")]
        public Int32 PersonalPhoneNumber { get; set; }
        public String Address { get; set; }
        [OneWay]
        public string Source { get; set; }
       

        [Tab("Contracting")]
        [Category("Contract")]
        public DateTime HireDate { get; set; }
        public Int32 MangerID { get; set; }
        public Int32 JobID { get; set; }
        public decimal Balance { get; set; }
     
        public Int32 Status { get; set; }

        [Hidden]
        public Int32 IsActive { get; set; }

        [Category("Attendance")]
        [HalfWidth]
        public DateTime AttendanceDate { get; set; }
        [HalfWidth]
        public DateTime Departuredate { get; set; }

        [Category("Vacancy")]
        [UserVanciesLimitEditor]
        public List<Entities.UserVacanciesLimitRow> UserVacanciesLimit { get; set; }


        [Category("Alowances")]
        [AllowancesEditor]
        public List<Entities.AllowancesRow> AlowancesList { get; set; }

      
        [Category("Insurances")]
        [BasicInsuranceEditor]
        public List<Entities.BasicInsurancesRow> InsuranceList { get; set; }

        
        

        //public Int16 EmployeeStatus { get; set; }

        
       


        //Salary

        //insuranc


    }
}