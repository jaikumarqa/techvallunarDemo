import { Page, Locator } from '@playwright/test'; 

export default interface IProductFilter {
    // Method to filter products by a facetMenu type and facet Optn
    filterTheProducts(page: Page, facetMenu: string, facetOptn: string): Promise<void>;

    // Method to clear the selected products
    clearTheProducts(page: Page): Promise<void>;

    selectedFacets(page: Page): Promise<Locator>;

    productHeader(page: Page): Promise<Locator>;

    productList(page: Page): Promise<Locator>;

    resetFacets(page: Page): Promise<Locator>;
}