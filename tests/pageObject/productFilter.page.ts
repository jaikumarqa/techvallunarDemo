import { type Page } from '@playwright/test';

export default class productFilterPage {

    public facetMenuDrp = async (page: Page, facetMenu: string) => page.getByTestId(facetMenu);

    public facetOptChkbx = async (page: Page, facetOptn: string) => page.getByRole('checkbox', { name: facetOptn, exact: true });

    public selectedFacets = async (page: Page) => page.locator('.selected-facets > button.selected-facets__value');

    public productHeader = async (page: Page) => page.locator('.product-overview__headline-wrapper');

    public productList = async (page: Page) => page.locator('.product-tile__main-link');

    public resetFacets = async (page: Page) => page.locator('.selected-facets__reset');
} 