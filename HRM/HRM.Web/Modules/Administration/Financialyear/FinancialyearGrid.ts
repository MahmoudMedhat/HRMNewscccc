
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class FinancialyearGrid extends Serenity.EntityGrid<FinancialyearRow, any> {
        protected getColumnsKey() { return 'Administration.Financialyear'; }
        protected getDialogType() { return FinancialyearDialog; }
        protected getIdProperty() { return FinancialyearRow.idProperty; }
        protected getInsertPermission() { return FinancialyearRow.insertPermission; }
        protected getLocalTextPrefix() { return FinancialyearRow.localTextPrefix; }
        protected getService() { return FinancialyearService.baseUrl; }





        constructor(container: JQuery) {
            super(container);




        }
    }
}