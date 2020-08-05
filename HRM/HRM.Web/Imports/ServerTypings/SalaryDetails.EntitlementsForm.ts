namespace HRM.SalaryDetails {
    export interface EntitlementsForm {
        UserId: Administration.FilterUserEditor;
        UserIdList: Administration.FilterUserEditor;
        Entitlement: Serenity.DecimalEditor;
        EntitlementsDate: Serenity.DateEditor;
        EntitlementReason: Serenity.StringEditor;
    }

    export class EntitlementsForm extends Serenity.PrefixedContext {
        static formKey = 'SalaryDetails.Entitlements';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EntitlementsForm.init)  {
                EntitlementsForm.init = true;

                var s = Serenity;
                var w0 = Administration.FilterUserEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(EntitlementsForm, [
                    'UserId', w0,
                    'UserIdList', w0,
                    'Entitlement', w1,
                    'EntitlementsDate', w2,
                    'EntitlementReason', w3
                ]);
            }
        }
    }
}

