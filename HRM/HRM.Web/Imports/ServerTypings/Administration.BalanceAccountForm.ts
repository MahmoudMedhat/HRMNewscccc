namespace HRM.Administration {
    export interface BalanceAccountForm {
        DateBeginn: Serenity.DateEditor;
        DateEnd: Serenity.DateEditor;
    }

    export class BalanceAccountForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.BalanceAccount';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BalanceAccountForm.init)  {
                BalanceAccountForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;

                Q.initFormType(BalanceAccountForm, [
                    'DateBeginn', w0,
                    'DateEnd', w0
                ]);
            }
        }
    }
}

