namespace HRM.RequestsStatus {
    export interface PermissionStatusForm {
        Permissiontype: Serenity.StringEditor;
    }

    export class PermissionStatusForm extends Serenity.PrefixedContext {
        static formKey = 'RequestsStatus.PermissionStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PermissionStatusForm.init)  {
                PermissionStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PermissionStatusForm, [
                    'Permissiontype', w0
                ]);
            }
        }
    }
}

