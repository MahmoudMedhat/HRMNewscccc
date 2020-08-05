namespace HRM.SalaryDetails {
    export interface EmpLoansForm {
        UserId: Administration.FilterUserEditor;
        Loan: Serenity.DecimalEditor;
        AdvancReason: Serenity.StringEditor;
        InstallmentsList: InstallmentsEditors;
    }

    export class EmpLoansForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.EmpLoans';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpLoansForm.init)  {
                EmpLoansForm.init = true;

                var s = Serenity;
                var w0 = Administration.FilterUserEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = InstallmentsEditors;

                Q.initFormType(EmpLoansForm, [
                    'UserId', w0,
                    'Loan', w1,
                    'AdvancReason', w2,
                    'InstallmentsList', w3
                ]);
            }
        }
    }
}

