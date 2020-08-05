
namespace HRM.Employees.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[VacancyPolicy]")]
    [DisplayName("Vacancy Policy"), InstanceName("Vacancy Policy")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VacancyPolicyRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [LookupEditor(typeof(VacanciesRow)),Required,NotNull]
        [DisplayName("Vacancy"), Column("vacancyId"), ForeignKey("[dbo].[vacancies]", "ID"), LeftJoin("jVacancy"), TextualField("Vacancy")]
        public Int32? VacancyId
        {
            get { return Fields.VacancyId[this]; }
            set { Fields.VacancyId[this] = value; }
        }

        [DisplayName("Accrual"), Required, NotNull]
        public Duration? Duration
        {
            get { return (Duration)Fields.Duration[this]; }
            set { Fields.Duration[this] = (Int16?)value; }
        }


        [DisplayName("Limit"), Required, NotNull]
        public Int16? Limit
        {
            get { return Fields.Limit[this]; }
            set { Fields.Limit[this] = value; }
        }

        [DisplayName("Sending"), Required, NotNull]
        public Sending? Sending
        {
            get { return (Sending)Fields.Sending[this]; }
            set { Fields.Sending[this] = (Int16?)value; }
        }

        [DisplayName("No. of Years :from"), Column("FromYears"), Required, NotNull , DefaultValue(0)]
        public Decimal? FromYears
        {
            get { return Fields.FromYears[this]; }
            set { Fields.FromYears[this] = value; }
        }

        [DisplayName("No. of Years :to"), Column("ToYears"), Required, NotNull, DefaultValue(1)]
        public Decimal? ToYears
        {
            get { return Fields.ToYears[this]; }
            set { Fields.ToYears[this] = value; }
        }

        [DisplayName("Vacancy"), Expression("jVacancy.[vacancy]")]
        public String Vacancy
        {
            get { return Fields.Vacancy[this]; }
            set { Fields.Vacancy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VacancyPolicyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VacancyId;
            public Int16Field Duration;
            public Int16Field Limit;
            public Int16Field Sending;
            public DecimalField FromYears;
            public DecimalField ToYears;

            public StringField Vacancy;
        }
    }
}
