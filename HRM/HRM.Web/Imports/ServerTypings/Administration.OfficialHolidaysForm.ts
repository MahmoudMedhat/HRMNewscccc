namespace HRM.Administration {
    export interface OfficialHolidaysForm {
        FromHoliday: Serenity.DateEditor;
        ToHoliday: Serenity.DateEditor;
        TheReasonOfHoliday: Serenity.TextAreaEditor;
        weekdays: Serenity.EnumEditor;
        Religion: Serenity.EnumEditor;
    }

    export class OfficialHolidaysForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.OfficialHolidays';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OfficialHolidaysForm.init)  {
                OfficialHolidaysForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(OfficialHolidaysForm, [
                    'FromHoliday', w0,
                    'ToHoliday', w0,
                    'TheReasonOfHoliday', w1,
                    'weekdays', w2,
                    'Religion', w2
                ]);
            }
        }
    }
}

