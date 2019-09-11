import { BaseEntityModel as IBaseEntityModel } from './base-entity.model';
import { Organization } from './organization.model';

export interface OrganizationDepartment extends IBaseEntityModel {
    name: string;
    organizationId: string;
}

export interface OrganizationDepartmentFindInput extends IBaseEntityModel {
    name?: string;
    organizationId?: string;
}

export interface OrganizationDepartmentCreateInput {
    name: string;
    organizationId: string;
}