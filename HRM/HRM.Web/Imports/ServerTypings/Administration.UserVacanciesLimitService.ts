namespace HRM.Administration {
    export namespace UserVacanciesLimitService {
        export const baseUrl = 'Administration/UserVacanciesLimit';

        export declare function Create(request: Serenity.SaveRequest<UserVacanciesLimitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserVacanciesLimitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserVacanciesLimitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserVacanciesLimitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Administration/UserVacanciesLimit/Create",
            Update = "Administration/UserVacanciesLimit/Update",
            Delete = "Administration/UserVacanciesLimit/Delete",
            Retrieve = "Administration/UserVacanciesLimit/Retrieve",
            List = "Administration/UserVacanciesLimit/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserVacanciesLimitService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

