
namespace HRM.Employees {

    @Serenity.Decorators.registerClass()
    export class JobsDialog extends Serenity.EntityDialog<JobsRow, any> {
        protected getFormKey() { return JobsForm.formKey; }
        protected getIdProperty() { return JobsRow.idProperty; }
        protected getLocalTextPrefix() { return JobsRow.localTextPrefix; }
        protected getNameProperty() { return JobsRow.nameProperty; }
        protected getService() { return JobsService.baseUrl; }
        protected getDeletePermission() { return JobsRow.deletePermission; }
        protected getInsertPermission() { return JobsRow.insertPermission; }
        protected getUpdatePermission() { return JobsRow.updatePermission; }

        protected form = new JobsForm(this.idPrefix);

    }
}