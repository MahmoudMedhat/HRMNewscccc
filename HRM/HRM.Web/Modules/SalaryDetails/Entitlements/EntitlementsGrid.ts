
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class EntitlementsGrid extends Serenity.EntityGrid<EntitlementsRow, any> {
        protected getColumnsKey() { return 'SalaryDetails.Entitlements'; }
        protected getDialogType() { return EntitlementsDialog; }
        protected getIdProperty() { return EntitlementsRow.idProperty; }
        protected getInsertPermission() { return EntitlementsRow.insertPermission; }
        protected getLocalTextPrefix() { return EntitlementsRow.localTextPrefix; }
        protected getService() { return EntitlementsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}