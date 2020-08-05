
using HRM.Administration;
using Serenity.Extensibility;
using System.ComponentModel;

namespace HRM.Employees.Entities
{
    [NestedPermissionKeys]
    [DisplayName("Employees")]

    public class EmployessPermissionKeys : RolePermissionUpdateRequest
    {
        //[Description("User")]
        //public const string Users = "Employees:Users";

        //[Description("Update")]
        //public const string Modify = "Employees:Users:Modify";


        [Description("Jobs")]
        public const string Jobs = "Employees:Jobs";

        public class Employees
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Employees:Users:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Employees:Users:Modify";
            public const string View = "Employees:Users:View";
        }

        [Description("[General]")]
        public const string General = "Employees:General";



    }

}
