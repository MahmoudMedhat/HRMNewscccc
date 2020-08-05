namespace HRM.Modules.RequestsStatus.EmpLoans {
    export enum IsAcceptedEnum {
        NotAccepted = 0,
        Accepted = 1,
        Pending = 2
    }
    Serenity.Decorators.registerEnumType(IsAcceptedEnum, 'HRM.Modules.RequestsStatus.EmpLoans.IsAcceptedEnum', 'RequestsStatus.IsAccepted');
}

