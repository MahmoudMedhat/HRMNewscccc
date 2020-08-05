
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class DeductionsGrid extends Serenity.EntityGrid<DeductionsRow, any> {
        protected getColumnsKey() { return 'SalaryDetails.Deductions'; }
        protected getDialogType() { return DeductionsDialog; }
        protected getIdProperty() { return DeductionsRow.idProperty; }
        protected getInsertPermission() { return DeductionsRow.insertPermission; }
        protected getLocalTextPrefix() { return DeductionsRow.localTextPrefix; }
        protected getService() { return DeductionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}