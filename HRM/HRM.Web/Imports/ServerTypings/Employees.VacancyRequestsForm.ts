namespace HRM.Employees {
    export interface VacancyRequestsForm {
        Id: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        VacancyId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateEditor;
        Dateto: Serenity.DateEditor;
        Total: Serenity.IntegerEditor;
        UserComment: Serenity.TextAreaEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.EnumEditor;
        Limit_in_Inser: Serenity.IntegerEditor;
        TotlaLimit_relay: Serenity.IntegerEditor;
        LeaveTaken: Serenity.IntegerEditor;
    }

    export class VacancyRequestsForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.VacancyRequests';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacancyRequestsForm.init)  {
                VacancyRequestsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(VacancyRequestsForm, [
                    'Id', w0,
                    'UserId', w0,
                    'VacancyId', w1,
                    'Date', w2,
                    'DateFrom', w2,
                    'Dateto', w2,
                    'Total', w0,
                    'UserComment', w3,
                    'StatusId', w1,
                    'IsAcceptedbyHr', w4,
                    'Limit_in_Inser', w0,
                    'TotlaLimit_relay', w0,
                    'LeaveTaken', w0
                ]);
            }
        }
    }
}

