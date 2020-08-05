
namespace HRM.Administration {
    import fld = HRM.Administration.BalanceAccountRow.Fields;
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BalanceAccountGrid extends Serenity.EntityGrid<BalanceAccountRow, any> {
        protected getColumnsKey() { return 'Administration.BalanceAccount'; }
        protected getDialogType() { return BalanceAccountDialog; }
        protected getIdProperty() { return BalanceAccountRow.idProperty; }
        protected getInsertPermission() { return BalanceAccountRow.insertPermission; }
        protected getLocalTextPrefix() { return BalanceAccountRow.localTextPrefix; }
        protected getService() { return BalanceAccountService.baseUrl; }

      

        constructor(container: JQuery) {
            super(container);

        }


        //getButtons() {
        //    var buttons = super.getButtons();


        //    //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
        //    //buttons.push(
        //    //    {
        //    //        title: Q.text("Close the Budget"),	// *** Get button text from translation
        //    //        cssClass: 'stampe',
        //    //        icon: 'fa-print',

        //    //        onClick: () => {
        //    //            BalanceAccountService.CreateAll({ // Adding button and  adding table with End Balance
                            
        //    //                Entity: {

        //    //                }

        //    //            }, response => {
        //    //                this.refresh();
        //    //                Q.notifySuccess("Success");
        //    //            })
        //    //        },
        //    //    },
        //    );

        //    return buttons;
        //}



        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            return columns;
        }
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: HRM.Administration.BalanceAccountRow, index: number): string {
            let klass: string = "";
            var Month = new Date(item.DateEnd);
            var MonthNow = (new Date().getUTCMonth()) + 1;;
            var MonthTable = (parseInt(Month.getUTCMonth().toString())) + 1;
            if (MonthNow < MonthTable) { //4ahr Lsa mgash

                klass += "Next-month";
            }
            else if (MonthNow > MonthTable) {

                klass += "Last-month";
            }
            else {

                klass += "Current-month ";
            }


            return Q.trimToNull(klass);
        }

    }
}