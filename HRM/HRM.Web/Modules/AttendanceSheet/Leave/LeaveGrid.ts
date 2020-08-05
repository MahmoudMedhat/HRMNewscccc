
namespace HRM.AttendanceSheet {

    @Serenity.Decorators.registerClass()
    export class LeaveGrid extends Serenity.EntityGrid<LeaveRow, any> {
        protected getColumnsKey() { return 'AttendanceSheet.Leave'; }
        protected getDialogType() { return LeaveDialog; }
        protected getIdProperty() { return LeaveRow.idProperty; }
        protected getInsertPermission() { return LeaveRow.insertPermission; }
        protected getLocalTextPrefix() { return LeaveRow.localTextPrefix; }
        protected getService() { return LeaveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}