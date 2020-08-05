namespace HRM.SalaryDetails {
    export interface PremiumsRow {
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

    export namespace PremiumsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'SalaryDetails.Premiums';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

