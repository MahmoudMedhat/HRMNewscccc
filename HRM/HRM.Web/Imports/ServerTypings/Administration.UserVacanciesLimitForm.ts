namespace HRM.Administration {
    export interface UserVacanciesLimitForm {
        VacancyId: Serenity.LookupEditor;
        Limit: Serenity.IntegerEditor;
    }

    export class UserVacanciesLimitForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.UserVacanciesLimit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserVacanciesLimitForm.init)  {
                UserVacanciesLimitForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(UserVacanciesLimitForm, [
                    'VacancyId', w0,
                    'Limit', w1
                ]);
            }
        }
    }
}

