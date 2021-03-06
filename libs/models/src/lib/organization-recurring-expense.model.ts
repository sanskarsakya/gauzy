import { BaseEntityModel as IBaseEntityModel } from './base-entity.model';
import { RecurringExpenseModel } from './recurring-expense.model';

export interface OrganizationRecurringExpense extends RecurringExpenseModel {
	orgId: string;
}

export interface OrganizationRecurringExpenseFindInput
	extends IBaseEntityModel {
	orgId?: string;
	month?: number;
	year?: number;
	categoryName?: string;
	value?: number;
	currency?: string;
}

export interface OrganizationRecurringExpenseByMonthFindInput
	extends IBaseEntityModel {
	orgId?: string;
	month?: number;
	year?: number;
}
