namespace HRM.RequestsStatus {
    export interface PermissionRequestsForm {
        UserId: Serenity.IntegerEditor;
        PermissionId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateTimeEditor;
        Dateto: Serenity.DateTimeEditor;
    }

    export class PermissionRequestsForm extends Serenity.PrefixedContext {
        static formKey = 'RequestsStatus.PermissionRequests';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PermissionRequestsForm.init)  {
                PermissionRequestsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.DateTimeEditor;

                Q.initFormType(PermissionRequestsForm, [
                    'UserId', w0,
                    'PermissionId', w1,
                    'StatusId', w1,
                    'IsAcceptedbyHr', w0,
                    'Date', w2,
                    'DateFrom', w3,
                    'Dateto', w3
                ]);
            }
        }
    }
}

