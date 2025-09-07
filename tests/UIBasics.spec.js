import { test, expect } from '@playwright/test';

test('First Playwright Script', async ({page}) => {
    
    await page.goto("https://www.saucedemo.com/v1/");

    const pageTitle = await page.title();
    console.log("Page title is: "+pageTitle);

    await expect(page).toHaveTitle("Swag Labs");

});

