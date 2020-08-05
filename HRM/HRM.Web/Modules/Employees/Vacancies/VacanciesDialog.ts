
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class VacanciesDialog extends Serenity.EntityDialog<VacanciesRow, any> {
        protected getFormKey() { return VacanciesForm.formKey; }
        protected getIdProperty() { return VacanciesRow.idProperty; }
        protected getLocalTextPrefix() { return VacanciesRow.localTextPrefix; }
        protected getNameProperty() { return VacanciesRow.nameProperty; }
        protected getService() { return VacanciesService.baseUrl; }
        protected getDeletePermission() { return VacanciesRow.deletePermission; }
        protected getInsertPermission() { return VacanciesRow.insertPermission; }
        protected getUpdatePermission() { return VacanciesRow.updatePermission; }

        protected form = new VacanciesForm(this.idPrefix);

    }
}