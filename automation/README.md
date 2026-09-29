# SAVY APT – Playwright Test Automation Suite

## Overview
This directory contains the automated end-to-end (E2E) testing framework for the **SAVY APT** public web platform (`https://savyapt.com/`). The suite is built with **Playwright (JavaScript)** and designed to provide fast, reliable, and maintainable regression coverage across desktop, tablet, and mobile viewports.

---

## Directory Structure

```text
automation/
├── package.json               # Node.js project manifest & dependencies
├── playwright.config.js       # Playwright runner configuration (Chrome, timeouts, reporters)
├── README.md                  # Automation framework documentation & run guide
├── test-results-summary.md    # Summary of automated test execution metrics
└── tests/                     # Automated test specifications
    ├── homepage.spec.js       # Hero section, auto-rotation ticker, branding assertions
    ├── navigation.spec.js     # Desktop header navigation, footer links, external routing
    ├── theme.spec.js          # Dark/Light theme switching & DOM attribute mutations
    ├── faq.spec.js            # FAQ accordion expand, collapse, and multi-state logic
    ├── mobile.spec.js         # Mobile drawer menu, hamburger toggle, and viewports
    ├── tools.spec.js          # AI tool directory cards, category filters, auth toast gates
    └── responsive.spec.js     # Responsive layout integrity at 375px, 768px, and 1280px
```

---

## Prerequisites
- **Node.js**: v18.0.0 or higher (v22.23.2 verified)
- **npm**: v9.0.0 or higher (v10.9.8 verified)
- **Browser**: Google Chrome or Playwright bundled Chromium

---

## Installation & Setup

1. Open PowerShell or Terminal and navigate to the `automation` folder:
   ```bash
   cd automation
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## Running the Automated Tests

### Run all tests (Headless mode)
```bash
npx playwright test
```

### Run tests in Headed mode (Visible browser window)
```bash
npx playwright test --headed
```

### Run a specific test specification
```bash
npx playwright test tests/homepage.spec.js
npx playwright test tests/tools.spec.js
```

### View the Interactive HTML Test Report
```bash
npx playwright show-report
```

---

## Automation Best Practices Implemented

1. **User-Centric Locators**: Prioritizes `page.getByRole()`, `page.getByText()`, and semantic attributes rather than brittle, deep XPath expressions.
2. **Atomic & Independent Tests**: Each test is self-contained with its own navigation and setup, preventing cascading failures or state contamination.
3. **Resilient Wait Strategies**: Replaces arbitrary `sleep()` pauses with explicit auto-waiting assertions (`toBeVisible()`, `toHaveAttribute()`, `toHaveURL()`).
4. **Graceful Handling of Auth Gates**: Accurately asserts the unauthenticated user journey (e.g. verifying that clicking an AI tool card surfaces `#toolUsagePopup` and redirects to `login.html`).
5. **Cross-Device Viewport Emulation**: Validates core workflows across desktop (1280x800), tablet (768x1024), and mobile (375x667) form factors.

---

## Test Execution Summary

| Test Suite | Spec File | Tests Count | Status |
|---|---|---|---|
| Homepage & Hero | `homepage.spec.js` | 6 | **PASSED** |
| Desktop Navigation | `navigation.spec.js` | 5 | **PASSED** |
| Theme Switcher | `theme.spec.js` | 5 | **PASSED** |
| FAQ Accordion | `faq.spec.js` | 5 | **PASSED** |
| Mobile Viewport & Menu | `mobile.spec.js` | 5 | **PASSED** |
| AI Tool Directory | `tools.spec.js` | 4 | **PASSED** |
| Responsive Layouts | `responsive.spec.js` | 4 | **PASSED** |
| **Total Automated Regression** | **7 Spec Files** | **34 Tests** | **34 / 34 PASSED (100%)** |
