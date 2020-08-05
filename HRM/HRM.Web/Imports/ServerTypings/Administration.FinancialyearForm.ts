namespace HRM.Administration {
    export interface FinancialyearForm {
        DateFrom: Serenity.DateEditor;
        DateTo: Serenity.DateEditor;
        Status: Serenity.BooleanEditor;
    }

    export class FinancialyearForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Financialyear';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FinancialyearForm.init)  {
                FinancialyearForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(FinancialyearForm, [
                    'DateFrom', w0,
                    'DateTo', w0,
                    'Status', w1
                ]);
            }
        }
    }
}

