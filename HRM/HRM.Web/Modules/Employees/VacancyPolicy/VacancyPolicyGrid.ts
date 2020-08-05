
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class VacancyPolicyGrid extends Serenity.EntityGrid<VacancyPolicyRow, any> {
        protected getColumnsKey() { return 'Employees.VacancyPolicy'; }
        protected getDialogType() { return VacancyPolicyDialog; }
        protected getIdProperty() { return VacancyPolicyRow.idProperty; }
        protected getInsertPermission() { return VacancyPolicyRow.insertPermission; }
        protected getLocalTextPrefix() { return VacancyPolicyRow.localTextPrefix; }
        protected getService() { return VacancyPolicyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}