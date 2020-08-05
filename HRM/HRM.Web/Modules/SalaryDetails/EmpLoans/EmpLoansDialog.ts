
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
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
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);


            return b;
        }


    }
}