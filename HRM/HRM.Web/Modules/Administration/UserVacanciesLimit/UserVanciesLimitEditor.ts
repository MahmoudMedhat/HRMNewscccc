/// <reference path="../../common/helpers/grideditorbase.ts" />

namespace HRM.Administration {
    
    @Serenity.Decorators.registerClass()
    export class UserVanciesLimitEditor extends Common.GridEditorBase<UserVacanciesLimitRow> {
        protected getColumnsKey() { return "Administration.UserVacanciesLimit"; }
        protected getDialogType() { return SubUserVanciesLimitDialog; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return UserVacanciesLimitRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);

        }

        validateEntity(row, id) {
            row.VacancyId = Q.toId(row.VacancyId);

            //row.UserId = Q.toId(row.UserId);


            row.Vacancy = HRM.Employees.VacanciesRow.getLookup().itemById[row.VacancyId].Vacancy;
            //row.UserUsername = HRM.Administration.UserRow.getLookup().itemById[row.UserId].Username;

            return true;
        }
    }
}