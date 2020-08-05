namespace HRM.AttendanceSheet {
    export interface AttendanceSheetForm {
        EmployeeName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Status_Out: Serenity.EnumEditor;
        Remark_Out: Serenity.StringEditor;
        Status_In: Serenity.EnumEditor;
        Remarks: Serenity.StringEditor;
        AttendanceDate: Serenity.DateEditor;
        Reason: Serenity.StringEditor;
    }

    export class AttendanceSheetForm extends Serenity.PrefixedContext {
        static formKey = 'AttendanceSheet.AttendanceSheet';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendanceSheetForm.init)  {
                AttendanceSheetForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AttendanceSheetForm, [
                    'EmployeeName', w0,
                    'Email', w0,
                    'Status_Out', w1,
                    'Remark_Out', w0,
                    'Status_In', w1,
                    'Remarks', w0,
                    'AttendanceDate', w2,
                    'Reason', w0
                ]);
            }
        }
    }
}

