
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class PermissionStatusDialog extends Serenity.EntityDialog<PermissionStatusRow, any> {
        protected getFormKey() { return PermissionStatusForm.formKey; }
        protected getIdProperty() { return PermissionStatusRow.idProperty; }
        protected getLocalTextPrefix() { return PermissionStatusRow.localTextPrefix; }
        protected getNameProperty() { return PermissionStatusRow.nameProperty; }
        protected getService() { return PermissionStatusService.baseUrl; }
        protected getDeletePermission() { return PermissionStatusRow.deletePermission; }
        protected getInsertPermission() { return PermissionStatusRow.insertPermission; }
        protected getUpdatePermission() { return PermissionStatusRow.updatePermission; }

        protected form = new PermissionStatusForm(this.idPrefix);

    }
}