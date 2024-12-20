import { type Page } from '@playwright/test';

export default class productFilterPage {

    public filterTypeDrp = async (page: Page, filterType: string) => page.getByTestId(filterType);

    public filterOptionCheckbox = async (page: Page, filterName: string) => page.getByRole('checkbox', { name: filterName, exact: true });

    public selectedFilter = async (page: Page) => page.locator('.selected-facets > button.selected-facets__value');

    public productHeader = async (page: Page) => page.locator('.product-overview__headline-wrapper');

    public productList = async (page: Page) => page.locator('.product-tile__main-link');
} 