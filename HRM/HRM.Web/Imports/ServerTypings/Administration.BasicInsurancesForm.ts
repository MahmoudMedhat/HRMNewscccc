namespace HRM.Administration {
    export interface BasicInsurancesForm {
        Insurance: Serenity.StringEditor;
        InsurancesQ: Serenity.DecimalEditor;
        InsuranceDate: Serenity.DateEditor;
        UserId: FilterUserEditor;
    }

    export class BasicInsurancesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.BasicInsurances';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BasicInsurancesForm.init)  {
                BasicInsurancesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = FilterUserEditor;

                Q.initFormType(BasicInsurancesForm, [
                    'Insurance', w0,
                    'InsurancesQ', w1,
                    'InsuranceDate', w2,
                    'UserId', w3
                ]);
            }
        }
    }
}

