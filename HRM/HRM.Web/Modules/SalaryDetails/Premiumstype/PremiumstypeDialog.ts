
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class PremiumstypeDialog extends Serenity.EntityDialog<PremiumstypeRow, any> {
        protected getFormKey() { return PremiumstypeForm.formKey; }
        protected getIdProperty() { return PremiumstypeRow.idProperty; }
        protected getLocalTextPrefix() { return PremiumstypeRow.localTextPrefix; }
        protected getNameProperty() { return PremiumstypeRow.nameProperty; }
        protected getService() { return PremiumstypeService.baseUrl; }
        protected getDeletePermission() { return PremiumstypeRow.deletePermission; }
        protected getInsertPermission() { return PremiumstypeRow.insertPermission; }
        protected getUpdatePermission() { return PremiumstypeRow.updatePermission; }

        protected form = new PremiumstypeForm(this.idPrefix);

    }
}