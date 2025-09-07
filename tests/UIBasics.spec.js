import { test, expect } from '@playwright/test';

test('First Playwright Script', async ({page}) => {
    
    await page.goto("https://www.saucedemo.com/v1/");
});

