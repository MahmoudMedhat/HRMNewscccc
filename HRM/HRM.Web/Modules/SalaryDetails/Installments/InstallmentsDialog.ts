
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class InstallmentsDialog extends Serenity.EntityDialog<InstallmentsRow, any> {
        protected getFormKey() { return InstallmentsForm.formKey; }
        protected getIdProperty() { return InstallmentsRow.idProperty; }
        protected getLocalTextPrefix() { return InstallmentsRow.localTextPrefix; }
        protected getService() { return InstallmentsService.baseUrl; }
        protected getDeletePermission() { return InstallmentsRow.deletePermission; }
        protected getInsertPermission() { return InstallmentsRow.insertPermission; }
        protected getUpdatePermission() { return InstallmentsRow.updatePermission; }

        protected form = new InstallmentsForm(this.idPrefix);

    }
}