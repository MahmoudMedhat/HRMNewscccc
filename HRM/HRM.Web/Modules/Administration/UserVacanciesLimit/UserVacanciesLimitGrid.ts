
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class UserVacanciesLimitGrid extends Serenity.EntityGrid<UserVacanciesLimitRow, any> {
        protected getColumnsKey() { return 'Administration.UserVacanciesLimit'; }
        protected getDialogType() { return UserVacanciesLimitDialog; }
        protected getIdProperty() { return UserVacanciesLimitRow.idProperty; }
        protected getInsertPermission() { return UserVacanciesLimitRow.insertPermission; }
        protected getLocalTextPrefix() { return UserVacanciesLimitRow.localTextPrefix; }
        protected getService() { return UserVacanciesLimitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}