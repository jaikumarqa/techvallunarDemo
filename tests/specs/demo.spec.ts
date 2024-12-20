import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import BasePage from '../actions/basePage';
import MenuAction from '../actions/menu.action';
import productFilterAction from '../actions/productFilter.action';
import testData from '../../resources/testData/qa.data.json';
import IProductFilter from '../interface/IProductFilter';


test.describe('Douglas UI Test For Demo', () => {
  let filterAct: IProductFilter;

  test.beforeEach(async ({ page }) => {
      let basePage = new BasePage();
      await basePage.launchApp(page);
      await basePage.cookieAccept(page);
      filterAct = new productFilterAction();
  });

  test('List the products based on filters', async ({ page }) => {
      let menuAct = new MenuAction();
      await menuAct.selectTheMenuItem(page, 'PARFUM');     

      // filter 1 -- Sale
      let filterName1: string[] = [];
      for (const [key, value] of Object.entries(testData.FilterList1)) {
        console.log(`${key}: ${value}`); // Access key and value
        await filterAct.filterTheProducts(page, `${key}`, `${value}`);
        filterName1.push(`${value}`);
      }

      filterName1.sort();

      await expect(await filterAct.selectedFilter(page)).toHaveText(filterName1);
      let salesexpectedProtCount = 2
      await expect(await filterAct.productHeader(page)).toHaveText(`Parfüm & Düfte(${salesexpectedProtCount})`);
      await expect(await filterAct.productList(page)).toHaveCount(salesexpectedProtCount);

      await filterAct.clearTheProducts(page);
      await expect(await filterAct.selectedFilter(page)).not.toBeVisible();
      await expect(await filterAct.clearProducts(page)).not.toBeVisible();

      // filter 2 -- Neu
      let filterName2: string[] = [];
      for (const [key, value] of Object.entries(testData.FilterList2)) {
        console.log(`${key}: ${value}`); // Access key and value
        await filterAct.filterTheProducts(page, `${key}`, `${value}`);
        filterName2.push(`${value}`);
      }

      filterName2.sort();

      await expect(await filterAct.selectedFilter(page)).toHaveText(filterName2);
      let neuExpectedProtCount = 1
      await expect(await filterAct.productHeader(page)).toHaveText(`Parfüm & Düfte(${neuExpectedProtCount})`);
      await expect(await filterAct.productList(page)).toHaveCount(neuExpectedProtCount);

      await filterAct.clearTheProducts(page);
      await expect(await filterAct.selectedFilter(page)).not.toBeVisible();
      await expect(await filterAct.clearProducts(page)).not.toBeVisible();

  });

  // const testData = JSON.parse(fs.readFileSync('testData.json', 'utf8'));
  // testData.forEach(async ({ page }, data: { flags: string; brand: string }) => {
      
  //     test(`Test ${data.brand} title`, async ({ page }) => {
  //       let menuAct = new MenuAction();
  //       let filterAct = new productFilterAction();

  //       await menuAct.selectTheMenuItem(page, 'PARFUM'); 
  //         await filterAct.filterTheProducts(page, `${key}`, `${value}`);
  //         filterName.push(`${value}`);
  //       });
  //     });
  // });

  test.afterEach(async ({ page }) => {
      await page.screenshot({ path: 'reports/test-results/screenshot/screenshot.png', fullPage: true });
  });

});