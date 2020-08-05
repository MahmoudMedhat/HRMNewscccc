namespace HRM.Employees {
    export interface JobsRow {
        Id?: number;
        Jobtitle?: string;
        DepartementId?: number;
        Departement?: string;
    }

    export namespace JobsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Jobtitle';
        export const localTextPrefix = 'Employees.Jobs';
        export const lookupKey = 'Employees.Jobs';

        export function getLookup(): Q.Lookup<JobsRow> {
            return Q.getLookup<JobsRow>('Employees.Jobs');
        }
        export const deletePermission = 'Employees:Jobs';
        export const insertPermission = 'Employees:Jobs';
        export const readPermission = 'Employees:Jobs';
        export const updatePermission = 'Employees:Jobs';

        export declare const enum Fields {
            Id = "Id",
            Jobtitle = "Jobtitle",
            DepartementId = "DepartementId",
            Departement = "Departement"
        }
    }
}

