namespace HRM.Administration {

    import fld = UserRow.Fields;

    @Serenity.Decorators.registerClass()

    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return "Administration.User"; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }


        


       
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();

            Q.first(filters, x => x.field == UserRow.Fields.Status).init = w => {
                // enum editor has a string value, so need to call toString()
                (w as Serenity.EnumEditor).value = UserStatusEnum.Employee.toString()
                
            };

            return filters;
        
        }

        //protected createQuickFilters(): void {

        //    // let base class to create quick filters first
        //    super.createQuickFilters();

        //    // find a quick filter widget by its field name
        //    this.findQuickFilter(Serenity.LookupEditor, fld.Status).values = ["1", "2","3"];
        //}


        protected getColumns() {
            let columns: Slick.Column[] = super.getColumns();
            columns[14].format = ctx => Q.formatDate(ctx.value, "HH:MM:ss"); 
            columns[15].format = ctx => Q.formatDate(ctx.value, "HH:MM:ss"); 
            return columns;
        }
        constructor(container: JQuery) {
            //UserService.Create({ Entity: {user} })
            
            super(container);
            super.rowCount();

            

        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }
    }
}