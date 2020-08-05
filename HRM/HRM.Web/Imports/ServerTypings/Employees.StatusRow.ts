namespace HRM.Employees {
    export interface StatusRow {
        Id?: number;
        StatusName?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'StatusName';
        export const localTextPrefix = 'Employees.Status';
        export const lookupKey = 'Employees.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('Employees.Status');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            StatusName = "StatusName"
        }
    }
}

