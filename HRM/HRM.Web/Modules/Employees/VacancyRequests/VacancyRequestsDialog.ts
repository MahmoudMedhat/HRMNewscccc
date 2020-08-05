
namespace HRM.Employees {

    import fld = VacancyRequestsRow.Fields;
    @Serenity.Decorators.registerClass()


    export class VacancyRequestsDialog extends Serenity.EntityDialog<VacancyRequestsRow, any> {
        protected getFormKey() { return VacancyRequestsForm.formKey; }
        protected getIdProperty() { return VacancyRequestsRow.idProperty; }
        protected getLocalTextPrefix() { return VacancyRequestsRow.localTextPrefix; }
        protected getService() { return VacancyRequestsService.baseUrl; }
        protected getDeletePermission() { return VacancyRequestsRow.deletePermission; }
        protected getInsertPermission() { return VacancyRequestsRow.insertPermission; }
        protected getUpdatePermission() { return VacancyRequestsRow.updatePermission; }
        protected form = new VacancyRequestsForm(this.idPrefix);

        protected onDialogOpen() {

            VacancyRequestsService.Total_Limits({

                Entity: {
                    VacancyId: parseInt(this.form.VacancyId.value),
                    DateFrom: this.form.DateFrom.value,
                    Dateto: this.form.Dateto.value
                }
            }, response => {
                this.form.Total.value = response.YourVacancyRequest;

            }

            )

            $('input[name=DateFrom],input[name=Dateto]').on('change', function () {

                //var DateFrom = $('input[name=DateFrom]').val();
                //var Dateto = $('input[name=Dateto]').val();

                //var start: any = new Date(DateFrom);
                //var end: any = new Date(Dateto);
                //var diffDate = (end - start) / (1000 * 60 * 60 * 24);
                //var days = Math.round(diffDate);
                //$('input[name=Total]').val(days);


                VacancyRequestsService.Total_Limits({

                    Entity: {
                        VacancyId: parseInt(this.form.VacancyId.value),
                        DateFrom: this.form.DateFrom.value,
                        Dateto: this.form.Dateto.value
                    }
                }, response => {
                    this.form.Total.value = response.YourVacancyRequest;

                }

                )
            });

            }
    

        protected afterLoadEntity() {
            super.afterLoadEntity();


            if (this.form.TotlaLimit_relay.value == null || this.form.TotlaLimit_relay.value == 0) {
                this.form.TotlaLimit_relay.getGridField().toggle(false);
            }

           
            this.form.VacancyId.changeSelect2(e => {
                if (this.form.VacancyId.value != null && this.form.DateFrom.value != null
                    && this.form.Dateto.value != null) {

                    VacancyRequestsService.Total_Limits({

                        Entity: {
                            VacancyId: parseInt(this.form.VacancyId.value),
                            DateFrom: this.form.DateFrom.value,
                            Dateto: this.form.Dateto.value
                        }
                    }, response => {

                        this.form.TotlaLimit_relay.value = response.TotalSum
                        this.form.LeaveTaken.value = response.AllVactions
                        this.form.Limit_in_Inser.value = response.Limit

                        if (this.form.TotlaLimit_relay.value != 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(true);
                        }
                        else if (this.form.TotlaLimit_relay.value == 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(false);
                        }
                        if (this.form.LeaveTaken.value != null) {
                            this.form.LeaveTaken.getGridField().toggle(true);
                        }
                        else if (this.form.LeaveTaken.value == null) {
                            this.form.LeaveTaken.getGridField().toggle(false);
                        }
                        if (this.form.Limit_in_Inser.value != null) {
                            this.form.Limit_in_Inser.getGridField().toggle(true);
                           
                        }
                        else if (this.form.Limit_in_Inser.value == null) {
                            this.form.Limit_in_Inser.getGridField().toggle(false);
                           
                        }



                    })

                }


            })

            this.form.DateFrom.changeSelect2(e => {

                if (this.form.VacancyId.value != null && this.form.DateFrom.value != null
                    && this.form.Dateto.value != null) {

                    VacancyRequestsService.Total_Limits({

                        Entity: {
                            VacancyId: parseInt(this.form.VacancyId.value),
                            DateFrom: this.form.DateFrom.value,
                            Dateto: this.form.Dateto.value
                        }
                    }, response => {



                        this.form.TotlaLimit_relay.value = response.TotalSum
                        this.form.LeaveTaken.value = response.AllVactions
                        this.form.Limit_in_Inser.value = response.Limit


                        if (this.form.TotlaLimit_relay.value != 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(true);
                        }
                        else if (this.form.TotlaLimit_relay.value == 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(false);
                        }
                        if (this.form.LeaveTaken.value != null) {
                            this.form.LeaveTaken.getGridField().toggle(true);
                        }
                        else if (this.form.LeaveTaken.value == null) {
                            this.form.LeaveTaken.getGridField().toggle(false);
                        }
                        if (this.form.Limit_in_Inser.value != null) {
                            this.form.Limit_in_Inser.getGridField().toggle(true);
                            //this.form.LimitNotRelay.getGridField().toggle(false);
                        }
                        else if (this.form.Limit_in_Inser.value == null) {
                            this.form.Limit_in_Inser.getGridField().toggle(false);
                            //this.form.LimitNotRelay.getGridField().toggle(true);
                        }

                    })

                }


            })

            this.form.Dateto.changeSelect2(e => {
                if (this.form.VacancyId.value != null && this.form.DateFrom.value != null
                    && this.form.Dateto.value != null) {

                    VacancyRequestsService.Total_Limits({

                        Entity: {
                            VacancyId: parseInt(this.form.VacancyId.value),
                            DateFrom: this.form.DateFrom.value,
                            Dateto: this.form.Dateto.value
                        }
                    }, response => {

                        this.form.TotlaLimit_relay.value = response.TotalSum
                        this.form.LeaveTaken.value = response.AllVactions
                        this.form.Limit_in_Inser.value = response.Limit

                        if (this.form.TotlaLimit_relay.value != 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(true);
                        }
                        else if (this.form.TotlaLimit_relay.value == 0) {
                            this.form.TotlaLimit_relay.getGridField().toggle(false);
                        }
                        if (this.form.LeaveTaken.value != null) {
                            this.form.LeaveTaken.getGridField().toggle(true);
                        }
                        else if (this.form.LeaveTaken.value == null) {
                            this.form.LeaveTaken.getGridField().toggle(false);
                        }
                        if (this.form.Limit_in_Inser.value != null) {
                            this.form.Limit_in_Inser.getGridField().toggle(true);
                            //this.form.LimitNotRelay.getGridField().toggle(false);
                        }
                        else if (this.form.Limit_in_Inser.value == null) {
                            this.form.Limit_in_Inser.getGridField().toggle(false);
                            //this.form.LimitNotRelay.getGridField().toggle(true);
                        }

                    })

                }

            })


            if (this.form.VacancyId.value != "") {
                VacancyRequestsService.Total_Limits({
                    Entity: {
                        VacancyId: parseInt(this.form.VacancyId.value),
                        DateFrom: this.form.DateFrom.value,
                        Dateto: this.form.Dateto.value
                    }
                }, response => {

                    this.form.TotlaLimit_relay.value = response.TotalSum
                    this.form.LeaveTaken.value = response.AllVactions
                    this.form.Limit_in_Inser.value = response.Limit

                    if (this.form.TotlaLimit_relay.value != 0) {
                        this.form.TotlaLimit_relay.getGridField().toggle(true);
                    }
                    else if (this.form.TotlaLimit_relay.value == 0) {
                        this.form.TotlaLimit_relay.getGridField().toggle(false);
                    }
                    if (this.form.LeaveTaken.value != null) {
                        this.form.LeaveTaken.getGridField().toggle(true);
                    }
                    else if (this.form.LeaveTaken.value == null) {
                        this.form.LeaveTaken.getGridField().toggle(false);
                    }
                    if (this.form.Limit_in_Inser.value != null) {
                        this.form.Limit_in_Inser.getGridField().toggle(true);
                        //this.form.LimitNotRelay.getGridField().toggle(false);
                    }
                    else if (this.form.Limit_in_Inser.value == null) {
                        this.form.Limit_in_Inser.getGridField().toggle(false);
                        //this.form.LimitNotRelay.getGridField().toggle(true);
                    }


                })


            }
             //If Request are accepted Disapled Edite
            if (this.form.IsAcceptedbyHr.value == "1" || this.form.StatusId.value == "1" ||
                this.form.IsAcceptedbyHr.value == "2" || this.form.StatusId.value == "2") {

                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.toggleClass('disabled', true);
                this.applyChangesButton.toggleClass('disabled', true);
                this.saveAndCloseButton.toggleClass('disabled', true);

            }

        }



        constructor(container: JQuery) {
            super(container);


        }

    }
}

