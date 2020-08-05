namespace HRM.Employees {
    export enum Sending {
        Norelay = 0,
        relay = 1
    }
    Serenity.Decorators.registerEnumType(Sending, 'HRM.Employees.Sending', 'Employees.Sending');
}

