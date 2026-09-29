// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Responsive Cross-Viewport Suite', () => {

  test('TC-AUTO-31: Verify desktop layout (1280px) renders horizontal split section and desktop navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Desktop menu is visible
    const desktopMenu = page.locator('.desktop-menu');
    await expect(desktopMenu).toBeVisible();

    // Mobile hamburger button is hidden
    const hamburger = page.locator('.mobile-menu-btn');
    await expect(hamburger).not.toBeVisible();

    // Split section flex direction is row (desktop)
    const splitSection = page.locator('.split-section');
    const flexDir = await splitSection.evaluate(el => window.getComputedStyle(el).flexDirection);
    expect(flexDir).toBe('row');
  });

  test('TC-AUTO-32: Verify tablet layout (768px) cleanly stacks split section vertically', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // In tablet view, split section switches to column
    const splitSection = page.locator('.split-section');
    await expect(splitSection).toBeVisible();
    const flexDir = await splitSection.evaluate(el => window.getComputedStyle(el).flexDirection);
    expect(flexDir).toBe('column');

    // Subtitle card and FAQ remain visible in vertical stack
    await expect(page.locator('.subtitle-panel')).toBeVisible();
    await expect(page.locator('.faq-container')).toBeVisible();
  });

  test('TC-AUTO-33: Verify mobile layout (375px) has zero horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Evaluate scrollWidth vs innerWidth
    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    expect(isOverflowing).toBeFalsy();

    // Hero headline adapts without breaking container
    const headline = page.locator('h1.title');
    await expect(headline).toBeVisible();
  });

  test('TC-AUTO-34: Verify embedded chat iframe scales responsively across viewport widths', async ({ page }) => {
    const viewports = [
      { width: 1280, height: 800, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 667, name: 'Mobile' }
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'domcontentloaded' });

      const iframe = page.locator('#chatIframe');
      await expect(iframe).toBeVisible();

      // Check iframe bounding box is within viewport width
      const box = await iframe.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.width).toBeLessThanOrEqual(vp.width);
      }
    }
  });

});
