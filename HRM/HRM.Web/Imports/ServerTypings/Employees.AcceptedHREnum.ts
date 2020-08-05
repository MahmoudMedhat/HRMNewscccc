namespace HRM.Employees {
    export enum AcceptedHREnum {
        pending = 0,
        Approved = 1,
        refused = 2
    }
    Serenity.Decorators.registerEnumType(AcceptedHREnum, 'HRM.Employees.AcceptedHREnum', 'Employees.AcceptedHREnum');
}

