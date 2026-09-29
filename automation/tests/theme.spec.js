// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Theme Switcher (Dark & Light Mode) Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Clear theme from localStorage to test default state cleanly
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.removeItem('theme'));
    await page.reload({ waitUntil: 'domcontentloaded' });
  });

  test('TC-AUTO-12: Verify default theme attribute on <html> is light', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');

    // Theme toggle button should display the sun icon
    const themeIcon = page.locator('.desktop-menu .theme-toggle');
    await expect(themeIcon).toHaveText('☀️');
  });

  test('TC-AUTO-13: Verify switching to dark mode updates data-theme and icon', async ({ page }) => {
    const themeBtn = page.locator('.desktop-menu .theme-toggle');
    await themeBtn.click();

    // Verify <html> data-theme switches to dark
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');

    // Verify theme toggle icon switches to moon
    await expect(themeBtn).toHaveText('🌙');

    // Verify primary hero elements remain clearly visible in dark mode
    const heading = page.locator('h1.title');
    await expect(heading).toBeVisible();
  });

  test('TC-AUTO-14: Verify toggling theme back to light mode restores default theme', async ({ page }) => {
    const themeBtn = page.locator('.desktop-menu .theme-toggle');

    // Switch to dark
    await themeBtn.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    // Switch back to light
    await themeBtn.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(themeBtn).toHaveText('☀️');
  });

  test('TC-AUTO-15: Verify theme preference persists across browser reload via localStorage', async ({ page }) => {
    const themeBtn = page.locator('.desktop-menu .theme-toggle');
    await themeBtn.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    // Verify localStorage has theme='dark'
    const stored = await page.evaluate(() => localStorage.getItem('theme'));
    expect(stored).toBe('dark');

    // Reload page
    await page.reload({ waitUntil: 'domcontentloaded' });

    // Assert theme remains dark after reload
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(themeBtn).toHaveText('🌙');
  });

  test('TC-AUTO-16: Verify brand logo image swaps dynamically between light and dark versions', async ({ page }) => {
    const headerLogo = page.locator('#header-logo');

    // In light mode, logo should be savy_logo_light.png
    await expect(headerLogo).toHaveAttribute('src', /savy_logo_light\.png/);

    // Switch to dark mode
    await page.locator('.desktop-menu .theme-toggle').click();

    // In dark mode, logo should update to savy_logo_dark.png
    await expect(headerLogo).toHaveAttribute('src', /savy_logo_dark\.png/);
  });

});
