namespace HRM.SalaryDetails {
    export interface DeductionsForm {
        DeductionsReason: Serenity.StringEditor;
        Deduction: Serenity.DecimalEditor;
        DeductionsDate: Serenity.DateEditor;
        UserIdList: Administration.FilterUserEditor;
        UserId: Administration.FilterUserEditor;
    }

    export class DeductionsForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.Deductions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeductionsForm.init)  {
                DeductionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = Administration.FilterUserEditor;

                Q.initFormType(DeductionsForm, [
                    'DeductionsReason', w0,
                    'Deduction', w1,
                    'DeductionsDate', w2,
                    'UserIdList', w3,
                    'UserId', w3
                ]);
            }
        }
    }
}

