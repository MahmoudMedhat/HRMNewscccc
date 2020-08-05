/// <reference path="../../common/helpers/grideditordialog.ts" />

namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class SubBasicIsuranceDialog extends Common.GridEditorDialog<BasicInsurancesRow> {
        protected getFormKey() { return BasicInsurancesForm.formKey; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return BasicInsurancesRow.localTextPrefix; }
        //protected getNameProperty() { return AllowancesRow.nameProperty; }
        //protected getService() { return AllowancesService.baseUrl; }
        //protected getDeletePermission() { return AllowancesRow.deletePermission; }
        //protected getInsertPermission() { return AllowancesRow.insertPermission; }
        //protected getUpdatePermission() { return AllowancesRow.updatePermission; }

        protected form: BasicInsurancesForm;


        constructor() {
            super();

            this.form = new BasicInsurancesForm(this.idPrefix);

        }
    }
}

