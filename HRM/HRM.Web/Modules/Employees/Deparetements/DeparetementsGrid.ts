
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class DeparetementsGrid extends Serenity.EntityGrid<DeparetementsRow, any> {
        protected getColumnsKey() { return 'Employees.Deparetements'; }
        protected getDialogType() { return DeparetementsDialog; }
        protected getIdProperty() { return DeparetementsRow.idProperty; }
        protected getInsertPermission() { return DeparetementsRow.insertPermission; }
        protected getLocalTextPrefix() { return DeparetementsRow.localTextPrefix; }
        protected getService() { return DeparetementsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}