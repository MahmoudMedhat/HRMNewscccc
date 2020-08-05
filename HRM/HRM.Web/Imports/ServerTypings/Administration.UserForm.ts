namespace HRM.Administration {
    export interface UserForm {
        UserId: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        FingerPrintCode: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        EducationalQualification: Serenity.StringEditor;
        GraduationYears: Serenity.DateEditor;
        MilitaryStatus: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Personalidentification: Serenity.IntegerEditor;
        Religion: Serenity.EnumEditor;
        PersonalPhoneNumber: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        HireDate: Serenity.DateEditor;
        MangerID: FilterUserEditor;
        JobID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Status: Serenity.LookupEditor;
        IsActive: Serenity.IntegerEditor;
        AttendanceDate: Serenity.DateTimeEditor;
        Departuredate: Serenity.DateTimeEditor;
        UserVacanciesLimit: UserVanciesLimitEditor;
        AlowancesList: AllowancesEditor;
        InsuranceList: BasicInsuranceEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;
                var w5 = s.DateEditor;
                var w6 = s.EnumEditor;
                var w7 = FilterUserEditor;
                var w8 = s.LookupEditor;
                var w9 = s.DecimalEditor;
                var w10 = s.DateTimeEditor;
                var w11 = UserVanciesLimitEditor;
                var w12 = AllowancesEditor;
                var w13 = BasicInsuranceEditor;

                Q.initFormType(UserForm, [
                    'UserId', w0,
                    'Username', w1,
                    'DisplayName', w1,
                    'FingerPrintCode', w1,
                    'Email', w2,
                    'UserImage', w3,
                    'Password', w4,
                    'PasswordConfirm', w4,
                    'EducationalQualification', w1,
                    'GraduationYears', w5,
                    'MilitaryStatus', w1,
                    'Birthdate', w5,
                    'Personalidentification', w0,
                    'Religion', w6,
                    'PersonalPhoneNumber', w0,
                    'Address', w1,
                    'Source', w1,
                    'HireDate', w5,
                    'MangerID', w7,
                    'JobID', w8,
                    'Balance', w9,
                    'Status', w8,
                    'IsActive', w0,
                    'AttendanceDate', w10,
                    'Departuredate', w10,
                    'UserVacanciesLimit', w11,
                    'AlowancesList', w12,
                    'InsuranceList', w13
                ]);
            }
        }
    }
}

