// @ts-check
const { test, expect } = require('@playwright/test');

// Set mobile viewport for this suite
test.use({ viewport: { width: 375, height: 667 } });

test.describe('Mobile Navigation & Responsive Viewport Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('TC-AUTO-22: Verify mobile hamburger menu button is visible on mobile viewports', async ({ page }) => {
    // Desktop menu should be hidden
    const desktopMenu = page.locator('.desktop-menu');
    await expect(desktopMenu).not.toBeVisible();

    // Mobile hamburger button should be visible
    const hamburgerBtn = page.locator('.mobile-menu-btn');
    await expect(hamburgerBtn).toBeVisible();
    await expect(hamburgerBtn).toHaveText('☰');
  });

  test('TC-AUTO-23: Verify clicking hamburger button smoothly opens mobile menu drawer', async ({ page }) => {
    const hamburgerBtn = page.locator('.mobile-menu-btn');
    const mobileMenu = page.locator('#mobileMenu');

    // Menu should initially be hidden
    await expect(mobileMenu).not.toHaveClass(/show/);

    // Click hamburger button to open
    await hamburgerBtn.click();
    await expect(mobileMenu).toHaveClass(/show/);

    // Verify navigation items exist in mobile menu
    const menuItems = mobileMenu.locator('.mobile-menu-item');
    await expect(menuItems).toHaveCount(3);
    await expect(menuItems.nth(0)).toContainText('Theme');
    await expect(menuItems.nth(1)).toHaveText('Login');
    await expect(menuItems.nth(2)).toHaveText('Join Now for Free');
  });

  test('TC-AUTO-24: Verify tapping hamburger button a second time closes mobile menu', async ({ page }) => {
    const hamburgerBtn = page.locator('.mobile-menu-btn');
    const mobileMenu = page.locator('#mobileMenu');

    // Open menu
    await hamburgerBtn.click();
    await expect(mobileMenu).toHaveClass(/show/);

    // Close menu
    await hamburgerBtn.click();
    await expect(mobileMenu).not.toHaveClass(/show/);
  });

  test('TC-AUTO-25: Verify tapping outside the mobile menu automatically dismisses it', async ({ page }) => {
    const hamburgerBtn = page.locator('.mobile-menu-btn');
    const mobileMenu = page.locator('#mobileMenu');

    // Open menu
    await hamburgerBtn.click();
    await expect(mobileMenu).toHaveClass(/show/);

    // Tap outside on hero section
    await page.locator('.hero-section').click({ position: { x: 20, y: 150 } });

    // Assert menu closes
    await expect(mobileMenu).not.toHaveClass(/show/);
  });

  test('TC-AUTO-26: Verify mobile theme switcher toggles theme from mobile drawer', async ({ page }) => {
    const hamburgerBtn = page.locator('.mobile-menu-btn');
    await hamburgerBtn.click();

    // Click Theme item in mobile menu
    const themeItem = page.locator('#mobileMenu .mobile-menu-item').first();
    await themeItem.click();

    // Verify document theme updates to dark
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });

});
