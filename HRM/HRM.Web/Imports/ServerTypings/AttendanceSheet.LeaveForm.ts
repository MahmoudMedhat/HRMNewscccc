namespace HRM.AttendanceSheet {
    export interface LeaveForm {
        Date: Serenity.DateEditor;
        FingerPrint: Serenity.StringEditor;
        CheckIn: Serenity.DateEditor;
        CheckOut: Serenity.DateEditor;
        IpAddress: Serenity.StringEditor;
        Device: Serenity.StringEditor;
    }

    export class LeaveForm extends Serenity.PrefixedContext {
        static formKey = 'AttendanceSheet.Leave';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaveForm.init)  {
                LeaveForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;

                Q.initFormType(LeaveForm, [
                    'Date', w0,
                    'FingerPrint', w1,
                    'CheckIn', w0,
                    'CheckOut', w0,
                    'IpAddress', w1,
                    'Device', w1
                ]);
            }
        }
    }
}

