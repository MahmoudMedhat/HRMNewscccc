
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class InstallmentsGrid extends Serenity.EntityGrid<InstallmentsRow, any> {
        protected getColumnsKey() { return 'RequestsStatus.Installments'; }
        protected getDialogType() { return InstallmentsDialog; }
        protected getIdProperty() { return InstallmentsRow.idProperty; }
        protected getInsertPermission() { return InstallmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return InstallmentsRow.localTextPrefix; }
        protected getService() { return InstallmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}