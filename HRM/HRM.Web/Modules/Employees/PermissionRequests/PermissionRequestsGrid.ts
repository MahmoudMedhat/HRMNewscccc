
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class PermissionRequestsGrid extends Serenity.EntityGrid<PermissionRequestsRow, any> {
        protected getColumnsKey() { return 'Employees.PermissionRequests'; }
        protected getDialogType() { return PermissionRequestsDialog; }
        protected getIdProperty() { return PermissionRequestsRow.idProperty; }
        protected getInsertPermission() { return PermissionRequestsRow.insertPermission; }
        protected getLocalTextPrefix() { return PermissionRequestsRow.localTextPrefix; }
        protected getService() { return PermissionRequestsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}