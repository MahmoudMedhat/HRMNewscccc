
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class PermissionRequestsDialog extends Serenity.EntityDialog<PermissionRequestsRow, any> {
        protected getFormKey() { return PermissionRequestsForm.formKey; }
        protected getIdProperty() { return PermissionRequestsRow.idProperty; }
        protected getLocalTextPrefix() { return PermissionRequestsRow.localTextPrefix; }
        protected getService() { return PermissionRequestsService.baseUrl; }
        protected getDeletePermission() { return PermissionRequestsRow.deletePermission; }
        protected getInsertPermission() { return PermissionRequestsRow.insertPermission; }
        protected getUpdatePermission() { return PermissionRequestsRow.updatePermission; }

        protected form = new PermissionRequestsForm(this.idPrefix);

    }
}