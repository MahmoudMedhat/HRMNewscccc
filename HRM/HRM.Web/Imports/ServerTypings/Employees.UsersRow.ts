namespace HRM.Employees {
    export interface UsersRow {
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
        MangerFingerPrintCode?: string;
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

    export namespace UsersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Employees.Users';
        export const lookupKey = 'Users';

        export function getLookup(): Q.Lookup<UsersRow> {
            return Q.getLookup<UsersRow>('Users');
        }
        export const deletePermission = 'Employees:Users:Modify';
        export const insertPermission = 'Employees:Users:Modify';
        export const readPermission = 'Employees:Users:Modify';
        export const updatePermission = 'Employees:Users:Modify';

        export declare const enum Fields {
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

