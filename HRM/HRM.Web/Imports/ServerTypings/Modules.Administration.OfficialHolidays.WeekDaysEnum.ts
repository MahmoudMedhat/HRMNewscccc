namespace HRM.Modules.Administration.OfficialHolidays {
    export enum WeekDaysEnum {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Null = 7
    }
    Serenity.Decorators.registerEnumType(WeekDaysEnum, 'HRM.Modules.Administration.OfficialHolidays.WeekDaysEnum', 'Administration.WeekDaysEnum');
}

