
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class VacancyPolicyDialog extends Serenity.EntityDialog<VacancyPolicyRow, any> {
        protected getFormKey() { return VacancyPolicyForm.formKey; }
        protected getIdProperty() { return VacancyPolicyRow.idProperty; }
        protected getLocalTextPrefix() { return VacancyPolicyRow.localTextPrefix; }
        protected getService() { return VacancyPolicyService.baseUrl; }
        protected getDeletePermission() { return VacancyPolicyRow.deletePermission; }
        protected getInsertPermission() { return VacancyPolicyRow.insertPermission; }
        protected getUpdatePermission() { return VacancyPolicyRow.updatePermission; }

        protected form = new VacancyPolicyForm(this.idPrefix);

    }
}