namespace HRM.Employees {
    export interface DeparetementsForm {
        Departement: Serenity.StringEditor;
    }

    export class DeparetementsForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.Deparetements';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeparetementsForm.init)  {
                DeparetementsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DeparetementsForm, [
                    'Departement', w0
                ]);
            }
        }
    }
}

