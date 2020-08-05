namespace HRM.RequestsStatus {
    export interface VacancyRequestsForm {
        UserId: Serenity.IntegerEditor;
        VacancyId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        IsAcceptedbyHr: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        DateFrom: Serenity.DateEditor;
        Dateto: Serenity.DateEditor;
        MangerComment: Serenity.TextAreaEditor;
    }

    export class VacancyRequestsForm extends Serenity.PrefixedContext {
        static formKey = 'RequestsStatus.VacancyRequests';
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

                Q.initFormType(VacancyRequestsForm, [
                    'UserId', w0,
                    'VacancyId', w1,
                    'StatusId', w1,
                    'IsAcceptedbyHr', w0,
                    'Date', w2,
                    'DateFrom', w2,
                    'Dateto', w2,
                    'MangerComment', w3
                ]);
            }
        }
    }
}

