import { test, expect } from '@playwright/test';
import BasePage from '../actions/basePage';
import MenuAction from '../actions/menu.action';
import productFilterAction from '../actions/productFilter.action';

test.describe('Douglas UI Test For Demo', () => {

  test.beforeEach(async ({ page }) => {
      let basePage = new BasePage();
      await basePage.launchApp(page);
      await basePage.cookieAccept(page);
  });

  test('List the products based on filters', async ({ page }) => {
      let menuAct = new MenuAction();
      let filterAct = new productFilterAction();

      await menuAct.selectTheMenuItem(page, 'PARFUM');

      const filters = new Map<string, string>([
        ['flags', 'Sale'],
        ['brand', '4711'],
        ['classificationClassName', 'Eau de Cologne'],
        ['gender', 'Unisex']
      ]);
      let filterName: string[] = [];

      for (const [key, value] of filters) {
        console.log(`${key}: ${value}`); // Access key and value
        await filterAct.filterTheProducts(page, `${key}`, `${value}`);
        filterName.push(`${value}`);
      }
      filterName.sort();

      await expect(await filterAct.selectedFilter(page)).toHaveText(filterName);
      let expectedProtCount = 2
      await expect(await filterAct.productHeader(page)).toHaveText(`Parfüm & Düfte(${expectedProtCount})`);
      await expect(await filterAct.productList(page)).toHaveCount(expectedProtCount);

  });

  test.afterEach(async ({ page }) => {
      await page.screenshot({ path: 'test-results/screenshot/screenshot.png', fullPage: true });
  });

});