
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class BalanceAccountDialog extends Serenity.EntityDialog<BalanceAccountRow, any> {
        protected getFormKey() { return BalanceAccountForm.formKey; }
        protected getIdProperty() { return BalanceAccountRow.idProperty; }
        protected getLocalTextPrefix() { return BalanceAccountRow.localTextPrefix; }
      
        protected getService() { return BalanceAccountService.baseUrl; }
        protected getDeletePermission() { return BalanceAccountRow.deletePermission; }
        protected getInsertPermission() { return BalanceAccountRow.insertPermission; }
        protected getUpdatePermission() { return BalanceAccountRow.updatePermission; }

        protected form = new BalanceAccountForm(this.idPrefix);


        
        

    }
}