namespace HRM.Administration {
    export interface FinancialyearRow {
        Id?: number;
        DateFrom?: string;
        DateTo?: string;
        Status?: boolean;
    }

    export namespace FinancialyearRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Administration.Financialyear';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            DateFrom = "DateFrom",
            DateTo = "DateTo",
            Status = "Status"
        }
    }
}

