namespace HRM.Employees {
    export interface VacanciesForm {
        Vacancy: Serenity.StringEditor;
    }

    export class VacanciesForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.Vacancies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacanciesForm.init)  {
                VacanciesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VacanciesForm, [
                    'Vacancy', w0
                ]);
            }
        }
    }
}

