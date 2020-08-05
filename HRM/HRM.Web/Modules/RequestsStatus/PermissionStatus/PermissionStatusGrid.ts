
namespace HRM.RequestsStatus {

    @Serenity.Decorators.registerClass()
    export class PermissionStatusGrid extends Serenity.EntityGrid<PermissionStatusRow, any> {
        protected getColumnsKey() { return 'RequestsStatus.PermissionStatus'; }
        protected getDialogType() { return PermissionStatusDialog; }
        protected getIdProperty() { return PermissionStatusRow.idProperty; }
        protected getInsertPermission() { return PermissionStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return PermissionStatusRow.localTextPrefix; }
        protected getService() { return PermissionStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}