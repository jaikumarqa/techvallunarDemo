import { type Page } from '@playwright/test';
import MenuPage from '../pageObject/menu.page';


export default class menuAction extends MenuPage  {
    
    public async selectTheMenuItem(page: Page, menuItem: string) {
        await (await this.menuItem(page, menuItem)).click();
        await page.waitForLoadState();
        await page.waitForLoadState('domcontentloaded');
    }
}