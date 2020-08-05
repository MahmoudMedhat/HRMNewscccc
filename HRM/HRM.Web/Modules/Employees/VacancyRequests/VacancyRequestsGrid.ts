namespace HRM.Employees {

    import fld = VacancyRequestsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class VacancyRequestsGrid extends Serenity.EntityGrid<VacancyRequestsRow, any> {
        protected getColumnsKey() { return 'Employees.VacancyRequests'; }
        protected getDialogType() { return VacancyRequestsDialog; }
        protected getIdProperty() { return VacancyRequestsRow.idProperty; }
        protected getInsertPermission() { return VacancyRequestsRow.insertPermission; }
        protected getLocalTextPrefix() { return VacancyRequestsRow.localTextPrefix; }
        protected getService() { return VacancyRequestsService.baseUrl; }



        public GetMonthName(month: number): string {
            switch (month) {
                case 1:
                    return "January";
                case 2:
                    return "February";
                case 3:
                    return "March";
                case 4:
                    return "April";
                case 5:
                    return "May";
                case 6:
                    return "June";
                case 7:
                    return "July";
                case 8:
                    return "August";
                case 9:
                    return "September";
                case 10:
                    return "October";
                case 11:
                    return "November";
                case 12:
                    return "December";
                default:
                    return "";
            }
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({

                aggregators: [
                    new Slick.Aggregators.Sum(fld.Total),
                    //new Slick.Aggregators.Max(fld.LimitRelay)

                ]

            });

            return grid;
        }

        protected getColumns() {
            let columns: Slick.Column[] = super.getColumns();
            columns[8].format = ctx => this.GetMonthName(parseInt(Q.formatDate(ctx.value, "MM"))); // Gives 01,02 etc.

            //Q.first(columns, x => x.field === fld.LimitRelay)
            //    .groupTotalsFormatter = (totals, col) =>
            //        (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');


            return columns;
        }


        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        //protected usePager() {
        //    return false;
        //}


        protected getButtons() {

            var buttons = super.getButtons();

            buttons.push(
                {
                    title: 'Group By Balance',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                           
                            getter: fld.Balance,
                            formatter: ctx => this.GetMonthName(parseInt(Q.formatDate(ctx.value, "MM"))) + ' (' + ctx.count + ' items)'
                             
                        }])
                })

            buttons.push({

                title: 'No Balance',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            })
            return buttons;
        }

        constructor(container: JQuery) {
            super(container);

            // Method 1

        }



        //Filter gride by userid
        //protected onViewSubmit() {
        //    // only continue if base class returns true (didn't cancel request)
        //    if (!super.onViewSubmit()) {
        //        return false;
        //    }

        //    // view object is the data source for grid (SlickRemoteView)
        //    // this is an EntityGrid so its Params object is a ListRequest
        //    var request = this.view.params as Serenity.ListRequest;

        //    // list request has a Criteria parameter
        //    // we AND criteria here to existing one because 
        //    // otherwise we might clear filter set by 
        //    // an edit filter dialog if any.

        //    request.Criteria = Serenity.Criteria.and(request.Criteria,
        //        [['UserId'], '=', 1],
        //    );

        //    // TypeScript doesn't support operator overloading
        //    // so we had to use array syntax above to build criteria.

        //    // Make sure you write
        //    // [['Field'], '>', 10] (which means field A is greater than 10)
        //    // not 
        //    // ['A', '>', 10] (which means string 'A' is greater than 10

        //    return true;
        //}

        //protected override ListResponse OnViewProcessData(ListResponse response) {
        //    return base.OnViewProcessData(response);
        //}

    }
}