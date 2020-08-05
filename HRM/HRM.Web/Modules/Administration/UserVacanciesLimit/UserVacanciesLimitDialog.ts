
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class UserVacanciesLimitDialog extends Serenity.EntityDialog<UserVacanciesLimitRow, any> {
        protected getFormKey() { return UserVacanciesLimitForm.formKey; }
        protected getIdProperty() { return UserVacanciesLimitRow.idProperty; }
        protected getLocalTextPrefix() { return UserVacanciesLimitRow.localTextPrefix; }
        protected getService() { return UserVacanciesLimitService.baseUrl; }
        protected getDeletePermission() { return UserVacanciesLimitRow.deletePermission; }
        protected getInsertPermission() { return UserVacanciesLimitRow.insertPermission; }
        protected getUpdatePermission() { return UserVacanciesLimitRow.updatePermission; }

        protected form = new UserVacanciesLimitForm(this.idPrefix);

    }
}