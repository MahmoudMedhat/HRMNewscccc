namespace HRM.Administration {

    @Serenity.Decorators.registerEditor()
    export class UserEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, UserRow> {

        constructor(hidden: JQuery, opt?: Serenity.Select2CommonOptions) {
            super(hidden, opt);
           
            //this.addItem({ id: "CreditCard", text: "Credit Card" });
            //this.addItem({ id: "Check", text: "Check" });
            //this.addItem({ id: "Cash", text: "Cash" });
            //this.addItem({ id: "CreditCardPos", text: "Credit Card (POS)" });
        }

        protected getLookupKey() {
            return UserRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.Jobtype + ']';
        }
    }


}