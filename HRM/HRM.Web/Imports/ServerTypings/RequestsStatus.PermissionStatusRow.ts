namespace HRM.RequestsStatus {
    export interface PermissionStatusRow {
        Id?: number;
        Permissiontype?: string;
    }

    export namespace PermissionStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Permissiontype';
        export const localTextPrefix = 'RequestsStatus.PermissionStatus';
        export const lookupKey = 'RequestsStatus.PermissionStatus';

        export function getLookup(): Q.Lookup<PermissionStatusRow> {
            return Q.getLookup<PermissionStatusRow>('RequestsStatus.PermissionStatus');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Permissiontype = "Permissiontype"
        }
    }
}

