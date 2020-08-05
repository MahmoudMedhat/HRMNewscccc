
namespace HRM.Employees.Entities
{
    using HRM.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Employees"), TableName("[dbo].[Jobs]")]
    [DisplayName("Jobs"), InstanceName("Jobs")]
    [ReadPermission(EmployessPermissionKeys.Jobs)]
    //[ModifyPermission(EmployessPermissionKeys.Jobs)]
    //[UpdatePermission(EmployessPermissionKeys.Users)]

    [LookupScript(Permission = EmployessPermissionKeys.Employees.Modify)]
    public sealed class JobsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Jobtitle"), Size(255), NotNull, QuickSearch]
        public String Jobtitle
        {
            get { return Fields.Jobtitle[this]; }
            set { Fields.Jobtitle[this] = value; }
        }

        [DisplayName("Departement"), Column("DepartementID"), NotNull, ForeignKey("[dbo].[Deparetements]", "ID"), LeftJoin("jDepartement"), TextualField("Departement")]
        public Int32? DepartementId
        {
            get { return Fields.DepartementId[this]; }
            set { Fields.DepartementId[this] = value; }
        }

        [DisplayName("Departement"), Expression("jDepartement.[Departement]")]
        public String Departement
        {
            get { return Fields.Departement[this]; }
            set { Fields.Departement[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Jobtitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public JobsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Jobtitle;
            public Int32Field DepartementId;

            public StringField Departement;
        }
    }
}













