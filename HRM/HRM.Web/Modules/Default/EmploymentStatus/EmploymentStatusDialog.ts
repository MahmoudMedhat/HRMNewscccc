
namespace HRM.Default {

    @Serenity.Decorators.registerClass()
    export class EmploymentStatusDialog extends Serenity.EntityDialog<EmploymentStatusRow, any> {
        protected getFormKey() { return EmploymentStatusForm.formKey; }
        protected getIdProperty() { return EmploymentStatusRow.idProperty; }
        protected getLocalTextPrefix() { return EmploymentStatusRow.localTextPrefix; }
        protected getNameProperty() { return EmploymentStatusRow.nameProperty; }
        protected getService() { return EmploymentStatusService.baseUrl; }
        protected getDeletePermission() { return EmploymentStatusRow.deletePermission; }
        protected getInsertPermission() { return EmploymentStatusRow.insertPermission; }
        protected getUpdatePermission() { return EmploymentStatusRow.updatePermission; }

        protected form = new EmploymentStatusForm(this.idPrefix);

    }
}