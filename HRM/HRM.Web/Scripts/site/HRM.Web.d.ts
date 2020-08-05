/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface AllowancesForm {
        AllowancesDescriptions: Serenity.StringEditor;
        Allowance: Serenity.DecimalEditor;
        AllowanceDate: Serenity.DateEditor;
        UserId: UserEditor;
    }
    class AllowancesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface AllowancesRow {
        Id?: number;
        AllowancesDescriptions?: string;
        Allowance?: number;
        AllowanceDate?: string;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
    }
    namespace AllowancesRow {
        const idProperty = "Id";
        const nameProperty = "AllowancesDescriptions";
        const localTextPrefix = "Administration.Allowances";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            AllowancesDescriptions = "AllowancesDescriptions",
            Allowance = "Allowance",
            AllowanceDate = "AllowanceDate",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId"
        }
    }
}
declare namespace HRM.Administration {
    namespace AllowancesService {
        const baseUrl = "Administration/Allowances";
        function Create(request: Serenity.SaveRequest<AllowancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AllowancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AllowancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AllowancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Allowances/Create",
            Update = "Administration/Allowances/Update",
            Delete = "Administration/Allowances/Delete",
            Retrieve = "Administration/Allowances/Retrieve",
            List = "Administration/Allowances/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface BalanceAccountForm {
        DateBeginn: Serenity.DateEditor;
        DateEnd: Serenity.DateEditor;
    }
    class BalanceAccountForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface BalanceAccountRow {
        Id?: number;
        User_ID?: number;
        BaseSalary?: number;
        GrossSalary?: number;
        NetIncome?: number;
        DateEnd?: string;
        DateBeginn?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
    }
    namespace BalanceAccountRow {
        const idProperty = "Id";
        const localTextPrefix = "Administration.BalanceAccount";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            User_ID = "User_ID",
            BaseSalary = "BaseSalary",
            GrossSalary = "GrossSalary",
            NetIncome = "NetIncome",
            DateEnd = "DateEnd",
            DateBeginn = "DateBeginn",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId"
        }
    }
}
declare namespace HRM.Administration {
    namespace BalanceAccountService {
        const baseUrl = "Administration/BalanceAccount";
        function Create(request: Serenity.SaveRequest<BalanceAccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BalanceAccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BalanceAccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BalanceAccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/BalanceAccount/Create",
            Update = "Administration/BalanceAccount/Update",
            Delete = "Administration/BalanceAccount/Delete",
            Retrieve = "Administration/BalanceAccount/Retrieve",
            List = "Administration/BalanceAccount/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface BasicInsurancesForm {
        Insurance: Serenity.StringEditor;
        InsurancesQ: Serenity.DecimalEditor;
        InsuranceDate: Serenity.DateEditor;
        UserId: FilterUserEditor;
    }
    class BasicInsurancesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface BasicInsurancesRow {
        Id?: number;
        Insurance?: string;
        InsurancesQ?: number;
        InsuranceDate?: string;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
    }
    namespace BasicInsurancesRow {
        const idProperty = "Id";
        const nameProperty = "Insurance";
        const localTextPrefix = "Administration.BasicInsurances";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Insurance = "Insurance",
            InsurancesQ = "InsurancesQ",
            InsuranceDate = "InsuranceDate",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId"
        }
    }
}
declare namespace HRM.Administration {
    namespace BasicInsurancesService {
        const baseUrl = "Administration/BasicInsurances";
        function Create(request: Serenity.SaveRequest<BasicInsurancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BasicInsurancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BasicInsurancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BasicInsurancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/BasicInsurances/Create",
            Update = "Administration/BasicInsurances/Update",
            Delete = "Administration/BasicInsurances/Delete",
            Retrieve = "Administration/BasicInsurances/Retrieve",
            List = "Administration/BasicInsurances/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface EmploeesStatusForm {
        UserId: Serenity.LookupEditor;
        EmpSDate: Serenity.DateEditor;
        EmploymentStatusID: Serenity.LookupEditor;
    }
    class EmploeesStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface EmploeesStatusRow {
        Id?: number;
        UserId?: number;
        EmpSDate?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        Status?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        EmploymentStatusID?: number;
    }
    namespace EmploeesStatusRow {
        const idProperty = "Id";
        const localTextPrefix = "Administration.EmploeesStatus";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            EmpSDate = "EmpSDate",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            Status = "Status",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            EmploymentStatusID = "EmploymentStatusID"
        }
    }
}
declare namespace HRM.Administration {
    namespace EmploeesStatusService {
        const baseUrl = "Administration/EmploeesStatus";
        function Create(request: Serenity.SaveRequest<EmploeesStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmploeesStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmploeesStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmploeesStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/EmploeesStatus/Create",
            Update = "Administration/EmploeesStatus/Update",
            Delete = "Administration/EmploeesStatus/Delete",
            Retrieve = "Administration/EmploeesStatus/Retrieve",
            List = "Administration/EmploeesStatus/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface FinancialyearForm {
        DateFrom: Serenity.DateEditor;
        DateTo: Serenity.DateEditor;
        Status: Serenity.BooleanEditor;
    }
    class FinancialyearForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface FinancialyearRow {
        Id?: number;
        DateFrom?: string;
        DateTo?: string;
        Status?: boolean;
    }
    namespace FinancialyearRow {
        const idProperty = "Id";
        const localTextPrefix = "Administration.Financialyear";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            DateFrom = "DateFrom",
            DateTo = "DateTo",
            Status = "Status"
        }
    }
}
declare namespace HRM.Administration {
    namespace FinancialyearService {
        const baseUrl = "Administration/Financialyear";
        function Create(request: Serenity.SaveRequest<FinancialyearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinancialyearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinancialyearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinancialyearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Financialyear/Create",
            Update = "Administration/Financialyear/Update",
            Delete = "Administration/Financialyear/Delete",
            Retrieve = "Administration/Financialyear/Retrieve",
            List = "Administration/Financialyear/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace HRM.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HRM.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace HRM.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace HRM.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace HRM.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace HRM.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace HRM.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace HRM.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace HRM.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace HRM.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace HRM.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace HRM.Administration {
}
declare namespace HRM.Administration {
    interface UserForm {
        UserId: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        EducationalQualification: Serenity.StringEditor;
        GraduationYears: Serenity.DateEditor;
        MilitaryStatus: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Personalidentification: Serenity.IntegerEditor;
        PersonalPhoneNumber: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        FingerPrintCode: Serenity.IntegerEditor;
        HireDate: Serenity.DateEditor;
        MangerID: FilterUserEditor;
        JobID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Status: Serenity.LookupEditor;
        IsActive: Serenity.IntegerEditor;
        AlowancesList: AllowancesEditor;
        InsuranceList: BasicInsuranceEditor;
        AttendanceDate: Serenity.DateTimeEditor;
        Departuredate: Serenity.DateTimeEditor;
        CasualVacancy: Serenity.IntegerEditor;
        Regularvacation: Serenity.IntegerEditor;
        AnnualLeave: Serenity.IntegerEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HRM.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HRM.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace HRM.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace HRM.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace HRM.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace HRM.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HRM.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace HRM.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace HRM.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        AllowanceDescriptions?: string;
        Allowance?: number;
        insurancesQ?: number;
        Insurance?: string;
        FingerPrintCode?: number;
        HireDate?: string;
        EducationalQualification?: string;
        GraduationYears?: string;
        MilitaryStatus?: string;
        Birthdate?: string;
        Personalidentification?: number;
        PersonalPhoneNumber?: number;
        Address?: string;
        AttendanceDate?: string;
        Departuredate?: string;
        EmployeeStatus?: number;
        CasualVacancy?: number;
        Regularvacation?: number;
        AnnualLeave?: number;
        MangerID?: number;
        JobID?: number;
        Jobtype?: string;
        MangerUsername?: string;
        MangerDisplayName?: string;
        MangerEmail?: string;
        MangerSource?: string;
        MangerPasswordHash?: string;
        MangerPasswordSalt?: string;
        MangerLastDirectoryUpdate?: string;
        MangerUserImage?: string;
        MangerInsertDate?: string;
        MangerInsertUserId?: number;
        MangerUpdateDate?: string;
        MangerUpdateUserId?: number;
        MangerFingerPrintCode?: number;
        MangerHireDate?: string;
        MangerEducationalQualification?: string;
        MangerGraduationYears?: string;
        MangerMilitaryStatus?: string;
        MangerBirthdate?: string;
        MangerPersonalidentification?: number;
        MangerPersonalPhoneNumber?: number;
        MangerAddress?: string;
        MangerAttendanceDate?: string;
        MangerDeparturedate?: string;
        MangerEmployeeStatus?: number;
        MangerCasualVacancy?: number;
        MangerRegularvacation?: number;
        MangerAnnualLeave?: number;
        MangerMangerId?: number;
        AlowancesList?: AllowancesRow[];
        InsuranceList?: BasicInsurancesRow[];
        Status?: UserStatusEnum;
        Balance?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            AllowanceDescriptions = "AllowanceDescriptions",
            Allowance = "Allowance",
            insurancesQ = "insurancesQ",
            Insurance = "Insurance",
            FingerPrintCode = "FingerPrintCode",
            HireDate = "HireDate",
            EducationalQualification = "EducationalQualification",
            GraduationYears = "GraduationYears",
            MilitaryStatus = "MilitaryStatus",
            Birthdate = "Birthdate",
            Personalidentification = "Personalidentification",
            PersonalPhoneNumber = "PersonalPhoneNumber",
            Address = "Address",
            AttendanceDate = "AttendanceDate",
            Departuredate = "Departuredate",
            EmployeeStatus = "EmployeeStatus",
            CasualVacancy = "CasualVacancy",
            Regularvacation = "Regularvacation",
            AnnualLeave = "AnnualLeave",
            MangerID = "MangerID",
            JobID = "JobID",
            Jobtype = "Jobtype",
            MangerUsername = "MangerUsername",
            MangerDisplayName = "MangerDisplayName",
            MangerEmail = "MangerEmail",
            MangerSource = "MangerSource",
            MangerPasswordHash = "MangerPasswordHash",
            MangerPasswordSalt = "MangerPasswordSalt",
            MangerLastDirectoryUpdate = "MangerLastDirectoryUpdate",
            MangerUserImage = "MangerUserImage",
            MangerInsertDate = "MangerInsertDate",
            MangerInsertUserId = "MangerInsertUserId",
            MangerUpdateDate = "MangerUpdateDate",
            MangerUpdateUserId = "MangerUpdateUserId",
            MangerFingerPrintCode = "MangerFingerPrintCode",
            MangerHireDate = "MangerHireDate",
            MangerEducationalQualification = "MangerEducationalQualification",
            MangerGraduationYears = "MangerGraduationYears",
            MangerMilitaryStatus = "MangerMilitaryStatus",
            MangerBirthdate = "MangerBirthdate",
            MangerPersonalidentification = "MangerPersonalidentification",
            MangerPersonalPhoneNumber = "MangerPersonalPhoneNumber",
            MangerAddress = "MangerAddress",
            MangerAttendanceDate = "MangerAttendanceDate",
            MangerDeparturedate = "MangerDeparturedate",
            MangerEmployeeStatus = "MangerEmployeeStatus",
            MangerCasualVacancy = "MangerCasualVacancy",
            MangerRegularvacation = "MangerRegularvacation",
            MangerAnnualLeave = "MangerAnnualLeave",
            MangerMangerId = "MangerMangerId",
            AlowancesList = "AlowancesList",
            InsuranceList = "InsuranceList",
            Status = "Status",
            Balance = "Balance",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace HRM.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve"
        }
    }
}
declare namespace HRM.Administration {
    enum UserStatusEnum {
        Employee = 1,
        Resignation = 2,
        Died = 3
    }
}
declare namespace HRM.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace HRM.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace HRM.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace HRM.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace HRM.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace HRM.Default {
}
declare namespace HRM.Default {
    interface EmploymentStatusForm {
        Status: Serenity.StringEditor;
    }
    class EmploymentStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Default {
    interface EmploymentStatusRow {
        Id?: number;
        Status?: string;
    }
    namespace EmploymentStatusRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "Default.EmploymentStatus";
        const lookupKey = "Default.EmploymentStatus";
        function getLookup(): Q.Lookup<EmploymentStatusRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Status = "Status"
        }
    }
}
declare namespace HRM.Default {
    namespace EmploymentStatusService {
        const baseUrl = "Default/EmploymentStatus";
        function Create(request: Serenity.SaveRequest<EmploymentStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmploymentStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmploymentStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmploymentStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/EmploymentStatus/Create",
            Update = "Default/EmploymentStatus/Update",
            Delete = "Default/EmploymentStatus/Delete",
            Retrieve = "Default/EmploymentStatus/Retrieve",
            List = "Default/EmploymentStatus/List"
        }
    }
}
declare namespace HRM.Employees {
    enum AcceptedHREnum {
        pending = 0,
        Approved = 1,
        refused = 2
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface DeparetementsForm {
        Departement: Serenity.StringEditor;
    }
    class DeparetementsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface DeparetementsRow {
        Id?: number;
        Departement?: string;
    }
    namespace DeparetementsRow {
        const idProperty = "Id";
        const nameProperty = "Departement";
        const localTextPrefix = "Employees.Deparetements";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Departement = "Departement"
        }
    }
}
declare namespace HRM.Employees {
    namespace DeparetementsService {
        const baseUrl = "Employees/Deparetements";
        function Create(request: Serenity.SaveRequest<DeparetementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DeparetementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeparetementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeparetementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/Deparetements/Create",
            Update = "Employees/Deparetements/Update",
            Delete = "Employees/Deparetements/Delete",
            Retrieve = "Employees/Deparetements/Retrieve",
            List = "Employees/Deparetements/List"
        }
    }
}
declare namespace HRM.Employees {
    enum Duration {
        Monthly = 0,
        yearly = 1
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface JobsForm {
        Jobtitle: Serenity.StringEditor;
        DepartementId: Serenity.IntegerEditor;
    }
    class JobsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface JobsRow {
        Id?: number;
        Jobtitle?: string;
        DepartementId?: number;
        Departement?: string;
    }
    namespace JobsRow {
        const idProperty = "Id";
        const nameProperty = "Jobtitle";
        const localTextPrefix = "Employees.Jobs";
        const lookupKey = "Employees.Jobs";
        function getLookup(): Q.Lookup<JobsRow>;
        const deletePermission = "Employees:Jobs";
        const insertPermission = "Employees:Jobs";
        const readPermission = "Employees:Jobs";
        const updatePermission = "Employees:Jobs";
        const enum Fields {
            Id = "Id",
            Jobtitle = "Jobtitle",
            DepartementId = "DepartementId",
            Departement = "Departement"
        }
    }
}
declare namespace HRM.Employees {
    namespace JobsService {
        const baseUrl = "Employees/Jobs";
        function Create(request: Serenity.SaveRequest<JobsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JobsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/Jobs/Create",
            Update = "Employees/Jobs/Update",
            Delete = "Employees/Jobs/Delete",
            Retrieve = "Employees/Jobs/Retrieve",
            List = "Employees/Jobs/List"
        }
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface PermissionRequestsForm {
        UserId: Serenity.IntegerEditor;
        PermissionId: Serenity.LookupEditor;
        StatusId: Serenity.IntegerEditor;
        IsAcceptedbyHr: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateTimeEditor;
        Dateto: Serenity.DateTimeEditor;
    }
    class PermissionRequestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface PermissionRequestsRow {
        Id?: number;
        UserId?: number;
        PermissionId?: number;
        StatusId?: number;
        IsAcceptedbyHr?: number;
        Date?: string;
        DateFrom?: string;
        Dateto?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        PermissionPermissiontype?: string;
        StatusStatusName?: string;
    }
    namespace PermissionRequestsRow {
        const idProperty = "Id";
        const localTextPrefix = "Employees.PermissionRequests";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            PermissionId = "PermissionId",
            StatusId = "StatusId",
            IsAcceptedbyHr = "IsAcceptedbyHr",
            Date = "Date",
            DateFrom = "DateFrom",
            Dateto = "Dateto",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            PermissionPermissiontype = "PermissionPermissiontype",
            StatusStatusName = "StatusStatusName"
        }
    }
}
declare namespace HRM.Employees {
    namespace PermissionRequestsService {
        const baseUrl = "Employees/PermissionRequests";
        function Create(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/PermissionRequests/Create",
            Update = "Employees/PermissionRequests/Update",
            Delete = "Employees/PermissionRequests/Delete",
            Retrieve = "Employees/PermissionRequests/Retrieve",
            List = "Employees/PermissionRequests/List"
        }
    }
}
declare namespace HRM.Employees {
    enum Sending {
        Norelay = 0,
        relay = 1
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface StatusForm {
        StatusName: Serenity.StringEditor;
    }
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface StatusRow {
        Id?: number;
        StatusName?: string;
    }
    namespace StatusRow {
        const idProperty = "Id";
        const nameProperty = "StatusName";
        const localTextPrefix = "Employees.Status";
        const lookupKey = "Employees.Status";
        function getLookup(): Q.Lookup<StatusRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            StatusName = "StatusName"
        }
    }
}
declare namespace HRM.Employees {
    namespace StatusService {
        const baseUrl = "Employees/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/Status/Create",
            Update = "Employees/Status/Update",
            Delete = "Employees/Status/Delete",
            Retrieve = "Employees/Status/Retrieve",
            List = "Employees/Status/List"
        }
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface UsersForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        EducationalQualification: Serenity.StringEditor;
        GraduationYears: Serenity.DateEditor;
        MilitaryStatus: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Personalidentification: Serenity.IntegerEditor;
        PersonalPhoneNumber: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        FingerPrintCode: Serenity.IntegerEditor;
        HireDate: Serenity.DateEditor;
        MangerID: Serenity.LookupEditor;
        JobId: Serenity.LookupEditor;
        BaseSalary: Serenity.DecimalEditor;
        AllowanceDescriptions: Serenity.StringEditor;
        Allowance: Serenity.DecimalEditor;
        Insurance: Serenity.StringEditor;
        insurancesQ: Serenity.DecimalEditor;
        AttendanceDate: Serenity.DateEditor;
        Departuredate: Serenity.DateEditor;
        CasualVacancy: Serenity.IntegerEditor;
        Regularvacation: Serenity.IntegerEditor;
        AnnualLeave: Serenity.IntegerEditor;
    }
    class UsersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface UsersRow {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        Email?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        LastDirectoryUpdate?: string;
        UserImage?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        FingerPrintCode?: number;
        HireDate?: string;
        EducationalQualification?: string;
        GraduationYears?: string;
        MilitaryStatus?: string;
        Birthdate?: string;
        Personalidentification?: number;
        PersonalPhoneNumber?: number;
        Address?: string;
        AttendanceDate?: string;
        Departuredate?: string;
        EmployeeStatus?: number;
        CasualVacancy?: number;
        Regularvacation?: number;
        AnnualLeave?: number;
        MangerID?: number;
        JobId?: number;
        MangerUsername?: string;
        MangerDisplayName?: string;
        MangerEmail?: string;
        MangerSource?: string;
        MangerPasswordHash?: string;
        MangerPasswordSalt?: string;
        MangerLastDirectoryUpdate?: string;
        MangerUserImage?: string;
        MangerInsertDate?: string;
        MangerInsertUserId?: number;
        MangerUpdateDate?: string;
        MangerUpdateUserId?: number;
        MangerIsActive?: number;
        MangerFingerPrintCode?: number;
        MangerManagerId?: number;
        MangerHireDate?: string;
        MangerEducationalQualification?: string;
        MangerGraduationYears?: string;
        MangerMilitaryStatus?: string;
        MangerBirthdate?: string;
        MangerPersonalidentification?: number;
        MangerPersonalPhoneNumber?: number;
        MangerAddress?: string;
        MangerAttendanceDate?: string;
        MangerDeparturedate?: string;
        MangerEmployeeStatus?: number;
        MangerCasualVacancy?: number;
        MangerRegularvacation?: number;
        MangerAnnualLeave?: number;
        MangerMangerId?: number;
        MangerJobId?: number;
        Password?: string;
        PasswordConfirm?: string;
        BaseSalary?: number;
        AllowanceDescriptions?: string;
        Allowance?: number;
        insurancesQ?: number;
        Insurance?: string;
        JobJobtitle?: string;
        JobDepartementId?: number;
    }
    namespace UsersRow {
        const idProperty = "UserId";
        const nameProperty = "Username";
        const localTextPrefix = "Employees.Users";
        const lookupKey = "Users";
        function getLookup(): Q.Lookup<UsersRow>;
        const deletePermission = "Employees:Users:Modify";
        const insertPermission = "Employees:Users:Modify";
        const readPermission = "Employees:Users:Modify";
        const updatePermission = "Employees:Users:Modify";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            DisplayName = "DisplayName",
            Email = "Email",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            UserImage = "UserImage",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            IsActive = "IsActive",
            FingerPrintCode = "FingerPrintCode",
            HireDate = "HireDate",
            EducationalQualification = "EducationalQualification",
            GraduationYears = "GraduationYears",
            MilitaryStatus = "MilitaryStatus",
            Birthdate = "Birthdate",
            Personalidentification = "Personalidentification",
            PersonalPhoneNumber = "PersonalPhoneNumber",
            Address = "Address",
            AttendanceDate = "AttendanceDate",
            Departuredate = "Departuredate",
            EmployeeStatus = "EmployeeStatus",
            CasualVacancy = "CasualVacancy",
            Regularvacation = "Regularvacation",
            AnnualLeave = "AnnualLeave",
            MangerID = "MangerID",
            JobId = "JobId",
            MangerUsername = "MangerUsername",
            MangerDisplayName = "MangerDisplayName",
            MangerEmail = "MangerEmail",
            MangerSource = "MangerSource",
            MangerPasswordHash = "MangerPasswordHash",
            MangerPasswordSalt = "MangerPasswordSalt",
            MangerLastDirectoryUpdate = "MangerLastDirectoryUpdate",
            MangerUserImage = "MangerUserImage",
            MangerInsertDate = "MangerInsertDate",
            MangerInsertUserId = "MangerInsertUserId",
            MangerUpdateDate = "MangerUpdateDate",
            MangerUpdateUserId = "MangerUpdateUserId",
            MangerIsActive = "MangerIsActive",
            MangerFingerPrintCode = "MangerFingerPrintCode",
            MangerManagerId = "MangerManagerId",
            MangerHireDate = "MangerHireDate",
            MangerEducationalQualification = "MangerEducationalQualification",
            MangerGraduationYears = "MangerGraduationYears",
            MangerMilitaryStatus = "MangerMilitaryStatus",
            MangerBirthdate = "MangerBirthdate",
            MangerPersonalidentification = "MangerPersonalidentification",
            MangerPersonalPhoneNumber = "MangerPersonalPhoneNumber",
            MangerAddress = "MangerAddress",
            MangerAttendanceDate = "MangerAttendanceDate",
            MangerDeparturedate = "MangerDeparturedate",
            MangerEmployeeStatus = "MangerEmployeeStatus",
            MangerCasualVacancy = "MangerCasualVacancy",
            MangerRegularvacation = "MangerRegularvacation",
            MangerAnnualLeave = "MangerAnnualLeave",
            MangerMangerId = "MangerMangerId",
            MangerJobId = "MangerJobId",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            BaseSalary = "BaseSalary",
            AllowanceDescriptions = "AllowanceDescriptions",
            Allowance = "Allowance",
            insurancesQ = "insurancesQ",
            Insurance = "Insurance",
            JobJobtitle = "JobJobtitle",
            JobDepartementId = "JobDepartementId"
        }
    }
}
declare namespace HRM.Employees {
    namespace UsersService {
        const baseUrl = "Employees/Users";
        function Create(request: Serenity.SaveRequest<UsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/Users/Create",
            Update = "Employees/Users/Update",
            Delete = "Employees/Users/Delete",
            Retrieve = "Employees/Users/Retrieve",
            List = "Employees/Users/List"
        }
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface VacanciesForm {
        Vacancy: Serenity.StringEditor;
    }
    class VacanciesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface VacanciesRow {
        Id?: number;
        Vacancy?: string;
    }
    namespace VacanciesRow {
        const idProperty = "Id";
        const nameProperty = "Vacancy";
        const localTextPrefix = "Employees.Vacancies";
        const lookupKey = "Employees.Vacancies";
        function getLookup(): Q.Lookup<VacanciesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Vacancy = "Vacancy"
        }
    }
}
declare namespace HRM.Employees {
    namespace VacanciesService {
        const baseUrl = "Employees/Vacancies";
        function Create(request: Serenity.SaveRequest<VacanciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacanciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacanciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacanciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/Vacancies/Create",
            Update = "Employees/Vacancies/Update",
            Delete = "Employees/Vacancies/Delete",
            Retrieve = "Employees/Vacancies/Retrieve",
            List = "Employees/Vacancies/List"
        }
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface VacancyPolicyForm {
        VacancyId: Serenity.LookupEditor;
        Duration: Serenity.EnumEditor;
        Limit: Serenity.IntegerEditor;
        Sending: Serenity.EnumEditor;
        FromYears: Serenity.DecimalEditor;
        ToYears: Serenity.DecimalEditor;
    }
    class VacancyPolicyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface VacancyPolicyRow {
        Id?: number;
        VacancyId?: number;
        Duration?: Duration;
        Limit?: number;
        Sending?: Sending;
        FromYears?: number;
        ToYears?: number;
        Vacancy?: string;
    }
    namespace VacancyPolicyRow {
        const idProperty = "Id";
        const localTextPrefix = "Employees.VacancyPolicy";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VacancyId = "VacancyId",
            Duration = "Duration",
            Limit = "Limit",
            Sending = "Sending",
            FromYears = "FromYears",
            ToYears = "ToYears",
            Vacancy = "Vacancy"
        }
    }
}
declare namespace HRM.Employees {
    namespace VacancyPolicyService {
        const baseUrl = "Employees/VacancyPolicy";
        function Create(request: Serenity.SaveRequest<VacancyPolicyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyPolicyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyPolicyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyPolicyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/VacancyPolicy/Create",
            Update = "Employees/VacancyPolicy/Update",
            Delete = "Employees/VacancyPolicy/Delete",
            Retrieve = "Employees/VacancyPolicy/Retrieve",
            List = "Employees/VacancyPolicy/List"
        }
    }
}
declare namespace HRM.Employees {
}
declare namespace HRM.Employees {
    interface VacancyRequestsForm {
        UserId: Serenity.IntegerEditor;
        VacancyId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateEditor;
        Dateto: Serenity.DateEditor;
        Total: Serenity.IntegerEditor;
        LimitNotRelay: Serenity.IntegerEditor;
        LimitRelay: Serenity.IntegerEditor;
        LimitNotRelaym: Serenity.IntegerEditor;
    }
    class VacancyRequestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Employees {
    interface VacancyRequestsRow {
        Id?: number;
        UserId?: number;
        LimitNotRelay?: number;
        LimitRelay?: number;
        LimitNotRelaym?: number;
        VacancyId?: number;
        StatusId?: number;
        IsAcceptedbyHr?: AcceptedHREnum;
        Date?: string;
        DateFrom?: string;
        Dateto?: string;
        Total?: number;
        Balance?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        Vacancy?: string;
        StatusStatusName?: string;
    }
    namespace VacancyRequestsRow {
        const idProperty = "Id";
        const localTextPrefix = "Employees.VacancyRequests";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            LimitNotRelay = "LimitNotRelay",
            LimitRelay = "LimitRelay",
            LimitNotRelaym = "LimitNotRelaym",
            VacancyId = "VacancyId",
            StatusId = "StatusId",
            IsAcceptedbyHr = "IsAcceptedbyHr",
            Date = "Date",
            DateFrom = "DateFrom",
            Dateto = "Dateto",
            Total = "Total",
            Balance = "Balance",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            Vacancy = "Vacancy",
            StatusStatusName = "StatusStatusName"
        }
    }
}
declare namespace HRM.Employees {
    namespace VacancyRequestsService {
        const baseUrl = "Employees/VacancyRequests";
        function Create(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Employees/VacancyRequests/Create",
            Update = "Employees/VacancyRequests/Update",
            Delete = "Employees/VacancyRequests/Delete",
            Retrieve = "Employees/VacancyRequests/Retrieve",
            List = "Employees/VacancyRequests/List"
        }
    }
}
declare namespace HRM {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace HRM {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace HRM {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace HRM {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace HRM.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HRM.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace HRM.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace HRM.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HRM.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace HRM.Modules.RequestsStatus.EmpLoans {
    enum IsAcceptedEnum {
        NotAccepted = 0,
        Accepted = 1,
        Pending = 2
    }
}
declare namespace HRM.RequestsStatus {
}
declare namespace HRM.RequestsStatus {
    interface EmpLoansForm {
        Loan: Serenity.DecimalEditor;
        UserId: Serenity.IntegerEditor;
        Id: Serenity.IntegerEditor;
        IsAccepted: Serenity.EnumEditor;
        InstallmentsList: InstallmentsRequestEditor;
    }
    class EmpLoansForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.RequestsStatus {
    interface EmpLoansRow {
        Id?: number;
        UserId?: number;
        Loan?: number;
        AdvancReason?: string;
        Date?: string;
        IsAccepted?: Modules.RequestsStatus.EmpLoans.IsAcceptedEnum;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        UserBalances?: number;
        InstallmentValues?: number;
        InstallmentsList?: InstallmentsRow[];
    }
    namespace EmpLoansRow {
        const idProperty = "Id";
        const nameProperty = "AdvancReason";
        const localTextPrefix = "RequestsStatus.EmpLoans";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            Loan = "Loan",
            AdvancReason = "AdvancReason",
            Date = "Date",
            IsAccepted = "IsAccepted",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            UserBalances = "UserBalances",
            InstallmentValues = "InstallmentValues",
            InstallmentsList = "InstallmentsList"
        }
    }
}
declare namespace HRM.RequestsStatus {
    namespace EmpLoansService {
        const baseUrl = "RequestsStatus/EmpLoans";
        function Create(request: Serenity.SaveRequest<EmpLoansRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpLoansRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpLoansRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpLoansRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "RequestsStatus/EmpLoans/Create",
            Update = "RequestsStatus/EmpLoans/Update",
            Delete = "RequestsStatus/EmpLoans/Delete",
            Retrieve = "RequestsStatus/EmpLoans/Retrieve",
            List = "RequestsStatus/EmpLoans/List"
        }
    }
}
declare namespace HRM.RequestsStatus {
}
declare namespace HRM.RequestsStatus {
    interface InstallmentsForm {
    }
    class InstallmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
}
declare namespace HRM.RequestsStatus {
    interface InstallmentsRow {
        Id?: number;
        UserId?: number;
        Loanid?: number;
        InstallmentValues?: number;
        InstallmentDate?: string;
        DateEmpLoan?: string;
        IsAccepted?: Modules.RequestsStatus.EmpLoans.IsAcceptedEnum;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        UserBalances?: number;
        LoanidUserId?: number;
        LoanidLoan?: number;
        LoanidAdvancReason?: string;
        LoanidDate?: string;
        LoanidIsAccepted?: number;
    }
    namespace InstallmentsRow {
        const idProperty = "Id";
        const localTextPrefix = "RequestsStatus.Installments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            Loanid = "Loanid",
            InstallmentValues = "InstallmentValues",
            InstallmentDate = "InstallmentDate",
            DateEmpLoan = "DateEmpLoan",
            IsAccepted = "IsAccepted",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            UserBalances = "UserBalances",
            LoanidUserId = "LoanidUserId",
            LoanidLoan = "LoanidLoan",
            LoanidAdvancReason = "LoanidAdvancReason",
            LoanidDate = "LoanidDate",
            LoanidIsAccepted = "LoanidIsAccepted"
        }
    }
}
declare namespace HRM.RequestsStatus {
    namespace InstallmentsService {
        const baseUrl = "RequestsStatus/Installments";
        function Create(request: Serenity.SaveRequest<InstallmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstallmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstallmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstallmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "RequestsStatus/Installments/Create",
            Update = "RequestsStatus/Installments/Update",
            Delete = "RequestsStatus/Installments/Delete",
            Retrieve = "RequestsStatus/Installments/Retrieve",
            List = "RequestsStatus/Installments/List"
        }
    }
}
declare namespace HRM.RequestsStatus {
}
declare namespace HRM.RequestsStatus {
    interface PermissionRequestsForm {
        UserId: Serenity.IntegerEditor;
        PermissionId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateTimeEditor;
        Dateto: Serenity.DateTimeEditor;
    }
    class PermissionRequestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.RequestsStatus {
    interface PermissionRequestsRow {
        Id?: number;
        UserId?: number;
        PermissionId?: number;
        StatusId?: number;
        IsAcceptedbyHr?: number;
        Date?: string;
        DateFrom?: string;
        Dateto?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        PermissionPermissiontype?: string;
        StatusStatusName?: string;
    }
    namespace PermissionRequestsRow {
        const idProperty = "Id";
        const localTextPrefix = "RequestsStatus.PermissionRequests";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            PermissionId = "PermissionId",
            StatusId = "StatusId",
            IsAcceptedbyHr = "IsAcceptedbyHr",
            Date = "Date",
            DateFrom = "DateFrom",
            Dateto = "Dateto",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            PermissionPermissiontype = "PermissionPermissiontype",
            StatusStatusName = "StatusStatusName"
        }
    }
}
declare namespace HRM.RequestsStatus {
    namespace PermissionRequestsService {
        const baseUrl = "RequestsStatus/PermissionRequests";
        function Create(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "RequestsStatus/PermissionRequests/Create",
            Update = "RequestsStatus/PermissionRequests/Update",
            Delete = "RequestsStatus/PermissionRequests/Delete",
            Retrieve = "RequestsStatus/PermissionRequests/Retrieve",
            List = "RequestsStatus/PermissionRequests/List"
        }
    }
}
declare namespace HRM.RequestsStatus {
}
declare namespace HRM.RequestsStatus {
    interface PermissionStatusForm {
        Permissiontype: Serenity.StringEditor;
    }
    class PermissionStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.RequestsStatus {
    interface PermissionStatusRow {
        Id?: number;
        Permissiontype?: string;
    }
    namespace PermissionStatusRow {
        const idProperty = "Id";
        const nameProperty = "Permissiontype";
        const localTextPrefix = "RequestsStatus.PermissionStatus";
        const lookupKey = "RequestsStatus.PermissionStatus";
        function getLookup(): Q.Lookup<PermissionStatusRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Permissiontype = "Permissiontype"
        }
    }
}
declare namespace HRM.RequestsStatus {
    namespace PermissionStatusService {
        const baseUrl = "RequestsStatus/PermissionStatus";
        function Create(request: Serenity.SaveRequest<PermissionStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PermissionStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PermissionStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PermissionStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "RequestsStatus/PermissionStatus/Create",
            Update = "RequestsStatus/PermissionStatus/Update",
            Delete = "RequestsStatus/PermissionStatus/Delete",
            Retrieve = "RequestsStatus/PermissionStatus/Retrieve",
            List = "RequestsStatus/PermissionStatus/List"
        }
    }
}
declare namespace HRM.RequestsStatus {
}
declare namespace HRM.RequestsStatus {
    interface VacancyRequestsForm {
        UserId: Serenity.IntegerEditor;
        VacancyId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateEditor;
        Dateto: Serenity.DateEditor;
    }
    class VacancyRequestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.RequestsStatus {
    interface VacancyRequestsRow {
        Id?: number;
        UserId?: number;
        VacancyId?: number;
        StatusId?: number;
        IsAcceptedbyHr?: number;
        Date?: string;
        DateFrom?: string;
        Dateto?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserManagerId?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        Vacancy?: string;
        StatusStatusName?: string;
    }
    namespace VacancyRequestsRow {
        const idProperty = "Id";
        const localTextPrefix = "RequestsStatus.VacancyRequests";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            VacancyId = "VacancyId",
            StatusId = "StatusId",
            IsAcceptedbyHr = "IsAcceptedbyHr",
            Date = "Date",
            DateFrom = "DateFrom",
            Dateto = "Dateto",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserManagerId = "UserManagerId",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            Vacancy = "Vacancy",
            StatusStatusName = "StatusStatusName"
        }
    }
}
declare namespace HRM.RequestsStatus {
    namespace VacancyRequestsService {
        const baseUrl = "RequestsStatus/VacancyRequests";
        function Create(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "RequestsStatus/VacancyRequests/Create",
            Update = "RequestsStatus/VacancyRequests/Update",
            Delete = "RequestsStatus/VacancyRequests/Delete",
            Retrieve = "RequestsStatus/VacancyRequests/Retrieve",
            List = "RequestsStatus/VacancyRequests/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface DeductionsForm {
        DeductionsReason: Serenity.StringEditor;
        Deduction: Serenity.DecimalEditor;
        DeductionsDate: Serenity.DateEditor;
        UserIdList: Administration.FilterUserEditor;
        UserId: Administration.FilterUserEditor;
    }
    class DeductionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface DeductionsRow {
        Id?: number;
        DeductionsReason?: string;
        Deduction?: number;
        DeductionsDate?: string;
        UserIdList?: number[];
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
    }
    namespace DeductionsRow {
        const idProperty = "Id";
        const nameProperty = "DeductionsReason";
        const localTextPrefix = "SalaryDetails.Deductions";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            DeductionsReason = "DeductionsReason",
            Deduction = "Deduction",
            DeductionsDate = "DeductionsDate",
            UserIdList = "UserIdList",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace DeductionsService {
        const baseUrl = "SalaryDetails/Deductions";
        function Create(request: Serenity.SaveRequest<DeductionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DeductionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeductionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeductionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/Deductions/Create",
            Update = "SalaryDetails/Deductions/Update",
            Delete = "SalaryDetails/Deductions/Delete",
            Retrieve = "SalaryDetails/Deductions/Retrieve",
            List = "SalaryDetails/Deductions/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface EmpLoansForm {
        UserId: Administration.FilterUserEditor;
        Loan: Serenity.DecimalEditor;
        AdvancReason: Serenity.StringEditor;
        InstallmentsList: InstallmentsEditors;
    }
    class EmpLoansForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface EmpLoansRow {
        Id?: number;
        UserId?: number;
        Loan?: number;
        AdvancReason?: string;
        Date?: string;
        IsAccepted?: Modules.RequestsStatus.EmpLoans.IsAcceptedEnum;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        InstallmentsList?: InstallmentsRow[];
    }
    namespace EmpLoansRow {
        const idProperty = "Id";
        const nameProperty = "AdvancReason";
        const localTextPrefix = "SalaryDetails.EmpLoans";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            Loan = "Loan",
            AdvancReason = "AdvancReason",
            Date = "Date",
            IsAccepted = "IsAccepted",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            InstallmentsList = "InstallmentsList"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace EmpLoansService {
        const baseUrl = "SalaryDetails/EmpLoans";
        function Create(request: Serenity.SaveRequest<EmpLoansRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpLoansRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpLoansRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpLoansRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/EmpLoans/Create",
            Update = "SalaryDetails/EmpLoans/Update",
            Delete = "SalaryDetails/EmpLoans/Delete",
            Retrieve = "SalaryDetails/EmpLoans/Retrieve",
            List = "SalaryDetails/EmpLoans/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface EntitlementsForm {
        UserId: Administration.FilterUserEditor;
        UserIdList: Administration.FilterUserEditor;
        Entitlement: Serenity.DecimalEditor;
        EntitlementsDate: Serenity.DateEditor;
        EntitlementReason: Serenity.StringEditor;
    }
    class EntitlementsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface EntitlementsRow {
        Id?: number;
        UserId?: number;
        UserIdList?: number[];
        Entitlement?: number;
        EntitlementsDate?: string;
        EntitlementReason?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
    }
    namespace EntitlementsRow {
        const idProperty = "Id";
        const nameProperty = "EntitlementReason";
        const localTextPrefix = "SalaryDetails.Entitlements";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            UserIdList = "UserIdList",
            Entitlement = "Entitlement",
            EntitlementsDate = "EntitlementsDate",
            EntitlementReason = "EntitlementReason",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace EntitlementsService {
        const baseUrl = "SalaryDetails/Entitlements";
        function Create(request: Serenity.SaveRequest<EntitlementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EntitlementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EntitlementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EntitlementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/Entitlements/Create",
            Update = "SalaryDetails/Entitlements/Update",
            Delete = "SalaryDetails/Entitlements/Delete",
            Retrieve = "SalaryDetails/Entitlements/Retrieve",
            List = "SalaryDetails/Entitlements/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface InstallmentsForm {
        UserId: Serenity.IntegerEditor;
        Loanid: Serenity.IntegerEditor;
        InstallmentValues: Serenity.DecimalEditor;
        InstallmentDate: Serenity.DateEditor;
    }
    class InstallmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface InstallmentsRow {
        Id?: number;
        UserId?: number;
        Loanid?: number;
        InstallmentValues?: number;
        InstallmentDate?: string;
        DateEmpLoan?: string;
        IsAccepted?: Modules.RequestsStatus.EmpLoans.IsAcceptedEnum;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        LoanidUserId?: number;
        LoanidLoan?: number;
        LoanidAdvancReason?: string;
        LoanidDate?: string;
        LoanidIsAccepted?: number;
    }
    namespace InstallmentsRow {
        const idProperty = "Id";
        const localTextPrefix = "SalaryDetails.Installments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            Loanid = "Loanid",
            InstallmentValues = "InstallmentValues",
            InstallmentDate = "InstallmentDate",
            DateEmpLoan = "DateEmpLoan",
            IsAccepted = "IsAccepted",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            LoanidUserId = "LoanidUserId",
            LoanidLoan = "LoanidLoan",
            LoanidAdvancReason = "LoanidAdvancReason",
            LoanidDate = "LoanidDate",
            LoanidIsAccepted = "LoanidIsAccepted"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace InstallmentsService {
        const baseUrl = "SalaryDetails/Installments";
        function Create(request: Serenity.SaveRequest<InstallmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstallmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstallmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstallmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/Installments/Create",
            Update = "SalaryDetails/Installments/Update",
            Delete = "SalaryDetails/Installments/Delete",
            Retrieve = "SalaryDetails/Installments/Retrieve",
            List = "SalaryDetails/Installments/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface PremiumsForm {
        UserIdList: Administration.FilterUserEditor;
        UserId: Administration.FilterUserEditor;
        PremiumQuantity: Serenity.DecimalEditor;
        PremiumDate: Serenity.DateEditor;
        premiumType: Serenity.LookupEditor;
    }
    class PremiumsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface PremiumsRow {
        Id?: number;
        UserId?: number;
        PremiumQuantity?: number;
        PremiumDate?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserFingerPrintCode?: number;
        UserHireDate?: string;
        UserEducationalQualification?: string;
        UserGraduationYears?: string;
        UserMilitaryStatus?: string;
        UserBirthdate?: string;
        UserPersonalidentification?: number;
        UserPersonalPhoneNumber?: number;
        UserAddress?: string;
        UserAttendanceDate?: string;
        UserDeparturedate?: string;
        UserEmployeeStatus?: number;
        UserCasualVacancy?: number;
        UserRegularvacation?: number;
        UserAnnualLeave?: number;
        UserMangerId?: number;
        UserJobId?: number;
        premiumType?: number;
        Pname?: string;
        UserIdList?: number[];
    }
    namespace PremiumsRow {
        const idProperty = "Id";
        const localTextPrefix = "SalaryDetails.Premiums";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            PremiumQuantity = "PremiumQuantity",
            PremiumDate = "PremiumDate",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserFingerPrintCode = "UserFingerPrintCode",
            UserHireDate = "UserHireDate",
            UserEducationalQualification = "UserEducationalQualification",
            UserGraduationYears = "UserGraduationYears",
            UserMilitaryStatus = "UserMilitaryStatus",
            UserBirthdate = "UserBirthdate",
            UserPersonalidentification = "UserPersonalidentification",
            UserPersonalPhoneNumber = "UserPersonalPhoneNumber",
            UserAddress = "UserAddress",
            UserAttendanceDate = "UserAttendanceDate",
            UserDeparturedate = "UserDeparturedate",
            UserEmployeeStatus = "UserEmployeeStatus",
            UserCasualVacancy = "UserCasualVacancy",
            UserRegularvacation = "UserRegularvacation",
            UserAnnualLeave = "UserAnnualLeave",
            UserMangerId = "UserMangerId",
            UserJobId = "UserJobId",
            premiumType = "premiumType",
            Pname = "Pname",
            UserIdList = "UserIdList"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace PremiumsService {
        const baseUrl = "SalaryDetails/Premiums";
        function Create(request: Serenity.SaveRequest<PremiumsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PremiumsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PremiumsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PremiumsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/Premiums/Create",
            Update = "SalaryDetails/Premiums/Update",
            Delete = "SalaryDetails/Premiums/Delete",
            Retrieve = "SalaryDetails/Premiums/Retrieve",
            List = "SalaryDetails/Premiums/List"
        }
    }
}
declare namespace HRM.SalaryDetails {
}
declare namespace HRM.SalaryDetails {
    interface PremiumstypeForm {
        Premium: Serenity.StringEditor;
    }
    class PremiumstypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HRM.SalaryDetails {
    interface PremiumstypeRow {
        Id?: number;
        Premium?: string;
    }
    namespace PremiumstypeRow {
        const idProperty = "Id";
        const nameProperty = "Premium";
        const localTextPrefix = "SalaryDetails.Premiumstype";
        const lookupKey = "SalaryDetails.Premiumstype";
        function getLookup(): Q.Lookup<PremiumstypeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Premium = "Premium"
        }
    }
}
declare namespace HRM.SalaryDetails {
    namespace PremiumstypeService {
        const baseUrl = "SalaryDetails/Premiumstype";
        function Create(request: Serenity.SaveRequest<PremiumstypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PremiumstypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PremiumstypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PremiumstypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SalaryDetails/Premiumstype/Create",
            Update = "SalaryDetails/Premiumstype/Update",
            Delete = "SalaryDetails/Premiumstype/Delete",
            Retrieve = "SalaryDetails/Premiumstype/Retrieve",
            List = "SalaryDetails/Premiumstype/List"
        }
    }
}
declare namespace HRM {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace HRM.Texts {
}
declare namespace HRM.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace HRM.Administration {
    class AllowancesDialog extends Common.GridEditorDialog<AllowancesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AllowancesForm;
        constructor();
    }
}
declare namespace HRM.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace HRM.Administration {
    class AllowancesEditor extends Common.GridEditorBase<AllowancesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AllowancesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class AllowancesGrid extends Serenity.EntityGrid<AllowancesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AllowancesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class BalanceAccountDialog extends Serenity.EntityDialog<BalanceAccountRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BalanceAccountForm;
    }
}
declare namespace HRM.Administration {
    class BalanceAccountGrid extends Serenity.EntityGrid<BalanceAccountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BalanceAccountDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: HRM.Administration.BalanceAccountRow, index: number): string;
    }
}
declare namespace HRM.Administration {
    class BasicInsuranceEditor extends Common.GridEditorBase<BasicInsurancesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubBasicIsuranceDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class BasicInsurancesDialog extends Serenity.EntityDialog<BasicInsurancesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BasicInsurancesForm;
    }
}
declare namespace HRM.Administration {
    class BasicInsurancesGrid extends Serenity.EntityGrid<BasicInsurancesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BasicInsurancesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class SubBasicIsuranceDialog extends Common.GridEditorDialog<BasicInsurancesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: BasicInsurancesForm;
        constructor();
    }
}
declare namespace HRM.Administration {
    class EmploeesStatusDialog extends Serenity.EntityDialog<EmploeesStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmploeesStatusForm;
    }
}
declare namespace HRM.Administration {
    class EmploeesStatusGrid extends Serenity.EntityGrid<EmploeesStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmploeesStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class FinancialyearDialog extends Serenity.EntityDialog<FinancialyearRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FinancialyearForm;
    }
}
declare namespace HRM.Administration {
    class FinancialyearGrid extends Serenity.EntityGrid<FinancialyearRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FinancialyearDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace HRM.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace HRM.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace HRM.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace HRM.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace HRM.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace HRM.Administration {
    class FilterUserEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, UserRow> {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
        protected getItems(lookup: Q.Lookup<UserRow>): UserRow[];
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace HRM.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        constructor();
    }
}
declare namespace HRM.Administration {
    class UserEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, UserRow> {
        constructor(hidden: JQuery, opt?: Serenity.Select2CommonOptions);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace HRM.Administration {
    import fld = UserRow.Fields;
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        constructor(container: JQuery);
        protected getDefaultSortBy(): fld[];
    }
}
declare namespace HRM.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace HRM.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace HRM.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace HRM.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace HRM.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace HRM.LanguageList {
    function getValue(): string[][];
}
declare namespace HRM.ScriptInitialization {
}
declare namespace HRM {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace HRM.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace HRM.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace HRM.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace HRM.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace HRM {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace HRM.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace HRM.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace HRM.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace HRM.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace HRM.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace HRM.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace HRM.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace HRM.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace HRM.Default {
    class EmploymentStatusDialog extends Serenity.EntityDialog<EmploymentStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmploymentStatusForm;
    }
}
declare namespace HRM.Default {
    class EmploymentStatusGrid extends Serenity.EntityGrid<EmploymentStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmploymentStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class DeparetementsDialog extends Serenity.EntityDialog<DeparetementsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DeparetementsForm;
    }
}
declare namespace HRM.Employees {
    class DeparetementsGrid extends Serenity.EntityGrid<DeparetementsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeparetementsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class JobsDialog extends Serenity.EntityDialog<JobsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JobsForm;
    }
}
declare namespace HRM.Employees {
    class JobsGrid extends Serenity.EntityGrid<JobsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JobsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class PermissionRequestsDialog extends Serenity.EntityDialog<PermissionRequestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PermissionRequestsForm;
    }
}
declare namespace HRM.Employees {
    class PermissionRequestsGrid extends Serenity.EntityGrid<PermissionRequestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PermissionRequestsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatusForm;
    }
}
declare namespace HRM.Employees {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class UsersDialog extends Serenity.EntityDialog<UsersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getInsertPermission(): string;
        protected form: UsersForm;
        constructor(options: any);
    }
}
declare namespace HRM.Employees {
    class UsersGrid extends Serenity.EntityGrid<UsersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UsersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.Employees {
    class VacanciesDialog extends Serenity.EntityDialog<VacanciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VacanciesForm;
    }
}
declare namespace HRM.Employees {
    class VacanciesGrid extends Serenity.EntityGrid<VacanciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacanciesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class VacancyPolicyDialog extends Serenity.EntityDialog<VacancyPolicyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VacancyPolicyForm;
    }
}
declare namespace HRM.Employees {
    class VacancyPolicyGrid extends Serenity.EntityGrid<VacancyPolicyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyPolicyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class VacancyRequestsDialog extends Serenity.EntityDialog<VacancyRequestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VacancyRequestsForm;
        protected deleteButton: any;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Employees {
    class VacancyRequestsGrid extends Serenity.EntityGrid<VacancyRequestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyRequestsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        GetMonthName(month: number): string;
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        private _originalPager;
        private _lastQuote;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace HRM.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HRM.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HRM.RequestsStatus {
    class EmpLoansDialog extends Serenity.EntityDialog<EmpLoansRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmpLoansForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
        constructor(options: any);
    }
}
declare namespace HRM.RequestsStatus {
    class EmpLoansGrid extends Serenity.EntityGrid<EmpLoansRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpLoansDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.RequestsStatus {
    class InstallmentsDialog extends Serenity.EntityDialog<InstallmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstallmentsForm;
    }
}
declare namespace HRM.RequestsStatus {
    class InstallmentsEditors extends Common.GridEditorBase<InstallmentsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.RequestsStatus {
    class InstallmentsGrid extends Serenity.EntityGrid<InstallmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstallmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.RequestsStatus {
    class InstallmentsRequestEditor extends Common.GridEditorBase<InstallmentsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.RequestsStatus {
    class PermissionRequestsDialog extends Serenity.EntityDialog<PermissionRequestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PermissionRequestsForm;
    }
}
declare namespace HRM.RequestsStatus {
    class PermissionRequestsGrid extends Serenity.EntityGrid<PermissionRequestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PermissionRequestsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.RequestsStatus {
    class PermissionStatusDialog extends Serenity.EntityDialog<PermissionStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PermissionStatusForm;
    }
}
declare namespace HRM.RequestsStatus {
    class PermissionStatusGrid extends Serenity.EntityGrid<PermissionStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PermissionStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.RequestsStatus {
    class VacancyRequestsDialog extends Serenity.EntityDialog<VacancyRequestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VacancyRequestsForm;
    }
}
declare namespace HRM.RequestsStatus {
    class VacancyRequestsGrid extends Serenity.EntityGrid<VacancyRequestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VacancyRequestsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.SalaryDetails {
    class DeductionsDialog extends Serenity.EntityDialog<DeductionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DeductionsForm;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class DeductionsGrid extends Serenity.EntityGrid<DeductionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeductionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class EmpLoansDialog extends Serenity.EntityDialog<EmpLoansRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmpLoansForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace HRM.SalaryDetails {
    class EmpLoansGrid extends Serenity.EntityGrid<EmpLoansRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpLoansDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class EntitlementsDialog extends Serenity.EntityDialog<EntitlementsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EntitlementsForm;
    }
}
declare namespace HRM.SalaryDetails {
    class EntitlementsGrid extends Serenity.EntityGrid<EntitlementsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EntitlementsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class InstallmentsDialog extends Serenity.EntityDialog<InstallmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstallmentsForm;
    }
}
declare namespace HRM.SalaryDetails {
    class InstallmentsEditor extends Common.GridEditorBase<InstallmentsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstallmentsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class InstallmentsEditors extends Common.GridEditorBase<InstallmentsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubInstallmentsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class InstallmentsGrid extends Serenity.EntityGrid<InstallmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstallmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class SubInstallmentsDialog extends Common.GridEditorDialog<InstallmentsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InstallmentsForm;
        constructor();
    }
}
declare namespace HRM.SalaryDetails {
    class PremiumsDialog extends Serenity.EntityDialog<PremiumsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PremiumsForm;
    }
}
declare namespace HRM.SalaryDetails {
    class PremiumsGrid extends Serenity.EntityGrid<PremiumsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PremiumsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HRM.SalaryDetails {
    class PremiumstypeDialog extends Serenity.EntityDialog<PremiumstypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PremiumstypeForm;
    }
}
declare namespace HRM.SalaryDetails {
    class PremiumstypeGrid extends Serenity.EntityGrid<PremiumstypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PremiumstypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
