namespace HRM.Employees {
    export interface VacancyPolicyForm {
        VacancyId: Serenity.LookupEditor;
        Duration: Serenity.EnumEditor;
        Limit: Serenity.IntegerEditor;
        Sending: Serenity.EnumEditor;
        FromYears: Serenity.DecimalEditor;
        ToYears: Serenity.DecimalEditor;
    }

    export class VacancyPolicyForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.VacancyPolicy';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacancyPolicyForm.init)  {
                VacancyPolicyForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(VacancyPolicyForm, [
                    'VacancyId', w0,
                    'Duration', w1,
                    'Limit', w2,
                    'Sending', w1,
                    'FromYears', w3,
                    'ToYears', w3
                ]);
            }
        }
    }
}

