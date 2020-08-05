namespace HRM.Employees {
    export interface VacancyPolicyRow {
        Id?: number;
        VacancyId?: number;
        Duration?: Duration;
        Limit?: number;
        Sending?: Sending;
        FromYears?: number;
        ToYears?: number;
        Vacancy?: string;
    }

    export namespace VacancyPolicyRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Employees.VacancyPolicy';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

