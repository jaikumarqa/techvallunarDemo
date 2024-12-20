import { Page, Locator } from '@playwright/test'; 

export default interface IMenu {
    selectTheMenuItem(page: Page, menuItem: string): Promise<void>;
}