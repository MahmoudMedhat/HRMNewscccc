
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class AllowancesGrid extends Serenity.EntityGrid<AllowancesRow, any> {
        protected getColumnsKey() { return 'Administration.Allowances'; }
        protected getDialogType() { return AllowancesDialog; }
        protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getInsertPermission() { return AllowancesRow.insertPermission; }
        protected getLocalTextPrefix() { return AllowancesRow.localTextPrefix; }
        protected getService() { return AllowancesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);



        }
    }
}