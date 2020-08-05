
namespace HRM.Administration {

    @Serenity.Decorators.registerClass()
    export class OfficialHolidaysGrid extends Serenity.EntityGrid<OfficialHolidaysRow, any> {
        protected getColumnsKey() { return 'Administration.OfficialHolidays'; }
        protected getDialogType() { return OfficialHolidaysDialog; }
        protected getIdProperty() { return OfficialHolidaysRow.idProperty; }
        protected getInsertPermission() { return OfficialHolidaysRow.insertPermission; }
        protected getLocalTextPrefix() { return OfficialHolidaysRow.localTextPrefix; }
        protected getService() { return OfficialHolidaysService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}