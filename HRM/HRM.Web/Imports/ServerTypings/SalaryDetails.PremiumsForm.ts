namespace HRM.SalaryDetails {
    export interface PremiumsForm {
        UserIdList: Administration.FilterUserEditor;
        UserId: Administration.FilterUserEditor;
        PremiumQuantity: Serenity.DecimalEditor;
        PremiumDate: Serenity.DateEditor;
        premiumType: Serenity.LookupEditor;
    }

    export class PremiumsForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.Premiums';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PremiumsForm.init)  {
                PremiumsForm.init = true;

                var s = Serenity;
                var w0 = Administration.FilterUserEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(PremiumsForm, [
                    'UserIdList', w0,
                    'UserId', w0,
                    'PremiumQuantity', w1,
                    'PremiumDate', w2,
                    'premiumType', w3
                ]);
            }
        }
    }
}

