namespace HRM.Administration {
    export interface EmploeesStatusForm {
        UserId: Serenity.LookupEditor;
        EmpSDate: Serenity.DateEditor;
        EmploymentStatusID: Serenity.LookupEditor;
    }

    export class EmploeesStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.EmploeesStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmploeesStatusForm.init)  {
                EmploeesStatusForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmploeesStatusForm, [
                    'UserId', w0,
                    'EmpSDate', w1,
                    'EmploymentStatusID', w0
                ]);
            }
        }
    }
}

