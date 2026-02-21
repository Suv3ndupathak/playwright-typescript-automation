import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = page.locator('h1');
  await expect(title).toContainText('Example');
});

test('has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/example/i);
});

test('get started link', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Click on "More information..." link
  await page.click('a[href*="more"]');
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
