/// <reference path="../../common/helpers/grideditordialog.ts" />

namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class SubUserVanciesLimitDialog extends Common.GridEditorDialog<UserVacanciesLimitRow> {
        protected getFormKey() { return UserVacanciesLimitForm.formKey; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return UserVacanciesLimitRow.localTextPrefix; }
        
        protected form: UserVacanciesLimitForm;

        constructor() {
            super();

            this.form = new UserVacanciesLimitForm(this.idPrefix);

        }
    }
}

