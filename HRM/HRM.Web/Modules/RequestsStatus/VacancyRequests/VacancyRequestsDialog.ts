
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class VacancyRequestsDialog extends Serenity.EntityDialog<VacancyRequestsRow, any> {
        protected getFormKey() { return VacancyRequestsForm.formKey; }
        protected getIdProperty() { return VacancyRequestsRow.idProperty; }
        protected getLocalTextPrefix() { return VacancyRequestsRow.localTextPrefix; }
        protected getService() { return VacancyRequestsService.baseUrl; }
        protected getDeletePermission() { return VacancyRequestsRow.deletePermission; }
        protected getInsertPermission() { return VacancyRequestsRow.insertPermission; }
        protected getUpdatePermission() { return VacancyRequestsRow.updatePermission; }

        protected form = new VacancyRequestsForm(this.idPrefix);

        
    }
}