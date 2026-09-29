// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('FAQ Accordion Functionality Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // Scroll to FAQ container
    await page.locator('.faq-container').scrollIntoViewIfNeeded();
  });

  test('TC-AUTO-17: Verify FAQ section renders with all 5 verified question items', async ({ page }) => {
    const faqContainer = page.locator('.faq-container');
    await expect(faqContainer).toBeVisible();

    const faqItems = page.locator('.faq-item');
    await expect(faqItems).toHaveCount(5);
  });

  test('TC-AUTO-18: Verify first FAQ item is expanded by default on initial page load', async ({ page }) => {
    const firstFaq = page.locator('.faq-item').first();
    await expect(firstFaq).toHaveClass(/active/);

    const firstQuestion = firstFaq.locator('.faq-question');
    await expect(firstQuestion).toContainText('What is SAVY APT?');

    const firstAnswer = firstFaq.locator('.faq-answer');
    await expect(firstAnswer).toBeVisible();
    await expect(firstAnswer).toContainText('advanced AI platform that aggregates responses');
  });

  test('TC-AUTO-19: Verify clicking a collapsed FAQ item expands the answer', async ({ page }) => {
    const secondFaq = page.locator('.faq-item').nth(1);
    await expect(secondFaq).not.toHaveClass(/active/);

    // Click to expand
    await secondFaq.locator('.faq-question').click();

    // Verify it becomes active
    await expect(secondFaq).toHaveClass(/active/);
    const secondAnswer = secondFaq.locator('.faq-answer');
    await expect(secondAnswer).toBeVisible();
    await expect(secondAnswer).toContainText('SAVY APT Model');
  });

  test('TC-AUTO-20: Verify expanding a new FAQ item automatically collapses previously active item', async ({ page }) => {
    const firstFaq = page.locator('.faq-item').first();
    const thirdFaq = page.locator('.faq-item').nth(2);

    // Ensure first is active initially
    await expect(firstFaq).toHaveClass(/active/);

    // Click third FAQ question
    await thirdFaq.locator('.faq-question').click();

    // Verify third item expanded and first item collapsed
    await expect(thirdFaq).toHaveClass(/active/);
    await expect(firstFaq).not.toHaveClass(/active/);
  });

  test('TC-AUTO-21: Verify clicking an already expanded FAQ question collapses it', async ({ page }) => {
    const firstFaq = page.locator('.faq-item').first();
    await expect(firstFaq).toHaveClass(/active/);

    // Click to toggle collapse
    await firstFaq.locator('.faq-question').click();

    // Assert class 'active' is removed
    await expect(firstFaq).not.toHaveClass(/active/);
  });

});
