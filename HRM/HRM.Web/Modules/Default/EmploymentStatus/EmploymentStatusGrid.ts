
namespace HRM.Default {

    @Serenity.Decorators.registerClass()
    export class EmploymentStatusGrid extends Serenity.EntityGrid<EmploymentStatusRow, any> {
        protected getColumnsKey() { return 'Default.EmploymentStatus'; }
        protected getDialogType() { return EmploymentStatusDialog; }
        protected getIdProperty() { return EmploymentStatusRow.idProperty; }
        protected getInsertPermission() { return EmploymentStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return EmploymentStatusRow.localTextPrefix; }
        protected getService() { return EmploymentStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}