namespace HRM.Employees {
    export interface VacancyRequestsRow {
        Id?: number;
        UserId?: number;
        TotlaLimit_relay?: number;
        Limit_in_Inser?: number;
        LeaveTaken?: number;
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
        UserFingerPrintCode?: string;
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
        UserComment?: string;
        StatusStatusName?: string;
    }

    export namespace VacancyRequestsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Employees.VacancyRequests';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            UserId = "UserId",
            TotlaLimit_relay = "TotlaLimit_relay",
            Limit_in_Inser = "Limit_in_Inser",
            LeaveTaken = "LeaveTaken",
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
            UserComment = "UserComment",
            StatusStatusName = "StatusStatusName"
        }
    }
}

