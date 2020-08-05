namespace HRM.RequestsStatus {
    export interface EmpLoansForm {
        Loan: Serenity.DecimalEditor;
        UserId: Serenity.IntegerEditor;
        Id: Serenity.IntegerEditor;
        IsAccepted: Serenity.EnumEditor;
        InstallmentsList: InstallmentsRequestEditor;
    }

    export class EmpLoansForm extends Serenity.PrefixedContext {
        static formKey = 'RequestsStatus.EmpLoans';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpLoansForm.init)  {
                EmpLoansForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.EnumEditor;
                var w3 = InstallmentsRequestEditor;

                Q.initFormType(EmpLoansForm, [
                    'Loan', w0,
                    'UserId', w1,
                    'Id', w1,
                    'IsAccepted', w2,
                    'InstallmentsList', w3
                ]);
            }
        }
    }
}

