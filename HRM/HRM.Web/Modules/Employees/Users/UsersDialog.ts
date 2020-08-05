
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class UsersDialog extends Serenity.EntityDialog<UsersRow, any> {
        protected getFormKey() { return UsersForm.formKey; }
        protected getIdProperty() { return UsersRow.idProperty; }
        protected getLocalTextPrefix() { return UsersRow.localTextPrefix; }
        protected getNameProperty() { return UsersRow.nameProperty; }
        protected getService() { return UsersService.baseUrl; }
        //protected getDeletePermission() { return UsersRow.deletePermission; }
        protected getInsertPermission() { return UsersRow.insertPermission; }
        //protected getUpdatePermission() { return UsersRow.updatePermission; }

        protected form = new UsersForm(this.idPrefix);

        //protected getToolbarButtons() {
        //    var buttons = super.getToolbarButtons();
        //    if (!Authorization.hasPermission("Review:Audit:Modify"))
        //    { buttons = buttons.slice(2); }
        //    if (!Authorization.hasPermission("Review:Audit:Delete"))
        //    { buttons = buttons.slice(1); } return buttons;
        //}
        
       

        constructor(options) {
            super(options);

            if (!this.options.canDelete) {
                this.toolbar.findButton(".delete-button").remove();

            }
        }

    }
}