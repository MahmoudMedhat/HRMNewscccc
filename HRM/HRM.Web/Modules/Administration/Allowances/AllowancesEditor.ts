/// <reference path="../../common/helpers/grideditorbase.ts" />
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class AllowancesEditor extends Common.GridEditorBase<AllowancesRow> {
        protected getColumnsKey() { return "Administration.Allowances"; }
        protected getDialogType() { return AllowancesDialog; }
        //protected getIdProperty() { return AllowancesRow.idProperty; }
        protected getLocalTextPrefix() { return AllowancesRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);

        }

        //protected usePager() {
        //    return false;
        //}

        //protected getGridCanLoad() {
        //    return this.personID != null;
        //}

        //private _personID: number;

        //get personID() {
        //    return this._personID;
        //}

        //set personID(value: number) {
        //    if (this._personID != value) {
        //        this._personID = value;
        //        this.setEquality(UserRow.Fields.UserId, value);
        //        this.refresh();
        //    }
        //}



        //validateEntity(row, id) {
        //    row.ProductID = Q.toId(row.ProductID);

        //    var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
        //    if (sameProduct && this.id(sameProduct) !== id) {
        //        Q.alert('This product is already in order details!');
        //        return false;
        //    }

        //    row.ProductName = ProductRow.getLookup().itemById[row.ProductID].ProductName;
        //    row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
        //    return true;
        //}
    }

}