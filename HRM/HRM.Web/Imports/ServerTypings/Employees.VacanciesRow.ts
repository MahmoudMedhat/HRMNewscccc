namespace HRM.Employees {
    export interface VacanciesRow {
        Id?: number;
        Vacancy?: string;
    }

    export namespace VacanciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Vacancy';
        export const localTextPrefix = 'Employees.Vacancies';
        export const lookupKey = 'Employees.Vacancies';

        export function getLookup(): Q.Lookup<VacanciesRow> {
            return Q.getLookup<VacanciesRow>('Employees.Vacancies');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Vacancy = "Vacancy"
        }
    }
}

