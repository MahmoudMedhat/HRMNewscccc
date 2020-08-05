namespace HRM.Modules.AttendanceSheet.AttendanceSheet {
    export enum LeavingStatusEnum {
        Absence = 0,
        Present = 1,
        Late = 2,
        early = 3
    }
    Serenity.Decorators.registerEnumType(LeavingStatusEnum, 'HRM.Modules.AttendanceSheet.AttendanceSheet.LeavingStatusEnum', 'AttendanceSheet.LeavingStatusEnum');
}

