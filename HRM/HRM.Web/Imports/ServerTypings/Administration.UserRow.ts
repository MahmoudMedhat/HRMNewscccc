namespace HRM.Administration {
    export interface UserRow {
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
        FingerPrintCode?: string;
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
        MangerFingerPrintCode?: string;
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
        Religion?: Modules.Administration.User.ReligionEnum;
        AlowancesList?: AllowancesRow[];
        InsuranceList?: BasicInsurancesRow[];
        UserVacanciesLimit?: UserVacanciesLimitRow[];
        Status?: UserStatusEnum;
        Balance?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Security';
        export const readPermission = 'Administration:Security';
        export const updatePermission = 'Administration:Security';

        export declare const enum Fields {
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
            Religion = "Religion",
            AlowancesList = "AlowancesList",
            InsuranceList = "InsuranceList",
            UserVacanciesLimit = "UserVacanciesLimit",
            Status = "Status",
            Balance = "Balance",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

