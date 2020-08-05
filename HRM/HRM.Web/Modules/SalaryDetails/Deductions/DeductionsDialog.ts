
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class DeductionsDialog extends Serenity.EntityDialog<DeductionsRow, any> {
        protected getFormKey() { return DeductionsForm.formKey; }
        protected getIdProperty() { return DeductionsRow.idProperty; }
        protected getLocalTextPrefix() { return DeductionsRow.localTextPrefix; }
        protected getNameProperty() { return DeductionsRow.nameProperty; }
        protected getService() { return DeductionsService.baseUrl; }
        protected getDeletePermission() { return DeductionsRow.deletePermission; }
        protected getInsertPermission() { return DeductionsRow.insertPermission; }
        protected getUpdatePermission() { return DeductionsRow.updatePermission; }

        protected form = new DeductionsForm(this.idPrefix);

     
        constructor(container: JQuery) {
            super(container);

            this.form.DeductionsDate.element.datepicker('option', 'minDate', '-0m');
            
        }
    }
}
