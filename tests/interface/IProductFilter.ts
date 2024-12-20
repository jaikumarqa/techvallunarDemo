import { Page, Locator } from '@playwright/test'; 

export default interface IProductFilter {
    // Method to filter products by a filter type and filter name
    filterTheProducts(page: Page, filterType: string, filterName: string): Promise<void>;

    // Method to clear the selected products
    clearTheProducts(page: Page): Promise<void>;

    selectedFilter(page: Page): Promise<Locator>;

    productHeader(page: Page): Promise<Locator>;

    productList(page: Page): Promise<Locator>;

    clearProducts(page: Page): Promise<Locator>;
}