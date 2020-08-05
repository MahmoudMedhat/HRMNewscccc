
namespace HRM.Employees.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [LookupScript]
    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[vacancies]")]
    [DisplayName("Vacancies"), InstanceName("Vacancies")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VacanciesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Vacancy"), Column("vacancy"), Size(80), NotNull, QuickSearch]
        public String Vacancy
        {
            get { return Fields.Vacancy[this]; }
            set { Fields.Vacancy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Vacancy; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VacanciesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Vacancy;
        }
    }
}
