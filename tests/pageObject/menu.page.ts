import { type Page } from '@playwright/test';

export default class menuPage {

    public getMenuItems = async (page: Page) => page.getByTestId('header-component-item--navigation');

    public menuItem = async (page: Page, menu: string) => (await this.getMenuItems(page)).getByRole('link', { name: menu });

    public breadcrumb = async (page: Page) => page.getByTestId('breadcrumb-name');
}