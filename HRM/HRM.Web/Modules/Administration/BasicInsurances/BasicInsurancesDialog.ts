
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class BasicInsurancesDialog extends Serenity.EntityDialog<BasicInsurancesRow, any> {
        protected getFormKey() { return BasicInsurancesForm.formKey; }
        protected getIdProperty() { return BasicInsurancesRow.idProperty; }
        protected getLocalTextPrefix() { return BasicInsurancesRow.localTextPrefix; }
        protected getNameProperty() { return BasicInsurancesRow.nameProperty; }
        protected getService() { return BasicInsurancesService.baseUrl; }
        protected getDeletePermission() { return BasicInsurancesRow.deletePermission; }
        protected getInsertPermission() { return BasicInsurancesRow.insertPermission; }
        protected getUpdatePermission() { return BasicInsurancesRow.updatePermission; }

        protected form = new BasicInsurancesForm(this.idPrefix);

    }
}