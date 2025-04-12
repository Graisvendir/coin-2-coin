import { DateTime } from '~/shared/utils';

export enum FilterType {
    select = 'select',
    range = 'range',
    dateRange = 'dateRange',
}

export interface IFilterItem {
    name: string,
    type: FilterType,
}

export interface ISelectOption {
    label: string,
    value: string,
}

export interface ISelectFilterItem extends IFilterItem {
    multi?: boolean,
    options: ISelectOption[],
}

export interface IRangeFilterItem extends IFilterItem {
    min: number,
    max: number,
}

export interface IDateRangeFilterItem extends IFilterItem {
    min?: DateTime,
    max?: DateTime,
}


