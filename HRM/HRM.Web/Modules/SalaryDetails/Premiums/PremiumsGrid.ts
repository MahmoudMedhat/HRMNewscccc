
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class PremiumsGrid extends Serenity.EntityGrid<PremiumsRow, any> {
        protected getColumnsKey() { return 'SalaryDetails.Premiums'; }
        protected getDialogType() { return PremiumsDialog; }
        protected getIdProperty() { return PremiumsRow.idProperty; }
        protected getInsertPermission() { return PremiumsRow.insertPermission; }
        protected getLocalTextPrefix() { return PremiumsRow.localTextPrefix; }
        protected getService() { return PremiumsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}