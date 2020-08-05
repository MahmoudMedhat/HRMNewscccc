namespace HRM.Default {
    export interface EmploymentStatusForm {
        Status: Serenity.StringEditor;
    }

    export class EmploymentStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmploymentStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmploymentStatusForm.init)  {
                EmploymentStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EmploymentStatusForm, [
                    'Status', w0
                ]);
            }
        }
    }
}

