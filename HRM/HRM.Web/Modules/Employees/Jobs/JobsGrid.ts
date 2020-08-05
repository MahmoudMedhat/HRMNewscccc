
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class JobsGrid extends Serenity.EntityGrid<JobsRow, any> {
        protected getColumnsKey() { return 'Employees.Jobs'; }
        protected getDialogType() { return JobsDialog; }
        protected getIdProperty() { return JobsRow.idProperty; }
        protected getInsertPermission() { return JobsRow.insertPermission; }
        protected getLocalTextPrefix() { return JobsRow.localTextPrefix; }
        protected getService() { return JobsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}