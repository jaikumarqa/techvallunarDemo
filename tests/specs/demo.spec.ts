import { test, expect } from '@playwright/test';
import BasePage from '../actions/basePage';
import MenuAction from '../actions/menu.action';
import productFilterAction from '../actions/productFilter.action';
import testData from '../../resources/testData/qa.data.json';
import IProductFilter from '../interface/IProductFilter';
import IMenu from '../interface/IMenu';


test.describe('Douglas UI Test For Demo', () => {
  let filterAct: IProductFilter;
  let menuAct: IMenu;

  test.beforeEach(async ({ page }) => {
      let basePage = new BasePage();
      await basePage.launchApp(page);
      await basePage.cookieAccept(page);
      filterAct = new productFilterAction();
      menuAct = new MenuAction();
  });

  test('List the products based on filters', async ({ page }) => {
      
      await menuAct.selectTheMenuItem(page, 'PARFUM');      
      let facetOptns: string[] = [];
      let expectedProductsCount: number;

      // filter 1 -- Sale
      for (const [key, value] of Object.entries(testData.FilterList_1)) {
        console.log(`${key}: ${value}`); // Access key and value
        await filterAct.filterTheProducts(page, `${key}`, `${value}`);
        facetOptns.push(`${value}`);
      }
      facetOptns.sort();

      await expect(await filterAct.selectedFacets(page)).toHaveText(facetOptns);
      expectedProductsCount = 2
      await expect(await filterAct.productHeader(page)).toHaveText(`Parfüm & Düfte(${expectedProductsCount})`);
      await expect(await filterAct.productList(page)).toHaveCount(expectedProductsCount);

      await filterAct.clearTheProducts(page);
      await expect(await filterAct.selectedFacets(page)).not.toBeVisible();
      await expect(await filterAct.resetFacets(page)).not.toBeVisible();
      facetOptns = [];

      // filter 2 -- Neu
      for (const [key, value] of Object.entries(testData.FilterList_2)) {
        console.log(`${key}: ${value}`); // Access key and value
        await filterAct.filterTheProducts(page, `${key}`, `${value}`);
        facetOptns.push(`${value}`);
      }
      facetOptns.sort();

      await expect(await filterAct.selectedFacets(page)).toHaveText(facetOptns);
      expectedProductsCount = 1
      await expect(await filterAct.productHeader(page)).toHaveText(`Parfüm & Düfte(${expectedProductsCount})`);
      await expect(await filterAct.productList(page)).toHaveCount(expectedProductsCount);

      await filterAct.clearTheProducts(page);
      await expect(await filterAct.selectedFacets(page)).not.toBeVisible();
      await expect(await filterAct.resetFacets(page)).not.toBeVisible();
      facetOptns = [];

  });

  test.afterEach(async ({ page }) => {
      await page.screenshot({ path: 'reports/test-results/screenshot/screenshot.png', fullPage: true });
  });

});