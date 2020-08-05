namespace HRM.Administration {
    export enum UserStatusEnum {
        Employee = 1,
        Resignation = 2,
        Died = 3
    }
    Serenity.Decorators.registerEnumType(UserStatusEnum, 'HRM.Administration.UserStatusEnum', 'Administration.UserStatusEnum');
}

