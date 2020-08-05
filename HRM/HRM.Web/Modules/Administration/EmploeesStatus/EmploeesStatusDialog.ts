
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class EmploeesStatusDialog extends Serenity.EntityDialog<EmploeesStatusRow, any> {
        protected getFormKey() { return EmploeesStatusForm.formKey; }
        protected getIdProperty() { return EmploeesStatusRow.idProperty; }
        protected getLocalTextPrefix() { return EmploeesStatusRow.localTextPrefix; }
        protected getService() { return EmploeesStatusService.baseUrl; }
        protected getDeletePermission() { return EmploeesStatusRow.deletePermission; }
        protected getInsertPermission() { return EmploeesStatusRow.insertPermission; }
        protected getUpdatePermission() { return EmploeesStatusRow.updatePermission; }

        protected form = new EmploeesStatusForm(this.idPrefix);

    }
}