namespace HRM.AttendanceSheet {
    export namespace AttendanceSheetService {
        export const baseUrl = 'AttendanceSheet/AttendanceSheet';

        export declare function Create(request: Serenity.SaveRequest<AttendanceSheetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AttendanceSheetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendanceSheetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendanceSheetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AttendanceSheet/AttendanceSheet/Create",
            Update = "AttendanceSheet/AttendanceSheet/Update",
            Delete = "AttendanceSheet/AttendanceSheet/Delete",
            Retrieve = "AttendanceSheet/AttendanceSheet/Retrieve",
            List = "AttendanceSheet/AttendanceSheet/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AttendanceSheetService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

