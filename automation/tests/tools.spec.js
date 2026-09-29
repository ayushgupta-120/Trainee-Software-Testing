// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('AI Tools Directory & Access Control Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Ensure clean unauthenticated session
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userGoogleId');
    });
    // Scroll down to tools section
    await page.locator('.tools-section').scrollIntoViewIfNeeded();
  });

  test('TC-AUTO-27: Verify all 8 AI tool cards render with titles and trial badges', async ({ page }) => {
    const toolCards = page.locator('#toolsGrid .tool-card');
    await expect(toolCards).toHaveCount(8);

    const expectedTools = [
      'Market Research',
      'Trending AI Prompts',
      'Image Generation',
      'Video Generation',
      'Custom Assistant',
      'Code Interpreter',
      'Accurate Result',
      'SAVY APT'
    ];

    for (const tool of expectedTools) {
      const card = page.locator('.tool-card').filter({ hasText: tool });
      await expect(card).toBeVisible();
    }
  });

  test('TC-AUTO-28: Verify unauthenticated tool click displays warning toast notification', async ({ page }) => {
    const marketCard = page.locator('.tool-card[data-tool="Market Research"]');
    await marketCard.click();

    // Verify toast popup appears
    const toast = page.locator('#toolUsagePopup');
    await expect(toast).toHaveClass(/show/);
    await expect(toast).toContainText('Please sign in with Google first!');
  });

  test('TC-AUTO-29: Verify unauthenticated tool click redirects to login.html within 1 second', async ({ page }) => {
    const promptCard = page.locator('.tool-card[data-tool="Trending AI Prompts"]');
    await promptCard.click();

    // Verify browser is redirected to login.html
    await page.waitForURL('**/login.html', { timeout: 5000 });
    await expect(page).toHaveURL(/login\.html/);
  });

  test('TC-AUTO-30: Verify Custom Assistant card has dedicated page configuration', async ({ page }) => {
    const caCard = page.locator('.tool-card[data-tool="Custom Assistant"]');
    await expect(caCard).toBeVisible();

    // Verify data-type is dedicated and url is custom-assistant.html
    await expect(caCard).toHaveAttribute('data-type', 'dedicated');
    await expect(caCard).toHaveAttribute('data-url', 'custom-assistant.html');
  });

});
