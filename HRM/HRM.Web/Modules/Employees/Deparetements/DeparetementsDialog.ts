
namespace HRM.Employees {
  
    @Serenity.Decorators.registerClass()
    export class DeparetementsDialog extends Serenity.EntityDialog<DeparetementsRow, any> {
        protected getFormKey() { return DeparetementsForm.formKey; }
        protected getIdProperty() { return DeparetementsRow.idProperty; }
        protected getLocalTextPrefix() { return DeparetementsRow.localTextPrefix; }
        protected getNameProperty() { return DeparetementsRow.nameProperty; }
        protected getService() { return DeparetementsService.baseUrl; }
        protected getDeletePermission() { return DeparetementsRow.deletePermission; }
        protected getInsertPermission() { return DeparetementsRow.insertPermission; }
        protected getUpdatePermission() { return DeparetementsRow.updatePermission; }

        protected form = new DeparetementsForm(this.idPrefix);

    }
}