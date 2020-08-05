namespace HRM.SalaryDetails {
    export interface PremiumstypeForm {
        Premium: Serenity.StringEditor;
    }

    export class PremiumstypeForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.Premiumstype';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PremiumstypeForm.init)  {
                PremiumstypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PremiumstypeForm, [
                    'Premium', w0
                ]);
            }
        }
    }
}

