
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class EmpLoansGrid extends Serenity.EntityGrid<EmpLoansRow, any> {
        protected getColumnsKey() { return 'SalaryDetails.EmpLoans'; }
        protected getDialogType() { return EmpLoansDialog; }
        protected getIdProperty() { return EmpLoansRow.idProperty; }
        protected getInsertPermission() { return EmpLoansRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpLoansRow.localTextPrefix; }
        protected getService() { return EmpLoansService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}