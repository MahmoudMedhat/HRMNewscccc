
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class EmpLoansDialog extends Serenity.EntityDialog<EmpLoansRow, any> {
        protected getFormKey() { return EmpLoansForm.formKey; }
        protected getIdProperty() { return EmpLoansRow.idProperty; }
        protected getLocalTextPrefix() { return EmpLoansRow.localTextPrefix; }
        protected getNameProperty() { return EmpLoansRow.nameProperty; }
        protected getService() { return EmpLoansService.baseUrl; }
        protected getDeletePermission() { return EmpLoansRow.deletePermission; }
        protected getInsertPermission() { return EmpLoansRow.insertPermission; }
        protected getUpdatePermission() { return EmpLoansRow.updatePermission; }

        protected form = new EmpLoansForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();
            var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");
            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;
            btnSave.onClick = e => {

                this.confirmBeforeSave(oldSaveClick, e);
            };
            btnApply.onClick = e => {

                this.confirmBeforeSave(oldApplyClick, e);
            };
            return btns;
        }

        private confirmBeforeSave(oldEvt, e) {
            Q.confirm("If Request are Refused or Accepted this mean that you cannot update it ?", () => {
                oldEvt(e);
            });
        }

        constructor(options) {
            super(options);
            if (!this.options.canDelete) {
                this.toolbar.findButton(".delete-button").remove();

            }
        }
    }
}