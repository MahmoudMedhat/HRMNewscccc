
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class EntitlementsDialog extends Serenity.EntityDialog<EntitlementsRow, any> {
        protected getFormKey() { return EntitlementsForm.formKey; }
        protected getIdProperty() { return EntitlementsRow.idProperty; }
        protected getLocalTextPrefix() { return EntitlementsRow.localTextPrefix; }
        protected getNameProperty() { return EntitlementsRow.nameProperty; }
        protected getService() { return EntitlementsService.baseUrl; }
        protected getDeletePermission() { return EntitlementsRow.deletePermission; }
        protected getInsertPermission() { return EntitlementsRow.insertPermission; }
        protected getUpdatePermission() { return EntitlementsRow.updatePermission; }

        protected form = new EntitlementsForm(this.idPrefix);

    }
}