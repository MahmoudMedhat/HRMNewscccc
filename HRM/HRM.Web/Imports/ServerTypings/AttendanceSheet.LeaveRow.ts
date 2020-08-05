namespace HRM.AttendanceSheet {
    export interface LeaveRow {
        Id?: number;
        Date?: string;
        FingerPrint?: string;
        CheckIn?: string;
        CheckOut?: string;
        IpAddress?: string;
        Device?: string;
    }

    export namespace LeaveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FingerPrint';
        export const localTextPrefix = 'AttendanceSheet.Leave';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Date = "Date",
            FingerPrint = "FingerPrint",
            CheckIn = "CheckIn",
            CheckOut = "CheckOut",
            IpAddress = "IpAddress",
            Device = "Device"
        }
    }
}

