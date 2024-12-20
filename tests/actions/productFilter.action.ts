import { type Page } from '@playwright/test';
import ProductFilterPage from '../pageObject/productFilter.page';
import IProductFilter from '../interface/IProductFilter';

export default class productFilterAction extends ProductFilterPage implements IProductFilter  {
    
    public async filterTheProducts(page: Page, facetMenu: string, facetOptn: string) {
        await (await this.facetMenuDrp(page, facetMenu)).click();
        await (await this.facetOptChkbx(page, facetOptn)).waitFor();
        await (await this.facetOptChkbx(page, facetOptn)).click();
        await ((await this.selectedFacets(page)).last()).waitFor();
        await page.waitForLoadState('domcontentloaded');
    }

    public async clearTheProducts(page: Page) { 
        await (await this.resetFacets(page)).click();
        await page.waitForLoadState('networkidle');
    }
}