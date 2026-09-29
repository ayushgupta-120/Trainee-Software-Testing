// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation & Link Routing Suite', () => {

  test('TC-AUTO-07: Verify header "Login" and "Join Now for Free" buttons navigate to login page', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Test Login button
    const loginBtn = page.locator('.desktop-menu .login-btn');
    await expect(loginBtn).toBeVisible();
    await loginBtn.click();
    await page.waitForURL('**/login.html');
    await expect(page).toHaveURL(/login\.html/);

    // Return to homepage
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Test Join Now for Free button
    const joinBtn = page.locator('.desktop-menu .join-btn');
    await expect(joinBtn).toBeVisible();
    await joinBtn.click();
    await page.waitForURL('**/login.html');
    await expect(page).toHaveURL(/login\.html/);
  });

  test('TC-AUTO-08: Verify "← Back to Home" link on subpages returns to index.html', async ({ page }) => {
    // Navigate to Contact Us
    await page.goto('/contact.html', { waitUntil: 'domcontentloaded' });
    const contactBackLink = page.locator('.back-link').getByText('Back to Home');
    await expect(contactBackLink).toBeVisible();
    await contactBackLink.click();
    await page.waitForURL('**/index.html');
    await expect(page).toHaveURL(/index\.html/);

    // Navigate to Login
    await page.goto('/login.html', { waitUntil: 'domcontentloaded' });
    const loginLogoLink = page.locator('.top-bar a.logo-area');
    await expect(loginLogoLink).toBeVisible();
    await loginLogoLink.click();
    await page.waitForURL('**/index.html');
    await expect(page).toHaveURL(/index\.html/);
  });

  test('TC-AUTO-09: Verify all footer legal and informational policy links load successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const policyLinks = [
      { text: 'Contact Us', expectedPath: 'contact.html', expectedTitle: /Contact Us/ },
      { text: 'Terms of Use', expectedPath: 'terms.html', expectedTitle: /Terms of Use/ },
      { text: 'Privacy Policy', expectedPath: 'privacy.html', expectedTitle: /Privacy Policy/ },
      { text: 'Community Guidelines', expectedPath: 'community.html', expectedTitle: /Community Guidelines/ },
      { text: 'Refund Policy', expectedPath: 'refund.html', expectedTitle: /Refund Policy/ },
      { text: 'User Guide', expectedPath: 'userguide.html', expectedTitle: /User Guide/ }
    ];

    for (const item of policyLinks) {
      const link = page.locator('.footer-links').getByRole('link', { name: item.text });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', item.expectedPath);
    }
  });

  test('TC-AUTO-10: Verify Contact Us page renders company registration details', async ({ page }) => {
    await page.goto('/contact.html', { waitUntil: 'domcontentloaded' });

    // Verify company name
    const companyName = page.getByText('SAVY WORK ENTERPRISES');
    await expect(companyName).toBeVisible();

    // Verify GSTIN number
    const gstin = page.getByText('GSTIN: 09BXAPA9280L1Z6');
    await expect(gstin).toBeVisible();

    // Verify location
    const location = page.getByText('Lucknow, Uttar Pradesh');
    await expect(location).toBeVisible();
  });

  test('TC-AUTO-11: Verify footer social media external links target expected profiles', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const socialIcons = page.locator('.social-icon');
    await expect(socialIcons).toHaveCount(3);

    const onclickAttributes = await socialIcons.evaluateAll(elements =>
      elements.map(el => el.getAttribute('onclick') || '')
    );

    expect(onclickAttributes.some(attr => attr.includes('twitter.com/savyapt') && attr.includes('_blank'))).toBeTruthy();
    expect(onclickAttributes.some(attr => attr.includes('linkedin.com/company/savyapt') && attr.includes('_blank'))).toBeTruthy();
    expect(onclickAttributes.some(attr => attr.includes('instagram.com/savyapt') && attr.includes('_blank'))).toBeTruthy();
  });

});
