import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto("./");

  await page.getByTestId('uc-accept-all-button').click();
  await page.waitForLoadState('domcontentloaded'); 
});

test('List the products based on filters', async ({ page }) => {

  await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).click();
  await page.getByRole('link', { name: 'PARFUM', exact: true }).click();
  //await page.getByTestId('classificationClassName').click();
  await page.waitForLoadState();
  await page.waitForLoadState('domcontentloaded'); 

  await page.getByTestId('flags').click();
  // await page.waitForResponse(response =>
  //   response.url() === 'https://example.com' && response.status() === 200
  //       && response.request().method() === 'GET'
  // );
  await expect(page.getByRole('checkbox', { name: 'Sale' })).toBeVisible();

  await page.getByRole('checkbox', { name: 'Sale' }).getByRole('checkbox').click();
  await expect(page.locator(".selected-facets > button").last()).toHaveText('Sale');

  await page.getByTestId('brand').click();
  await page.getByRole('checkbox', { name: '4711', exact: true }).getByRole('checkbox').click();
  await expect(page.locator(".selected-facets > button").nth(1)).toHaveText('4711');

  await page.getByTestId('gender').click();
  await page.getByRole('checkbox', { name: 'Unisex' }).getByRole('checkbox').click();
  await expect(page.locator(".selected-facets > button").last()).toHaveText('Unisex');


});

test.afterEach(async ({ page }) => {
  await page.screenshot({ path: 'test-results/screenshot/screenshot.png', fullPage: true });
});

