
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class VacanciesGrid extends Serenity.EntityGrid<VacanciesRow, any> {
        protected getColumnsKey() { return 'Employees.Vacancies'; }
        protected getDialogType() { return VacanciesDialog; }
        protected getIdProperty() { return VacanciesRow.idProperty; }
        protected getInsertPermission() { return VacanciesRow.insertPermission; }
        protected getLocalTextPrefix() { return VacanciesRow.localTextPrefix; }
        protected getService() { return VacanciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}