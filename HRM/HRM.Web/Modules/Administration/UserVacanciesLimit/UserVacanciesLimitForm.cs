
namespace HRM.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.UserVacanciesLimit")]
    [BasedOnRow(typeof(Entities.UserVacanciesLimitRow), CheckNames = true)]
    public class UserVacanciesLimitForm
    {
        public Int32 VacancyId { get; set; }
       
        public Int32 Limit { get; set; }
      

    }
}