
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class PremiumsDialog extends Serenity.EntityDialog<PremiumsRow, any> {
        protected getFormKey() { return PremiumsForm.formKey; }
        protected getIdProperty() { return PremiumsRow.idProperty; }
        protected getLocalTextPrefix() { return PremiumsRow.localTextPrefix; }
        protected getService() { return PremiumsService.baseUrl; }
        protected getDeletePermission() { return PremiumsRow.deletePermission; }
        protected getInsertPermission() { return PremiumsRow.insertPermission; }
        protected getUpdatePermission() { return PremiumsRow.updatePermission; }

        protected form = new PremiumsForm(this.idPrefix);

    }
}