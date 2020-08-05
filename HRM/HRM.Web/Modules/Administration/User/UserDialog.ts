namespace HRM.Administration {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey() { return UserForm.formKey; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getNameProperty() { return UserRow.nameProperty; }
        protected getService() { return UserService.baseUrl; }
       
        protected form = new UserForm(this.idPrefix);


        protected onDialogOpen() {

            $('input[name="AttendanceDate"]').hide();
            $('input[name="Departuredate"]').hide();
            $('.AttendanceDate > img.ui-datepicker-trigger').hide();
            $('.Departuredate > img.ui-datepicker-trigger').hide();
            
        }
        protected getToolbarButtons()
        {
           
            let buttons = super.getToolbarButtons();


            buttons.push({
                title: Q.text('Site.UserDialog.EditRolesButton'),
                cssClass: 'edit-roles-button',
                icon: 'fa-users text-blue',
                onClick: () =>
                {
                    new UserRoleDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                        
                    }).dialogOpen();
                }
            });

            buttons.push({
                title: Q.text('Site.UserDialog.EditPermissionsButton'),
                cssClass: 'edit-permissions-button',
                icon: 'fa-lock text-green',
                onClick: () =>
                {
                    new UserPermissionDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                    }).dialogOpen();
                }
            });


            
            return buttons;
        }
       


        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
            this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
          

            // these fields are only required in new record mode
            this.form.Password.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
            this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
        }

       

  
        constructor() {
            super();
            

            //this.AllowancesGrid = new UserAllowancesGrid(this.byId("AllowancesGrid"));
            //this.tabs.on('tabsactivate', (e, i) => {
            //    this.arrange();
                
            //});
            

            this.form.Password.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value.length < 7)
                    return "Password must be at least 7 characters!";
            });

            this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value != this.form.PasswordConfirm.value)
                    return "The passwords entered doesn't match!";
            });

            
        }

     

    }
}