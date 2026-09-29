# SAVY APT – Smoke Test Suite

**Target Website:** https://savyapt.com/  
**Document Purpose:** Defines the high-priority, critical path smoke test cases designed to quickly verify that the primary build and core application workflows are healthy and operational before proceeding with deeper testing.  
**Auditor / QA Engineer:** Trainee – Software Testing  
**Execution Type:** Manual / Pre-flight Smoke Testing  
**Status:** Baseline Suite (All marked as `Not Executed`)  

---

## Smoke Testing Objectives

1. Verify the web application server responds with HTTP 200 and renders without catastrophic errors.
2. Confirm essential structural components (header branding, navigation, hero iframe, and footer) are present in the DOM.
3. Validate that primary user pathways (navigating to login, switching themes, expanding FAQ, and inspecting AI tools) operate as expected.
4. Ensure unauthenticated visitors cannot bypass access control or encounter unhandled exceptions.

---

## Smoke Test Summary Table

| Test Case ID | Feature / Component | Description | Priority | Severity | Status |
|---|---|---|---|---|---|
| **TC-001** | Homepage Availability | Verify homepage loads successfully with HTTP 200 and expected title | High | Critical | `Not Executed` |
| **TC-002** | Branding & Header Logo | Verify primary brand logo and 'SAVY APT' title render in header | High | High | `Not Executed` |
| **TC-003** | Navigation Entry Points | Verify top bar 'Login' and 'Join Now for Free' buttons navigate to login page | High | High | `Not Executed` |
| **TC-004** | Login Page Render | Verify login.html loads with Google Sign-In widget and referral code entry | High | Critical | `Not Executed` |
| **TC-005** | Hero Embedded Chat Iframe | Verify embedded chat interface iframe loads inside hero container without broken frame | High | Critical | `Not Executed` |
| **TC-006** | AI Tools Catalog Display | Verify AI tools catalog section renders all 8 tool cards | High | High | `Not Executed` |
| **TC-007** | Global Footer Render | Verify global footer, policy links, and disclaimer text render at page bottom | Medium | Medium | `Not Executed` |
| **TC-015** | Theme Switcher (Dark) | Verify clicking theme toggle button switches document to dark mode | High | Medium | `Not Executed` |
| **TC-024** | Mobile Hamburger Menu | Verify hamburger button opens and closes navigation menu on mobile viewports | High | High | `Not Executed` |
| **TC-028** | FAQ Accordion Expand | Verify clicking a collapsed FAQ question expands the answer and rotates indicator | High | Medium | `Not Executed` |
| **TC-037** | Tool Auth Interceptor | Verify unauthenticated click on protected tool card shows warning toast | High | High | `Not Executed` |
| **TC-045** | Testimonial Slider | Verify clicking Next button (→) advances to next testimonial card | High | Medium | `Not Executed` |

---

## Detailed Smoke Test Cases

### TC-001: Homepage Availability
- **Module:** Smoke Testing
- **Test Scenario:** Verify homepage loads successfully with HTTP 200 and expected page title.
- **Precondition:** Web browser open with working network connection.
- **Test Steps:**
  1. Open browser.
  2. Navigate to `https://savyapt.com/`.
  3. Observe network status and DOM title.
- **Test Data:** `https://savyapt.com/`
- **Expected Result:** Page returns HTTP 200 OK within 3 seconds, title contains `SAVY APT - AI Platform`, and hero section renders cleanly.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Critical

---

### TC-002: Branding & Header Logo
- **Module:** Smoke Testing
- **Test Scenario:** Verify primary website logo and brand name display properly in header.
- **Precondition:** Homepage loaded in browser.
- **Test Steps:**
  1. Inspect top-left sticky header area.
  2. Verify presence and rendering of `#header-logo` image and `SAVY APT` text.
- **Test Data:** N/A
- **Expected Result:** Brand logo and name render clearly with correct alignment and no broken image placeholder.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** High

---

### TC-003: Navigation Entry Points
- **Module:** Smoke Testing
- **Test Scenario:** Verify header "Login" and "Join Now for Free" buttons navigate to login page.
- **Precondition:** Desktop viewport (> 768px).
- **Test Steps:**
  1. Click "Login" button in top bar.
  2. Verify browser navigates to `https://savyapt.com/login.html`.
  3. Return to homepage and click "Join Now for Free".
- **Test Data:** Target URL: `login.html`
- **Expected Result:** Both buttons direct user to `login.html` with HTTP 200 status.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** High

---

### TC-004: Login Page Render
- **Module:** Smoke Testing
- **Test Scenario:** Verify login page loads with Google Sign-In widget and referral code entry.
- **Precondition:** User navigates to `https://savyapt.com/login.html`.
- **Test Steps:**
  1. Open `https://savyapt.com/login.html`.
  2. Inspect login card elements.
  3. Verify Google Sign-In iframe container and referral entry button.
- **Test Data:** URL: `https://savyapt.com/login.html`
- **Expected Result:** Login page renders with Google Sign-In button container, "Welcome to SAVY APT" heading, and referral code trigger.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Critical

---

### TC-005: Hero Embedded Chat Iframe
- **Module:** Smoke Testing
- **Test Scenario:** Verify embedded chat interface iframe loads inside hero section without broken frame.
- **Precondition:** Homepage is loaded.
- **Test Steps:**
  1. Scroll to hero section.
  2. Inspect `#chatIframe`.
  3. Verify iframe source attribute is `chat.html?embed=true&hideSidebar=true`.
- **Test Data:** Iframe ID: `#chatIframe`
- **Expected Result:** Iframe renders embedded chat interface cleanly without redirecting parent window.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Critical

---

### TC-006: AI Tools Catalog Display
- **Module:** Smoke Testing
- **Test Scenario:** Verify AI tools catalog section renders all 8 tool cards.
- **Precondition:** Homepage is loaded.
- **Test Steps:**
  1. Scroll down to `.tools-section`.
  2. Count `.tool-card` elements in `#toolsGrid`.
  3. Verify card titles, icons, and badges.
- **Test Data:** Expected Count: 8 tool cards
- **Expected Result:** All 8 cards render with respective icons, titles, descriptions, and trial badges.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** High

---

### TC-007: Global Footer Render
- **Module:** Smoke Testing
- **Test Scenario:** Verify global footer, legal policy links, and disclaimer render at page bottom.
- **Precondition:** Homepage is loaded.
- **Test Steps:**
  1. Scroll to bottom of page.
  2. Inspect `.footer-links-section` and `#global-footer`.
  3. Check links for Contact, Terms, Privacy, Community, Refund, and User Guide.
- **Test Data:** 6 policy links
- **Expected Result:** Footer displays brand title, 6 functional policy links, 3 social icons, and AI trademark disclaimer.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** Medium | **Severity:** Medium

---

### TC-015: Theme Switcher (Dark Mode)
- **Module:** Theme
- **Test Scenario:** Verify clicking theme toggle button switches document to dark mode.
- **Precondition:** Page is loaded in light mode.
- **Test Steps:**
  1. Click `.theme-toggle` in top bar.
  2. Inspect `<html>` element `data-theme` attribute.
  3. Verify toggle icon changes to moon ("🌙").
- **Test Data:** Click `.theme-toggle`
- **Expected Result:** `data-theme` updates to `dark`, background darkens to `#0f0f0f`, text updates to white, and icon switches to "🌙".
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Medium

---

### TC-024: Mobile Hamburger Menu
- **Module:** Mobile Menu
- **Test Scenario:** Verify hamburger button opens and closes navigation menu on mobile viewports.
- **Precondition:** Browser viewport set to mobile width (400px).
- **Test Steps:**
  1. Click hamburger button (`.mobile-menu-btn`).
  2. Verify `#mobileMenu` displays with class `show`.
  3. Click hamburger button again.
- **Test Data:** Viewport: 400x800
- **Expected Result:** Menu smoothly opens on first click and closes on second click.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** High

---

### TC-028: FAQ Accordion Expand
- **Module:** FAQ Accordion
- **Test Scenario:** Verify clicking a collapsed FAQ item expands the answer.
- **Precondition:** Second FAQ item is collapsed.
- **Test Steps:**
  1. Locate second FAQ question ("How is SAVY APT different?").
  2. Click question element.
  3. Observe expansion and arrow rotation.
- **Test Data:** Second FAQ item
- **Expected Result:** Item gains class `active`, answer panel expands, and arrow rotates 180 degrees.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Medium

---

### TC-037: Tool Auth Interceptor
- **Module:** AI Tools
- **Test Scenario:** Verify clicking an overlay tool card without login displays warning toast popup.
- **Precondition:** User is unauthenticated (no `userEmail` in localStorage).
- **Test Steps:**
  1. Click on "Market Research" tool card.
  2. Observe `#toolUsagePopup` notification.
- **Test Data:** Tool: Market Research
- **Expected Result:** Red toast notification displays message: `"Please sign in with Google first!"`.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** High

---

### TC-045: Testimonial Slider
- **Module:** Testimonials
- **Test Scenario:** Verify clicking Next button (→) advances to next testimonial card.
- **Precondition:** Carousel is at index 0 (Jennifer Lee).
- **Test Steps:**
  1. Click `#nextTestimonial` button.
  2. Check track transform and active dot.
- **Test Data:** Button: `#nextTestimonial`
- **Expected Result:** Track shifts by -100% displaying Isabella Rossi card, and second dot becomes active.
- **Actual Result:** `Not Executed`
- **Status:** `Not Executed`
- **Priority:** High | **Severity:** Medium

---

## Smoke Test Exit Criteria
- **100% of Critical and High priority smoke tests must pass** before any new build, release, or feature branch is approved for comprehensive regression testing.
- Any blocker or crash in the smoke suite immediately rejects the candidate deployment.
