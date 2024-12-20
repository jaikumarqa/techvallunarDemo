import { type Page } from '@playwright/test';
import DialogBox from '../pageObject/dialogBox';


export default class basePage extends DialogBox  {
    /* actions */
    public async launchApp(page: Page) {
        await page.goto("./");
    }

    public async cookieAccept(page: Page) {
        await (await this.acceptAllBtn(page)).isVisible();
        await (await this.acceptAllBtn(page)).click();
        await page.waitForLoadState('domcontentloaded');
    }
}