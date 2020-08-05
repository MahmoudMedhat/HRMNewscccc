/// <reference path="../../common/helpers/grideditorbase.ts" />
///// <reference path="../../common/helpers/grideditorbase.ts" />

namespace HRM.SalaryDetails {
  
    @Serenity.Decorators.registerClass()
    export class SubInstallmentsDialog extends Common.GridEditorDialog<InstallmentsRow> {
        protected getFormKey() { return InstallmentsForm.formKey; }
        protected getLocalTextPrefix() { return InstallmentsRow.localTextPrefix; }
        protected form: InstallmentsForm;
        constructor() {
            super();
            this.form = new InstallmentsForm(this.idPrefix);
        }
    }
}
