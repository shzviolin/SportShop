export class ShopParams {
  brandId: number = 0;
  productTypeId: number = 0;
  sort: string = 'name';
  pageNumber: number = 1;
  pageSize: number = 6;
  search: string | undefined;
}
