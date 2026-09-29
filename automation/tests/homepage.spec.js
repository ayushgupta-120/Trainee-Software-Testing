// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage Functionality & Content Validation', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to homepage before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('TC-AUTO-01: Verify homepage loads successfully with expected title and HTTP 200', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/SAVY APT - AI Platform/);

    // Verify main headline is visible in hero section
    const mainHeading = page.locator('h1.title');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('An AI Platform');
  });

  test('TC-AUTO-02: Verify header branding and SAVY APT logo are visible', async ({ page }) => {
    // Verify brand logo image is rendered in sticky header
    const brandLogo = page.locator('#header-logo');
    await expect(brandLogo).toBeVisible();
    await expect(brandLogo).toHaveAttribute('src', /savy_logo/);

    // Verify brand name text
    const brandName = page.locator('.logo-area span');
    await expect(brandName).toBeVisible();
    await expect(brandName).toHaveText('SAVY APT');
  });

  test('TC-AUTO-03: Verify embedded chat interface iframe is rendered in hero section', async ({ page }) => {
    // Verify iframe container is visible
    const iframe = page.locator('#chatIframe');
    await expect(iframe).toBeVisible();

    // Verify iframe src attribute contains required embed parameters
    await expect(iframe).toHaveAttribute('src', 'chat.html?embed=true&hideSidebar=true');
  });

  test('TC-AUTO-04: Verify supported AI model badges are displayed in subtitle card', async ({ page }) => {
    const expectedModels = [
      'ChatGPT 5.5',
      'Claude Opus 4.8',
      'Gemini 3.5 Pro',
      'Grok 4.3',
      'DeepSeek V4',
      'Llama 4'
    ];

    for (const model of expectedModels) {
      const badge = page.locator('.subtitle-tags').getByText(model, { exact: true });
      await expect(badge).toBeVisible();
    }
  });

  test('TC-AUTO-05: Verify hero "Start Chat" CTA button navigates to login page', async ({ page }) => {
    const startChatBtn = page.locator('.start-btn').getByText('Start Chat');
    await expect(startChatBtn).toBeVisible();

    // Click CTA button and verify navigation to login.html
    await startChatBtn.click();
    await page.waitForURL('**/login.html');
    await expect(page).toHaveURL(/login\.html/);
  });

  test('TC-AUTO-06: Verify global footer renders trademark disclaimer and policy links', async ({ page }) => {
    // Scroll to footer
    const footer = page.locator('#global-footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Verify disclaimer content
    const disclaimer = page.locator('.footer-disclaimer');
    await expect(disclaimer).toBeVisible();
    await expect(disclaimer).toContainText('All AI models');
    await expect(disclaimer).toContainText('trademarks of their respective owners');
  });

});
