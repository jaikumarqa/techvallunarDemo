import { type Page } from '@playwright/test';
import MenuPage from '../pageObject/menu.page';
import IMenu from '../interface/IMenu';

export default class menuAction extends MenuPage implements IMenu {
    
    public async selectTheMenuItem(page: Page, menuItem: string) {
        await (await this.menuItem(page, menuItem)).click();
        await (await this.breadcrumb(page)).waitFor();
        await page.waitForLoadState('domcontentloaded');
    }
}