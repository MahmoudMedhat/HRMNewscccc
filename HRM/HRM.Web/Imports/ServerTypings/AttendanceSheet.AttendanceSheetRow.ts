namespace HRM.AttendanceSheet {
    export interface AttendanceSheetRow {
        Id?: number;
        EmployeeName?: string;
        Email?: string;
        Status_In?: Modules.AttendanceSheet.AttendanceSheet.LeavingStatusEnum;
        Status_Out?: Modules.AttendanceSheet.AttendanceSheet.LeavingStatusEnum;
        Remarks?: string;
        Remark_Out?: string;
        AttendanceDate?: string;
        Reason?: string;
    }

    export namespace AttendanceSheetRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'AttendanceSheet.AttendanceSheet';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            EmployeeName = "EmployeeName",
            Email = "Email",
            Status_In = "Status_In",
            Status_Out = "Status_Out",
            Remarks = "Remarks",
            Remark_Out = "Remark_Out",
            AttendanceDate = "AttendanceDate",
            Reason = "Reason"
        }
    }
}

