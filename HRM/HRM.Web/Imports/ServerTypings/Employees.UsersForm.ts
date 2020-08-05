namespace HRM.Employees {
    export interface UsersForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        EducationalQualification: Serenity.StringEditor;
        GraduationYears: Serenity.DateEditor;
        MilitaryStatus: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Personalidentification: Serenity.IntegerEditor;
        PersonalPhoneNumber: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        FingerPrintCode: Serenity.StringEditor;
        HireDate: Serenity.DateEditor;
        MangerID: Serenity.LookupEditor;
        JobId: Serenity.LookupEditor;
        BaseSalary: Serenity.DecimalEditor;
        AllowanceDescriptions: Serenity.StringEditor;
        Allowance: Serenity.DecimalEditor;
        Insurance: Serenity.StringEditor;
        insurancesQ: Serenity.DecimalEditor;
        AttendanceDate: Serenity.DateEditor;
        Departuredate: Serenity.DateEditor;
        CasualVacancy: Serenity.IntegerEditor;
        Regularvacation: Serenity.IntegerEditor;
        AnnualLeave: Serenity.IntegerEditor;
    }

    export class UsersForm extends Serenity.PrefixedContext {
        static formKey = 'Employees.Users';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UsersForm.init)  {
                UsersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.PasswordEditor;
                var w4 = s.DateEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.LookupEditor;
                var w7 = s.DecimalEditor;

                Q.initFormType(UsersForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'UserImage', w2,
                    'Password', w3,
                    'PasswordConfirm', w3,
                    'EducationalQualification', w0,
                    'GraduationYears', w4,
                    'MilitaryStatus', w0,
                    'Birthdate', w4,
                    'Personalidentification', w5,
                    'PersonalPhoneNumber', w5,
                    'Address', w0,
                    'Source', w0,
                    'FingerPrintCode', w0,
                    'HireDate', w4,
                    'MangerID', w6,
                    'JobId', w6,
                    'BaseSalary', w7,
                    'AllowanceDescriptions', w0,
                    'Allowance', w7,
                    'Insurance', w0,
                    'insurancesQ', w7,
                    'AttendanceDate', w4,
                    'Departuredate', w4,
                    'CasualVacancy', w5,
                    'Regularvacation', w5,
                    'AnnualLeave', w5
                ]);
            }
        }
    }
}

