
namespace HRM.AttendanceSheet {

    @Serenity.Decorators.registerClass()
    export class AttendanceSheetDialog extends Serenity.EntityDialog<AttendanceSheetRow, any> {
        protected getFormKey() { return AttendanceSheetForm.formKey; }
        protected getIdProperty() { return AttendanceSheetRow.idProperty; }
        protected getLocalTextPrefix() { return AttendanceSheetRow.localTextPrefix; }
        protected getNameProperty() { return AttendanceSheetRow.nameProperty; }
        protected getService() { return AttendanceSheetService.baseUrl; }
        protected getDeletePermission() { return AttendanceSheetRow.deletePermission; }
        protected getInsertPermission() { return AttendanceSheetRow.insertPermission; }
        protected getUpdatePermission() { return AttendanceSheetRow.updatePermission; }

        protected form = new AttendanceSheetForm(this.idPrefix);

    }
}