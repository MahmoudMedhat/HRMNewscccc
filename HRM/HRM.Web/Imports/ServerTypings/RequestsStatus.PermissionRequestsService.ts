namespace HRM.RequestsStatus {
    export namespace PermissionRequestsService {
        export const baseUrl = 'RequestsStatus/PermissionRequests';

        export declare function Create(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PermissionRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PermissionRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "RequestsStatus/PermissionRequests/Create",
            Update = "RequestsStatus/PermissionRequests/Update",
            Delete = "RequestsStatus/PermissionRequests/Delete",
            Retrieve = "RequestsStatus/PermissionRequests/Retrieve",
            List = "RequestsStatus/PermissionRequests/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PermissionRequestsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

