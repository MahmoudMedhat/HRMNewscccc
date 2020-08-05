
namespace HRM.AttendanceSheet {

    @Serenity.Decorators.registerClass()
    export class LeaveDialog extends Serenity.EntityDialog<LeaveRow, any> {
        protected getFormKey() { return LeaveForm.formKey; }
        protected getIdProperty() { return LeaveRow.idProperty; }
        protected getLocalTextPrefix() { return LeaveRow.localTextPrefix; }
        protected getNameProperty() { return LeaveRow.nameProperty; }
        protected getService() { return LeaveService.baseUrl; }
        protected getDeletePermission() { return LeaveRow.deletePermission; }
        protected getInsertPermission() { return LeaveRow.insertPermission; }
        protected getUpdatePermission() { return LeaveRow.updatePermission; }

        protected form = new LeaveForm(this.idPrefix);

    }
}