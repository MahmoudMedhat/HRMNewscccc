namespace HRM.SalaryDetails {
    export interface PremiumstypeRow {
        Id?: number;
        Premium?: string;
    }

    export namespace PremiumstypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Premium';
        export const localTextPrefix = 'SalaryDetails.Premiumstype';
        export const lookupKey = 'SalaryDetails.Premiumstype';

        export function getLookup(): Q.Lookup<PremiumstypeRow> {
            return Q.getLookup<PremiumstypeRow>('SalaryDetails.Premiumstype');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Premium = "Premium"
        }
    }
}

