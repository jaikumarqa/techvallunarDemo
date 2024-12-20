import { type Page } from '@playwright/test';
import ProductFilterPage from '../pageObject/productFilter.page';


export default class productFilterAction extends ProductFilterPage  {
    
    public async filterTheProducts(page: Page, filterType: string, filterName: string) {
        await (await this.filterTypeDrp(page, filterType)).click();
        await page.waitForLoadState();
        await (await this.filterOptionCheckbox(page, filterName)).isVisible();
        await (await this.filterOptionCheckbox(page, filterName)).click();
        // await page.waitForResponse(response =>
        //     response.url() === 'https://data.kameleoon.eu/visit/events?siteCode=puk22r4nl1&visitorCode=wxx5ppzjvj6jm1os&itp=false' && response.status() === 204
        //         && response.request().method() === 'POST'
        // );
        await page.waitForLoadState();
        await page.waitForLoadState('domcontentloaded');
        await this.WaitAsync(3000);
    }

    public async WaitAsync(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}