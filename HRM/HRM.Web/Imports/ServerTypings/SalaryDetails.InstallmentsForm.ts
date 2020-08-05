namespace HRM.SalaryDetails {
    export interface InstallmentsForm {
        UserId: Serenity.IntegerEditor;
        Loanid: Serenity.IntegerEditor;
        InstallmentValues: Serenity.DecimalEditor;
        InstallmentDate: Serenity.DateEditor;
    }

    export class InstallmentsForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.Installments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstallmentsForm.init)  {
                InstallmentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(InstallmentsForm, [
                    'UserId', w0,
                    'Loanid', w0,
                    'InstallmentValues', w1,
                    'InstallmentDate', w2
                ]);
            }
        }
    }
}

