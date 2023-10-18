export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
  }
  
  export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
  }
  
export interface FilterSliceState {
    searchInput: string;
    categoryId: number;
    sort: Sort;
    currentPage: number;
  }