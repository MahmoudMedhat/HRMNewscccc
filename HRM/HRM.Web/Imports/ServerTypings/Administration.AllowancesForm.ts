namespace HRM.Administration {
    export interface AllowancesForm {
        AllowancesDescriptions: Serenity.StringEditor;
        Allowance: Serenity.DecimalEditor;
        AllowanceDate: Serenity.DateEditor;
        UserId: UserEditor;
    }

    export class AllowancesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Allowances';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AllowancesForm.init)  {
                AllowancesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = UserEditor;

                Q.initFormType(AllowancesForm, [
                    'AllowancesDescriptions', w0,
                    'Allowance', w1,
                    'AllowanceDate', w2,
                    'UserId', w3
                ]);
            }
        }
    }
}

