const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.guru99.com/');
        // Go to the starting url before each test.
    })

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
})

test.describe('Open Guru99 Main Page', () => {
    test.describe.configure({ timeout: 60000 })
    test ('open the main page', async({ page }) => {

      await expect(page.getByRole('h1', {name: 'Tutorials Library'})).toBe
    })

    test('test redirecting into Child Pages', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Guru99' })).toBeVisible()
    await expect(page.locator('h1')).toContainText('Tutorials Library')
    await page.getByRole('link', { name: '➤ SAP Beginner' }).click();
    await expect(page.locator('h1')).toContainText('Tutorial for Beginners')
    await expect(page.locator('#post-478')).toContainText('SAP Business Suite')

})

test('test Search Field', async ({ page }) => {
    await page.goto('https://www.guru99.com/');
    await expect(page.getByRole('link', { name: 'Guru99' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Tutorials Library');
    await page.getByLabel('View Search Form').click();
    await expect(page.getByPlaceholder('Search …')).toBeVisible();
    await page.getByPlaceholder('Search …').click();
    const searchValue = 'QA';
    await page.getByPlaceholder('Search …').fill('QA', searchValue);
    await page.getByPlaceholder('Search …').press('Enter');
    await expect(page.getByLabel('search', { exact: true })).toHaveValue('QA');
    const enteredValue = await page.$eval('input.gsc-input#gsc-i-id1', el => el.value);
    await expect(enteredValue).toBe(searchValue);
  });

test('test Categories surfing', async ({ page }) => {
    test.slow();
    await page.goto('https://www.guru99.com/');
    await page.waitForTimeout(1000)
    const selector = await page.$('#menu-item-3173 > a > span');
    const spanText = await selector.textContent();
    expect(spanText).toContain('Testing');
    await page.waitForSelector('#menu-item-3173 > a > span', { timeout: 20000 });
    await page.click('#menu-item-3173 > a > span'); 
    await page.waitForTimeout(3000)
    await expect(page.getByRole('link', { name: 'Postman' })).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#menu-item-4646')).toContainText('Postman');
    await page.getByRole('link', { name: 'Postman' }).click({ timeout: 10000 });
    await expect(page.locator('h1')).toContainText('Postman');
    await page.getByRole('link', { name: 'SAP Expand child menu of SAP' })
    await page.click(`span.nav-drop-title-wrap:has-text("SAP")`);
    await expect(page.getByRole('link', { name: 'Security Tutorial' })).toBeVisible();
    await expect(page.locator('#menu-item-4744')).toContainText('Security');
    await page.getByRole('link', { name: 'Security Tutorial' }).click({ timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'What is SAP Security? Complete Tutorial' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Security');
});
test('test Localization', async ({ page }) => {
    test.slow();
    await page.waitForTimeout(1000);
    await expect(page.getByRole('heading', { name: 'Guru99 is totally new kind of' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Guru99 is totally new kind of learning experience.');
    await page.waitForTimeout(3000)
    await page.click('div.gt_selected a[href]');
    await page.getByRole('link', { name: 'de German' }).click({ timeout: 10000 });
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: 'Guru99 ist eine völlig neue' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Guru99 ist eine völlig neue Art der Lernerfahrung.');
    await page.mouse.down();
    await page.click(`div.gt_selected a[href]`);
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'ja Japanese' }).click({ force: true });
    await expect(page.getByRole('heading', { name: 'Guru99 はまったく新しい種類の学習体験です。' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Guru99 はまったく新しい種類の学習体験です。');
    await page.waitForTimeout(3000)
    await page.click('div.gt_selected a[href]');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'fr French' }).click({ force: true });
    await expect(page.getByRole('heading', { name: 'Guru99 est un tout nouveau' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Guru99 est un tout nouveau type d\'expérience d\'apprentissage.');
  });

})