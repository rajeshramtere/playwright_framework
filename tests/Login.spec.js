import { test, expect } from '@playwright/test';

test('Login', async ({page}) => {
    
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page).toHaveTitle("Swag Labs");

    await page.locator("input#user-name").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");
    await page.locator("input#login-button").click();

    await page.locator("div.app_logo").isVisible();

});

