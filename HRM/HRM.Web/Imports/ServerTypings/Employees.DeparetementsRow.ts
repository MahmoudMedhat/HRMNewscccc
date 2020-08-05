namespace HRM.Employees {
    export interface DeparetementsRow {
        Id?: number;
        Departement?: string;
    }

    export namespace DeparetementsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Departement';
        export const localTextPrefix = 'Employees.Deparetements';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Departement = "Departement"
        }
    }
}

