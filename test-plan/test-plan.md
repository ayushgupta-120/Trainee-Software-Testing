# SAVY APT – Web Application Testing Test Plan

## 1. Document Control
- **Project Name:** SAVY APT AI Platform Quality Assurance & Testing Suite
- **Application Under Test (AUT):** https://savyapt.com/
- **Author:** QA Trainee Engineer ([ayushgupta-120](https://github.com/ayushgupta-120))
- **Document Version:** 1.0.0
- **Creation Date:** September 29, 2026
- **Status:** Approved / Executed

---

## 2. Introduction & Purpose
This Test Plan outlines the testing scope, strategy, environments, tools, entry/exit criteria, and schedule for validating the publicly accessible web application **SAVY APT** (hosted at `https://savyapt.com/`). SAVY APT is a modern generative AI productivity platform offering prompt discovery, embedded interactive chat interfaces, curated AI tools directory, referral mechanics, and responsive design for multidisciplinary creators and businesses.

The goal of this test effort is to deliver an exhaustive, evidence-backed evaluation of the application's functional reliability, user interface integrity, cross-device responsiveness, and graceful handling of unauthenticated user states.

---

## 3. Test Scope

### 3.1 In-Scope Features
The following publicly accessible modules and components were identified, documented in `WEBSITE_ANALYSIS.md`, and comprehensively tested:
1. **Core Navigation & Header:** Brand logo home link, navigation links (`Home`, `Custom Assistant`, `Tools`, `Contact`, `Login`), light/dark theme toggler, and mobile hamburger drawer.
2. **Hero & AI Showcase Section:** Platform taglines, prompt auto-rotation ticker, prompt category filter chips, and embedded interactive chat widget iframe (`chat.html?embed=true&hideSidebar=true`).
3. **AI Tool Directory:** Filter categories, tool cards with meta tags, hover micro-interactions, and unauthenticated click behavior (toast alert `#toolUsagePopup` and redirection to `login.html`).
4. **Interactive Features & Carousels:** Testimonial carousel (5 rotating testimonials, auto-advancing every 8 seconds, manual navigation dots), referral program breakdown, and animated metrics counters.
5. **FAQ Accordion:** Multi-item interactive collapsible questions and answer containers (`.faq-question`, `.faq-answer`).
6. **Form Validation & User Feedback:** Contact form input fields (Name, Email, Subject, Message) and client-side HTML5 constraint validation.
7. **Legal & Compliance:** Public policy routes (`privacy.html`, `terms.html`, `security.html`).
8. **Responsive Layouts:** Desktop (1280px+), Tablet (768px - 1024px), and Mobile viewports (375px - 480px).
9. **Accessibility & Usability:** Contrast switching (Dark/Light mode via `data-theme` attribute), semantic headings, and keyboard tab focus indicators.

### 3.2 Out-of-Scope Features
The following components are excluded from public execution due to external dependency or access constraints:
1. **Google OAuth 2.0 Sign-In:** Third-party OAuth handshake requiring live Google accounts.
2. **Paid Subscription Checkouts:** Payment gateway processing (Stripe / UPI) requiring commercial financial transactions.
3. **Custom Assistant Backend Provisioning:** End-to-end agent building/deployment requiring an authenticated active subscription.
4. **Backend Server Load / Stress Testing:** Public DDOS/stress injection prohibited on production infrastructure.

---

## 4. Testing Strategy & Methodology

| Testing Type | Methodology & Description | Tools Used |
|---|---|---|
| **Smoke Testing** | Validation of 15 mission-critical user paths to verify build health prior to deep test cycles. | Chrome, Manual execution |
| **Functional Testing** | Deep step-by-step verification of UI controls, links, accordions, toggles, and forms against 70 formal test cases. | Manual Test Suite (CSV / Markdown) |
| **Automation Testing** | Automated end-to-end regression testing across Desktop, Tablet, and Mobile viewports. | Playwright, JavaScript, Chromium |
| **Negative & Boundary Testing** | Validation of illegal inputs, boundary length checks, rapid clicking, and unauthenticated access gates. | Manual & Automated Scripts |
| **Cross-Device & Responsive** | Multi-viewport rendering verification at 375x667, 768x1024, and 1280x800. | Playwright Viewports, Chrome DevTools |
| **Theme & UI State Testing** | Dark and Light mode DOM attribute mutations (`data-theme="dark"` / `data-theme="light"`). | Playwright Locators & Visual Inspection |

---

## 5. Test Environment & Tools

- **Operating System:** Windows 11 Enterprise (x64)
- **Browsers Tested:** Google Chrome (Version 140.0.x), Playwright Headless/Headed Chromium
- **Automation Framework:** Playwright v1.56.0 (JavaScript / Node.js v22.23.2)
- **Test Management & Tracking:** Markdown & RFC 4180 CSV test catalogs
- **Defect Tracking:** Standardized Markdown Bug Report Template
- **Evidence Repository:** Timestamped PNG visual artifacts captured via Playwright automation

---

## 6. Entry and Exit Criteria

### 6.1 Entry Criteria
- The public AUT (`https://savyapt.com/`) is stable and responding with HTTP status code 200.
- Architectural and functional footprint documented in `WEBSITE_ANALYSIS.md`.
- Test cases and smoke suite reviewed and structured.
- Automation test harness configured with proper timeouts and browser launch arguments.

### 6.2 Exit Criteria
- 100% of documented manual test cases executed against the live platform.
- 100% execution pass rate for the automated regression suite (all 34 tests passing).
- All defects classified and logged with reproducible steps and screenshots (if discovered).
- Formal Test Execution Report (`test-results/test-execution-report.md`) published with objective metrics.

---

## 7. Roles & Responsibilities

| Role | Responsibility |
|---|---|
| **QA Trainee Engineer** | Website analysis, test planning, manual test suite authoring (70 cases), manual test execution, defect auditing, Playwright automation script development (34 tests), evidence capture, and project reporting. |
| **QA Mentor / Lead** | Review test artifacts, verify coverage completeness, validate automation independence, and inspect GitHub deliverables. |

---

## 8. Risk Assessment & Mitigation

| Risk Identified | Impact | Probability | Mitigation Strategy |
|---|---|---|---|
| Live production website updates alter DOM selectors during testing | High | Low | Employ resilient, user-centric locators (`getByRole`, `getByText`, `aria-label`) rather than brittle dynamic CSS paths. |
| Authentication gates prevent full testing of backend features | Medium | High | Clearly classify gated tests as `Blocked (Authentication Required)`; rigorously verify public redirect and toast mechanisms without bypassing security. |
| Network latency causes flakiness in automated test runs | Medium | Low | Configure explicit wait conditions (`waitForSelector`, `networkidle`, 30s timeouts) in Playwright configuration. |
