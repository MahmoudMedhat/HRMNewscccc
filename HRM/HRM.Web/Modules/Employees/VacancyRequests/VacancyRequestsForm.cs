
namespace HRM.Employees.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Employees.VacancyRequests")]
    [BasedOnRow(typeof(Entities.VacancyRequestsRow), CheckNames = true)]
    public class VacancyRequestsForm
    {
        [Tab("Details of the vacation request")]
        [Category("Vacation request")]
        [Hidden]
        public Int32 Id { get; set; }
        public Int32 UserId { get; set; }

        //[MediumHalfLargeThirdWidth]
        public Int32 VacancyId { get; set; }
        
       
       
        public DateTime Date { get; set; }
        //[MediumHalfLargeThirdWidth]
        public DateTime DateFrom { get; set; }
        //[MediumHalfLargeThirdWidth]
        public DateTime Dateto { get; set; }

        public Int16 Total { get; set; }
        public String UserComment { get; set; }
        public Int32 StatusId { get; set; }

        public Int16 IsAcceptedbyHr { get; set; }

        [Category("Vacations details")]
        //[HideOnInsert, /*MediumHalfLargeThirdWidth*/]
        //public Int16 LimitNotRelay { get; set; }
    
        //public Int16 LimitRelay { get; set; }
        
        //[HideOnUpdate]
        public Int16 Limit_in_Inser { get; set; }
       
        //public Int16 LimitNotRelaym { get; set; }
       
        public Int16 TotlaLimit_relay { get; set; }

        public Int16 LeaveTaken { get; set; }

      


        //[MediumHalfLargeThirdWidth]
      

       



    }
}