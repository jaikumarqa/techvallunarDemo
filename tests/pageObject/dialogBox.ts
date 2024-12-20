import { type Page } from '@playwright/test';

export default class dialogBox {

    public getDialogBox = async (page: Page) => page.getByRole('dialog');

    public acceptAllBtn = async (page: Page) => (await this.getDialogBox(page)).getByTestId('uc-accept-all-button');

    public denyBtn = async (page: Page) => (await this.getDialogBox(page)).getByTestId('uc-deny-all-button');

    public moreBtn = async (page: Page) => (await this.getDialogBox(page)).getByTestId('uc-more-button');
}