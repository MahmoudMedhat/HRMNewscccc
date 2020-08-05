namespace HRM.Administration {

    @Serenity.Decorators.registerEditor()
    export class FilterUserEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, UserRow> {

        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions) {
            super(hidden, opt);

        }

        protected getItems(lookup: Q.Lookup<UserRow>) {

            return super.getItems(lookup).filter(x => x.UserId != 1 && x.Status == 1);
        }

        protected getLookupKey() {
            return UserRow.lookupKey;
        }

        protected getItemText(item, lookup) {
           
            return super.getItemText(item, lookup) + ' [' + item.Jobtype + ']';
        }


       
    }
}