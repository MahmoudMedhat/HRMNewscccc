
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class BasicInsurancesGrid extends Serenity.EntityGrid<BasicInsurancesRow, any> {
        protected getColumnsKey() { return 'Administration.BasicInsurances'; }
        protected getDialogType() { return BasicInsurancesDialog; }
        protected getIdProperty() { return BasicInsurancesRow.idProperty; }
        protected getInsertPermission() { return BasicInsurancesRow.insertPermission; }
        protected getLocalTextPrefix() { return BasicInsurancesRow.localTextPrefix; }
        protected getService() { return BasicInsurancesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}