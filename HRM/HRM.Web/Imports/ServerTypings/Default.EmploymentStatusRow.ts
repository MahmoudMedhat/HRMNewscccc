namespace HRM.Default {
    export interface EmploymentStatusRow {
        Id?: number;
        Status?: string;
    }

    export namespace EmploymentStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Default.EmploymentStatus';
        export const lookupKey = 'Default.EmploymentStatus';

        export function getLookup(): Q.Lookup<EmploymentStatusRow> {
            return Q.getLookup<EmploymentStatusRow>('Default.EmploymentStatus');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Status = "Status"
        }
    }
}

