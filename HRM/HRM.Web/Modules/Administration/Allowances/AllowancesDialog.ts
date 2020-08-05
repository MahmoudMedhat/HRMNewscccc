/// <reference path="../../common/helpers/grideditordialog.ts" />

namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class AllowancesDialog extends Common.GridEditorDialog<AllowancesRow> {
        protected getFormKey() { return AllowancesForm.formKey; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return AllowancesRow.localTextPrefix; }
        protected getNameProperty() { return AllowancesRow.nameProperty; }
        //protected getService() { return AllowancesService.baseUrl; }
        //protected getDeletePermission() { return AllowancesRow.deletePermission; }
        //protected getInsertPermission() { return AllowancesRow.insertPermission; }
        //protected getUpdatePermission() { return AllowancesRow.updatePermission; }

        protected form: AllowancesForm;


        constructor() {
            super();

            this.form = new AllowancesForm(this.idPrefix);

           
        }

    }
}