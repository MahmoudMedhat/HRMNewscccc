namespace HRM.Employees {
    export namespace VacancyRequestsService {
        export const baseUrl = 'Employees/VacancyRequests';

        export declare function Total_Limits(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: LimitSummResponcs) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VacancyRequestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRequestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Total_Limits = "Employees/VacancyRequests/Total_Limits",
            Create = "Employees/VacancyRequests/Create",
            Update = "Employees/VacancyRequests/Update",
            Delete = "Employees/VacancyRequests/Delete",
            Retrieve = "Employees/VacancyRequests/Retrieve",
            List = "Employees/VacancyRequests/List"
        }

        [
            'Total_Limits', 
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VacancyRequestsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

