/// <reference path="../../common/helpers/grideditorbase.ts" />
namespace HRM.SalaryDetails {

    @Serenity.Decorators.registerClass()
    export class InstallmentsEditor extends Common.GridEditorBase<InstallmentsRow> {
        protected getColumnsKey() { return "SalaryDetails.Installments"; }
        protected getDialogType() { return InstallmentsDialog; }
       
        protected getLocalTextPrefix() { return InstallmentsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);

        }
    }

}