namespace HRM.Employees {
    export enum Duration {
        Monthly = 0,
        yearly = 1
    }
    Serenity.Decorators.registerEnumType(Duration, 'HRM.Employees.Duration', 'Employees.VacancyEnum');
}

