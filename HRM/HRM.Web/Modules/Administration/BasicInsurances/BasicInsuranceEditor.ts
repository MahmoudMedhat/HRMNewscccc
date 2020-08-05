/// <reference path="../../common/helpers/grideditorbase.ts" />
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class BasicInsuranceEditor extends Common.GridEditorBase<BasicInsurancesRow> {
        protected getColumnsKey() { return "Administration.BasicInsurances"; }
        protected getDialogType() { return SubBasicIsuranceDialog; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return BasicInsurancesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);

        }
    }
}