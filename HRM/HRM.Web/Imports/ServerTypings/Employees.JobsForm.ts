namespace HRM.Employees {
    export interface JobsForm {
        Jobtitle: Serenity.StringEditor;
        DepartementId: Serenity.IntegerEditor;
    }

    export class JobsForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.Jobs';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobsForm.init)  {
                JobsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(JobsForm, [
                    'Jobtitle', w0,
                    'DepartementId', w1
                ]);
            }
        }
    }
}

