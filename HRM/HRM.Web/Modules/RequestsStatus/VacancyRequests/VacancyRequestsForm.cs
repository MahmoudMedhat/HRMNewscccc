
namespace HRM.RequestsStatus.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("RequestsStatus.VacancyRequests")]
    [BasedOnRow(typeof(Entities.VacancyRequestsRow), CheckNames = true)]
    public class VacancyRequestsForm
    {
        public Int32 UserId { get; set; }
        public Int32 VacancyId { get; set; }
        public Int32 StatusId { get; set; }
        public Int16 IsAcceptedbyHr { get; set; }
        public DateTime Date { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime Dateto { get; set; }
        public String MangerComment { get; set; }
    }
}