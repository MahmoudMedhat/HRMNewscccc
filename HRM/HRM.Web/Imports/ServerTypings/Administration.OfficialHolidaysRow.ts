namespace HRM.Administration {
    export interface OfficialHolidaysRow {
        Id?: number;
        FromHoliday?: string;
        ToHoliday?: string;
        TheReasonOfHoliday?: string;
        weekdays?: Modules.Administration.OfficialHolidays.WeekDaysEnum;
        Religion?: Modules.Administration.User.Religion_Offical_Enum;
    }

    export namespace OfficialHolidaysRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TheReasonOfHoliday';
        export const localTextPrefix = 'Administration.OfficialHolidays';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            FromHoliday = "FromHoliday",
            ToHoliday = "ToHoliday",
            TheReasonOfHoliday = "TheReasonOfHoliday",
            weekdays = "weekdays",
            Religion = "Religion"
        }
    }
}

