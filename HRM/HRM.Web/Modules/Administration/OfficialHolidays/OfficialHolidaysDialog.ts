
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class OfficialHolidaysDialog extends Serenity.EntityDialog<OfficialHolidaysRow, any> {
        protected getFormKey() { return OfficialHolidaysForm.formKey; }
        protected getIdProperty() { return OfficialHolidaysRow.idProperty; }
        protected getLocalTextPrefix() { return OfficialHolidaysRow.localTextPrefix; }
        protected getNameProperty() { return OfficialHolidaysRow.nameProperty; }
        protected getService() { return OfficialHolidaysService.baseUrl; }
        protected getDeletePermission() { return OfficialHolidaysRow.deletePermission; }
        protected getInsertPermission() { return OfficialHolidaysRow.insertPermission; }
        protected getUpdatePermission() { return OfficialHolidaysRow.updatePermission; }

        protected form = new OfficialHolidaysForm(this.idPrefix);

        
        protected getToolbarButtons() {
            let IsClick;
            let buttons = super.getToolbarButtons();
            buttons.push({
                icon: Q.text("fa fa-adjust"),
                cssClass: Q.text("Weekdays"),

                onClick: () => {
                    if (IsClick == false) {
                        IsClick = true;
                        this.form.FromHoliday.getGridField().toggle(true);
                        this.form.ToHoliday.getGridField().toggle(true);
                        this.form.weekdays.getGridField().toggle(false);
                    }
                    else {
                        IsClick = false;
                        this.form.FromHoliday.getGridField().toggle(false);
                        this.form.ToHoliday.getGridField().toggle(false);
                        this.form.weekdays.getGridField().toggle(true);

                    }


                }
            });
            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.form.FromHoliday.value != null || this.form.ToHoliday.value != null) {

                this.form.FromHoliday.getGridField().toggle(true);
                this.form.ToHoliday.getGridField().toggle(true);
                this.form.weekdays.getGridField().toggle(false);
            }
            else if (this.form.weekdays.value != "") {

                this.form.FromHoliday.getGridField().toggle(false);
                this.form.ToHoliday.getGridField().toggle(false);
                this.form.weekdays.getGridField().toggle(true);
            }
        }

        constructor() {
            super();
            

            this.form.weekdays.addValidationRule(this.uniqueName, e => {
                if (this.form.FromHoliday.value != null || this.form.ToHoliday.value != null)
                    return "Remove this value !";
            });

            this.form.FromHoliday.addValidationRule(this.uniqueName, e => {

                if (this.form.weekdays.value != "")
                    return "Remove this value !";
            })

            this.form.ToHoliday.addValidationRule(this.uniqueName, e => {

                if (this.form.weekdays.value != "")
                    return "Remove this value !";

            })
        }
    }
}