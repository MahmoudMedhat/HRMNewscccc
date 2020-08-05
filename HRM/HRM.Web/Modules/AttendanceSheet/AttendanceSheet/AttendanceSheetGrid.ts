
namespace HRM.AttendanceSheet {

    @Serenity.Decorators.registerClass()
    export class AttendanceSheetGrid extends Serenity.EntityGrid<AttendanceSheetRow, any> {
        protected getColumnsKey() { return 'AttendanceSheet.AttendanceSheet'; }
        protected getDialogType() { return AttendanceSheetDialog; }
        protected getIdProperty() { return AttendanceSheetRow.idProperty; }
        protected getInsertPermission() { return AttendanceSheetRow.insertPermission; }
        protected getLocalTextPrefix() { return AttendanceSheetRow.localTextPrefix; }
        protected getService() { return AttendanceSheetService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            AttendanceSheetService.Create({
                
            }, response => {
                this.refresh()
                })
        }
    }
}