
namespace HRM.Administration {

   
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
        
    export class FinancialyearDialog extends Serenity.EntityDialog<FinancialyearRow, any> {
        protected getFormKey() { return FinancialyearForm.formKey; }
        protected getIdProperty() { return FinancialyearRow.idProperty; }
        protected getLocalTextPrefix() { return FinancialyearRow.localTextPrefix; }
        protected getService() { return FinancialyearService.baseUrl; }
        protected getDeletePermission() { return FinancialyearRow.deletePermission; }
        protected getInsertPermission() { return FinancialyearRow.insertPermission; }
        protected getUpdatePermission() { return FinancialyearRow.updatePermission; }

        protected form = new FinancialyearForm(this.idPrefix);
        //protected onDialogOpen() {
        //    $(".ui-dialog-titlebar-maximize").click();
        //    super.onDialogOpen();

        //}

    }
}