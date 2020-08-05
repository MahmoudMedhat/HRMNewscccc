
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class PremiumstypeGrid extends Serenity.EntityGrid<PremiumstypeRow, any> {
        protected getColumnsKey() { return 'SalaryDetails.Premiumstype'; }
        protected getDialogType() { return PremiumstypeDialog; }
        protected getIdProperty() { return PremiumstypeRow.idProperty; }
        protected getInsertPermission() { return PremiumstypeRow.insertPermission; }
        protected getLocalTextPrefix() { return PremiumstypeRow.localTextPrefix; }
        protected getService() { return PremiumstypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}