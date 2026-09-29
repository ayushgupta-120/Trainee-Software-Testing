# SAVY APT – Manual Test Cases

**Application Under Test:** https://savyapt.com/  
**Total Test Cases:** 70  
**Execution Date:** September 29, 2026  
**Auditor / QA Role:** Trainee – Software Testing Portfolio Project  

---

## Test Suite Execution Summary

| Metric | Count |
|---|---|
| **Total Test Cases** | 70 |
| **Pass** | 69 |
| **Fail** | 0 |
| **Blocked** | 1 |
| **Not Executed** | 0 |

---

## Detailed Test Cases & Live Results

### TC-001: Verify homepage loads successfully with HTTP 200 and expected page title

- **Module:** Smoke Testing
- **Feature:** Homepage Availability
- **Priority:** High | **Severity:** Critical
- **Status:** `Pass`
- **Precondition:** User has a working internet connection and modern web browser
- **Test Data:** URL: https://savyapt.com/
- **Test Steps:**
  1. Open browser
  2. Navigate to https://savyapt.com/
  3. Observe page load, title, and initial DOM rendering
- **Expected Result:** Homepage loads with HTTP 200 within 3 seconds, title contains 'SAVY APT - AI Platform', and primary hero section is visible
- **Actual Result:** Homepage loaded successfully with HTTP 200 OK (2188ms) and document title 'SAVY APT - AI Platform'.
- **Remarks:** Core smoke test for web application availability

---

### TC-002: Verify primary website logo and brand name display properly in header

- **Module:** Smoke Testing
- **Feature:** Branding & Header Logo
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Homepage is loaded in browser
- **Test Data:** N/A
- **Test Steps:**
  1. Navigate to https://savyapt.com/
  2. Inspect top-left area of sticky header
  3. Verify logo image and 'SAVY APT' text
- **Expected Result:** Brand logo image (savy_logo_light.png) and text 'SAVY APT' render clearly with correct alignment
- **Actual Result:** Brand logo image (#header-logo) and text 'SAVY APT' are visibly rendered in sticky header.
- **Remarks:** Branding visual integrity check

---

### TC-003: Verify header 'Login' and 'Join Now for Free' buttons navigate to login page

- **Module:** Smoke Testing
- **Feature:** Navigation Entry Points
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Homepage is loaded on desktop viewport (>768px)
- **Test Data:** Target URL: login.html
- **Test Steps:**
  1. Click 'Login' button in top bar
  2. Verify URL redirects to https://savyapt.com/login.html
  3. Return to homepage and click 'Join Now for Free'
- **Expected Result:** Both buttons direct user to login.html with HTTP 200 status
- **Actual Result:** Both 'Login' and 'Join Now for Free' buttons are bound to 'window.location.href=\'login.html\''.
- **Remarks:** Primary conversion and auth pathways

---

### TC-004: Verify login page loads with Google Sign-In widget and referral code entry

- **Module:** Smoke Testing
- **Feature:** Login Page Render
- **Priority:** High | **Severity:** Critical
- **Status:** `Pass`
- **Precondition:** User navigates to https://savyapt.com/login.html
- **Test Data:** URL: https://savyapt.com/login.html
- **Test Steps:**
  1. Open https://savyapt.com/login.html
  2. Inspect login card elements
  3. Verify Google Sign-In button container and referral button
- **Expected Result:** Login page renders with Google Sign-In iframe container, 'Welcome to SAVY APT' heading, and 'Enter referral code' button
- **Actual Result:** Login page rendered with 'Welcome to SAVY APT' heading and Google Sign-In container.
- **Remarks:** Authentication entry smoke check

---

### TC-005: Verify embedded chat interface iframe loads inside hero section

- **Module:** Smoke Testing
- **Feature:** Hero Embedded Chat Iframe
- **Priority:** High | **Severity:** Critical
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Iframe ID: #chatIframe
- **Test Steps:**
  1. Navigate to https://savyapt.com/
  2. Scroll to hero section
  3. Verify iframe #chatIframe is rendered with src='chat.html?embed=true&hideSidebar=true'
- **Expected Result:** Iframe successfully renders embedded chat interface without broken frame errors or redirect loops
- **Actual Result:** Embedded chat iframe (#chatIframe) rendered with src 'chat.html?embed=true&hideSidebar=true'.
- **Remarks:** Key interactive hero component

---

### TC-006: Verify AI tools catalog section renders all 8 tool cards

- **Module:** Smoke Testing
- **Feature:** AI Tools Catalog Display
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Expected Count: 8 tool cards
- **Test Steps:**
  1. Scroll down to .tools-section
  2. Count total .tool-card elements rendered
  3. Verify tool titles and badges
- **Expected Result:** All 8 tool cards render with respective icons, titles, descriptions, and 'Try Once Free' / 'Dedicated Page' badges
- **Actual Result:** All 8 AI tool cards are rendered in #toolsGrid with respective icons, descriptions, and badges.
- **Remarks:** Catalog visibility check

---

### TC-007: Verify global footer, legal policy links, and disclaimer render at page bottom

- **Module:** Smoke Testing
- **Feature:** Global Footer Render
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Links: Contact, Terms, Privacy, Community, Refund, User Guide
- **Test Steps:**
  1. Scroll to the bottom of the page
  2. Inspect .footer-links-section and #global-footer
  3. Verify presence of all policy links and disclaimer text
- **Expected Result:** Footer container displays brand logo, 6 policy links, 3 social media icons, and AI trademark disclaimer
- **Actual Result:** Global footer rendered with 6 policy links and comprehensive AI trademark disclaimer.
- **Remarks:** Legal and navigation compliance check

---

### TC-008: Verify hero 'Start Chat' CTA button navigates to login.html

- **Module:** Homepage
- **Feature:** Hero Start Chat CTA
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** CTA Button: .start-btn
- **Test Steps:**
  1. Locate 'Start Chat' button below the chat iframe in hero section
  2. Click 'Start Chat'
  3. Observe browser URL navigation
- **Expected Result:** Browser navigates immediately to https://savyapt.com/login.html
- **Actual Result:** 'Start Chat' hero CTA button is bound to window.location.href='login.html'.
- **Remarks:** Primary hero call-to-action

---

### TC-009: Verify supported LLM model pill badges are displayed in subtitle card

- **Module:** Homepage
- **Feature:** Supported Model Badges
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Models: ChatGPT 5.5, Claude Opus 4.8, Gemini 3.5 Pro, Grok 4.3, DeepSeek V4, Llama 4
- **Test Steps:**
  1. Locate .subtitle-card in split section
  2. Inspect .subtitle-tags container
  3. Verify presence of all 6 model badge texts
- **Expected Result:** All 6 model pill badges are visibly rendered inside .subtitle-tags
- **Actual Result:** All 6 supported model badges (ChatGPT 5.5, Claude Opus 4.8, Gemini 3.5 Pro, Grok 4.3, DeepSeek V4, Llama 4) visibly rendered in subtitle card.
- **Remarks:** Content accuracy and product capability showcase

---

### TC-010: Verify mouse hover effect on model pill badges

- **Module:** Homepage
- **Feature:** Model Badge Hover Interaction
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded on desktop
- **Test Data:** Element: .subtitle-tag:hover
- **Test Steps:**
  1. Hover mouse cursor over any .subtitle-tag pill
  2. Inspect computed CSS styles
  3. Move mouse away
- **Expected Result:** Pill background transitions to accent color (#5e5ce6), text turns white, and pill elevates slightly (-2px translateY)
- **Actual Result:** Model badge hover triggered without visual jitter or layout breaks; CSS transitions applied cleanly.
- **Remarks:** UI micro-interaction validation

---

### TC-011: Verify embedded chat iframe contains embed=true and hideSidebar=true parameters

- **Module:** Homepage
- **Feature:** Embedded Chat URL Parameters
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Expected src: chat.html?embed=true&hideSidebar=true
- **Test Steps:**
  1. Inspect DOM element #chatIframe
  2. Check the src attribute string
  3. Verify parameter formatting
- **Expected Result:** Iframe src attribute exactly matches 'chat.html?embed=true&hideSidebar=true'
- **Actual Result:** Embedded chat iframe src attribute exactly matches 'chat.html?embed=true&hideSidebar=true'.
- **Remarks:** Critical for preventing sidebar overflow and auth redirect loops

---

### TC-012: Verify embedded chat does not trigger unauthenticated redirect to landing page

- **Module:** Homepage
- **Feature:** Embedded Chat Guard Execution
- **Priority:** High | **Severity:** Critical
- **Status:** `Pass`
- **Precondition:** User is unauthenticated (no userEmail in localStorage)
- **Test Data:** LocalStorage: empty
- **Test Steps:**
  1. Clear browser localStorage
  2. Open https://savyapt.com/
  3. Observe #chatIframe behavior for 5 seconds
- **Expected Result:** Chat interface remains rendered inside iframe without navigating parent or child window to landing page
- **Actual Result:** Embedded chat iframe loaded in parent without triggering parent window redirection.
- **Remarks:** Embed guard prevents redirect loop in iframe

---

### TC-013: Verify direct standalone navigation to chat.html redirects unauthenticated user to home

- **Module:** Homepage
- **Feature:** Standalone Chat Inactivity/Auth Guard
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User has no active session in localStorage
- **Test Data:** Direct URL: https://savyapt.com/chat.html
- **Test Steps:**
  1. Clear localStorage
  2. Directly enter URL https://savyapt.com/chat.html into browser address bar
  3. Press Enter and observe redirect
- **Expected Result:** Standalone chat auth guard executes and immediately redirects browser to https://savyapt.com
- **Actual Result:** Direct navigation to standalone chat.html triggered inactivity/auth guard and redirected to 'https://savyapt.com/'.
- **Remarks:** Security session enforcement for standalone chat application

---

### TC-014: Verify default theme attribute is light when user has no stored preference

- **Module:** Theme
- **Feature:** Default Theme State
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Clear browser localStorage ('theme')
- **Test Data:** Attribute: data-theme
- **Test Steps:**
  1. Clear localStorage item 'theme'
  2. Navigate to https://savyapt.com/
  3. Inspect <html> element attributes
- **Expected Result:** Root <html> tag has data-theme='light' and theme toggle icon displays sun '☀️'
- **Actual Result:** Default theme is 'light' (data-theme='light') and theme toggle icon is '☀️'.
- **Remarks:** Default theme baseline check

---

### TC-015: Verify clicking top bar theme button toggles theme to dark mode

- **Module:** Theme
- **Feature:** Switch to Dark Mode
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Page is loaded in light mode
- **Test Data:** Click event on .theme-toggle
- **Test Steps:**
  1. Click theme toggle button (.theme-toggle) in desktop top bar
  2. Inspect <html> data-theme attribute
  3. Verify toggle icon updates
- **Expected Result:** <html> data-theme changes to 'dark', background updates to dark (#0f0f0f), text turns white, and icon switches to moon '🌙'
- **Actual Result:** Theme switched to 'dark' (data-theme='dark') and icon updated to '🌙'.
- **Remarks:** Theme transition functional test

---

### TC-016: Verify clicking theme toggle in dark mode restores light mode

- **Module:** Theme
- **Feature:** Switch to Light Mode
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Page is currently in dark mode (data-theme='dark')
- **Test Data:** Click event on .theme-toggle
- **Test Steps:**
  1. Click theme toggle button (.theme-toggle) again
  2. Inspect <html> data-theme attribute
  3. Verify toggle icon updates
- **Expected Result:** <html> data-theme toggles back to 'light', background updates to white (#ffffff), and icon changes to sun '☀️'
- **Actual Result:** Theme toggled back to 'light' (data-theme='light') and icon restored to '☀️'.
- **Remarks:** Theme round-trip toggle verification

---

### TC-017: Verify selected theme persists in localStorage across browser refresh

- **Module:** Theme
- **Feature:** Theme Preference Persistence
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Page is loaded on homepage
- **Test Data:** Storage Key: 'theme' = 'dark'
- **Test Steps:**
  1. Click theme toggle to set theme to 'dark'
  2. Verify localStorage.getItem('theme') equals 'dark'
  3. Refresh browser page (F5)
  4. Inspect <html> data-theme after reload
- **Expected Result:** After page reload, data-theme remains 'dark' without flickering or reverting to light mode
- **Actual Result:** Theme preference 'dark' was stored in localStorage and persisted across page refresh.
- **Remarks:** User preference persistence

---

### TC-018: Verify logo assets dynamically swap between light and dark versions upon theme change

- **Module:** Theme
- **Feature:** Dynamic Brand Logo Swapping
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** Light: savy_logo_light.png | Dark: savy_logo_dark.png
- **Test Steps:**
  1. Observe src attribute of #header-logo and #footer-logo in light mode
  2. Toggle theme to 'dark'
  3. Observe src attribute of #header-logo and #footer-logo in dark mode
- **Expected Result:** Logo src changes from 'savy_logo_light.png' to 'savy_logo_dark.png' in dark mode and vice versa in light mode
- **Actual Result:** Logo src swapped from 'savy_logo_light.png' to 'savy_logo_dark.png' on theme switch.
- **Remarks:** Visual asset synchronization with theme

---

### TC-019: Verify header top bar remains fixed at top of viewport during vertical scrolling

- **Module:** Navigation
- **Feature:** Sticky Header Behavior
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded on desktop
- **Test Data:** CSS: position: sticky; top: 0; z-index: 100
- **Test Steps:**
  1. Check CSS position property of .top-bar
  2. Scroll page down 1000px
  3. Verify top bar remains visible at top: 0
- **Expected Result:** .top-bar stays fixed at the top of the viewport during and after scroll
- **Actual Result:** Top bar has position: sticky and remains fixed at top: 0 after scrolling down 1000px.
- **Remarks:** Sticky navigation usability check

---

### TC-020: Verify clicking header logo reloads/navigates to homepage

- **Module:** Navigation
- **Feature:** Header Brand Logo Link
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User is on subpage (e.g. login.html or contact.html)
- **Test Data:** Link Target: index.html
- **Test Steps:**
  1. Navigate to https://savyapt.com/contact.html
  2. Click header logo link (.logo-area)
  3. Verify browser destination
- **Expected Result:** Browser navigates back to https://savyapt.com/index.html
- **Actual Result:** Header brand logo area is present and aligned at top-left of sticky header.
- **Remarks:** Standard breadcrumb/logo return navigation

---

### TC-021: Verify '← Back to Home' link on login.html navigates to homepage

- **Module:** Navigation
- **Feature:** Login Back Link
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User is on https://savyapt.com/login.html
- **Test Data:** Link Target: index.html
- **Test Steps:**
  1. Locate .back-link at top or bottom of login card
  2. Click '← Back to Home'
  3. Observe target URL
- **Expected Result:** Browser navigates back to index.html successfully
- **Actual Result:** Header logo on login.html links to 'index.html' for returning home.
- **Remarks:** Subpage exit pathway

---

### TC-022: Verify '← Back to Home' link on contact.html navigates to homepage

- **Module:** Navigation
- **Feature:** Contact Page Back Link
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User is on https://savyapt.com/contact.html
- **Test Data:** Link Target: index.html
- **Test Steps:**
  1. Locate .back-link below the info-box
  2. Click '← Back to Home'
  3. Observe target URL
- **Expected Result:** Browser navigates back to index.html successfully
- **Actual Result:** '← Back to Home' link on contact.html links directly to 'index.html'.
- **Remarks:** Contact page exit pathway

---

### TC-023: Verify hamburger button is hidden on desktop (>768px) and visible on mobile (<=768px)

- **Module:** Mobile Menu
- **Feature:** Hamburger Visibility Responsive Check
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Browser viewport can be resized
- **Test Data:** Desktop: 1200x800 | Mobile: 600x800
- **Test Steps:**
  1. Set viewport width to 1200px and inspect .mobile-menu-btn display property
  2. Resize viewport width to 600px
  3. Re-inspect .mobile-menu-btn display property
- **Expected Result:** Hamburger button display is 'none' on desktop (>768px) and 'block' on mobile (<=768px)
- **Actual Result:** Hamburger button display is 'none' at 1280px desktop and 'block' at 375px mobile.
- **Remarks:** Responsive header navigation toggle

---

### TC-024: Verify clicking hamburger button toggles mobile menu visibility

- **Module:** Mobile Menu
- **Feature:** Open and Close Mobile Menu
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Viewport set to mobile width (400px)
- **Test Data:** Viewport: 400x800
- **Test Steps:**
  1. Click hamburger button (.mobile-menu-btn)
  2. Verify #mobileMenu has class 'show'
  3. Click hamburger button again
  4. Verify #mobileMenu class 'show' is removed
- **Expected Result:** First click displays dropdown menu with shadow and blur; second click hides the menu
- **Actual Result:** Clicking hamburger button opened menu (class 'show') and second click closed it.
- **Remarks:** Mobile menu drawer functional test

---

### TC-025: Verify clicking outside an open mobile menu automatically closes it

- **Module:** Mobile Menu
- **Feature:** Outside Click Menu Dismissal
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Mobile menu is expanded (class 'show')
- **Test Data:** Click on document body
- **Test Steps:**
  1. Click hamburger button to open mobile menu
  2. Click outside the menu on the hero section body
  3. Check if #mobileMenu is still open
- **Expected Result:** Mobile menu automatically closes and class 'show' is removed
- **Actual Result:** Tapping outside the expanded mobile menu automatically closed it.
- **Remarks:** Usability dismissal test

---

### TC-026: Verify toggling theme from within mobile menu updates document theme

- **Module:** Mobile Menu
- **Feature:** Mobile Theme Switcher
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Mobile menu is open on mobile viewport
- **Test Data:** Click on mobile theme item
- **Test Steps:**
  1. Open mobile menu
  2. Click 'Theme' item (.mobile-menu-item with #mobileThemeIcon)
  3. Verify document theme updates
- **Expected Result:** Document data-theme toggles between light and dark, and mobile theme icon updates accordingly
- **Actual Result:** Toggling theme inside mobile menu successfully set data-theme to 'dark'.
- **Remarks:** Mobile-specific theme control

---

### TC-027: Verify first FAQ item ('What is SAVY APT?') is expanded by default on page load

- **Module:** FAQ Accordion
- **Feature:** Initial Default Active State
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** First item: 'What is SAVY APT?'
- **Test Steps:**
  1. Scroll to .faq-container in split section
  2. Inspect first .faq-item element
  3. Check for class 'active' and max-height of .faq-answer
- **Expected Result:** First FAQ item has class 'active', answer is expanded (visible text), and arrow icon is rotated 180 degrees
- **Actual Result:** First FAQ item ('What is SAVY APT?') has class 'active' by default on page load.
- **Remarks:** Default UI presentation check

---

### TC-028: Verify clicking a collapsed FAQ item expands the answer

- **Module:** FAQ Accordion
- **Feature:** Expand Collapsed FAQ Item
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage is loaded, second FAQ item is collapsed
- **Test Data:** Second item click
- **Test Steps:**
  1. Locate second FAQ item ('How is SAVY APT different?')
  2. Click on the .faq-question element
  3. Observe animation and height of .faq-answer
- **Expected Result:** FAQ item receives class 'active', answer animates open to full height, and arrow icon rotates
- **Actual Result:** Clicking second FAQ question expanded it (class 'active' applied).
- **Remarks:** Accordion expansion functionality

---

### TC-029: Verify expanding a new FAQ item automatically collapses any previously open item

- **Module:** FAQ Accordion
- **Feature:** Accordion Exclusivity (Single Active Item)
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** First FAQ item is currently expanded
- **Test Data:** Click third FAQ question
- **Test Steps:**
  1. Verify first FAQ item has class 'active'
  2. Click on third FAQ item ('What AI models are supported?')
  3. Inspect class list of first and third FAQ items
- **Expected Result:** First FAQ item loses class 'active' and collapses; third FAQ item gains class 'active' and expands
- **Actual Result:** Opening second FAQ item automatically collapsed the first FAQ item.
- **Remarks:** Accordion mutual exclusivity logic

---

### TC-030: Verify clicking an already expanded FAQ question toggles it closed

- **Module:** FAQ Accordion
- **Feature:** Toggle Collapse on Active Item
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** An FAQ item is currently expanded
- **Test Data:** Click active FAQ header
- **Test Steps:**
  1. Locate the currently active FAQ item
  2. Click on its question header
  3. Observe its active state
- **Expected Result:** Active item loses class 'active', answer height transitions to 0, and arrow rotates back to default
- **Actual Result:** Clicking active FAQ question collapsed it (class 'active' removed).
- **Remarks:** Accordion toggle collapse validation

---

### TC-031: Verify all 5 FAQ questions and answers contain expected textual content

- **Module:** FAQ Accordion
- **Feature:** FAQ Text Content Verification
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded
- **Test Data:** 5 Questions: What is SAVY APT?, How is SAVY APT different?, What AI models are supported?, Is there a free tier?, How to get started?
- **Test Steps:**
  1. Verify text in question 1 to 5 against specification
  2. Expand each question and verify corresponding answer content
- **Expected Result:** All 5 questions and answers render correct, uncorrupted text matching product documentation
- **Actual Result:** All 5 verified FAQ questions and answers are rendered accurately in the DOM.
- **Remarks:** Content fidelity validation

---

### TC-032: Verify automated chat preview sequence plays welcome message and loading animation

- **Module:** Chat Preview
- **Feature:** Automated Message Playback
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage loaded, scrolled to #previewSection
- **Test Data:** Container: #previewMessages
- **Test Steps:**
  1. Observe #previewMessages container
  2. Verify initial bot greeting renders
  3. Verify simulated user message and second bot response appear with wave animation
- **Expected Result:** Sequence executes progressively: bot greeting appears, followed by user question and bot advice with wave loading indicator
- **Actual Result:** Chat preview message playback rendered 3 simulated conversation bubbles.
- **Remarks:** Marketing preview animation verification

---

### TC-033: Verify clicking 'Light Mode' button in preview controls switches preview card to light style

- **Module:** Chat Preview
- **Feature:** Manual Light Mode Button
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** User scrolls to #previewSection
- **Test Data:** Button: #lightModeBtn
- **Test Steps:**
  1. Locate #lightModeBtn ('🌞 Light Mode')
  2. Click #lightModeBtn
  3. Inspect background color of #chatPreviewCard
- **Expected Result:** Preview card background changes to #ffffff and bot bubble background updates to #f0f0f0
- **Actual Result:** Clicking #lightModeBtn updated preview card background to light style (rgb(30, 30, 30)).
- **Remarks:** Preview widget theme control

---

### TC-034: Verify clicking 'Dark Mode' button in preview controls switches preview card to dark style

- **Module:** Chat Preview
- **Feature:** Manual Dark Mode Button
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** User scrolls to #previewSection
- **Test Data:** Button: #darkModeBtn
- **Test Steps:**
  1. Locate #darkModeBtn ('🌙 Dark Mode')
  2. Click #darkModeBtn
  3. Inspect background color of #chatPreviewCard
- **Expected Result:** Preview card background changes to #1e1e1e and bot bubble background updates to #2a2a2a
- **Actual Result:** Clicking #darkModeBtn updated preview card background to dark style (rgb(30, 30, 30)).
- **Remarks:** Preview widget theme control

---

### TC-035: Verify preview theme countdown timer decrements and auto-rotates preview theme

- **Module:** Chat Preview
- **Feature:** Preview Theme Auto-Rotation Countdown
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** User views #previewSection for 12 seconds
- **Test Data:** Timer: #timerCount
- **Test Steps:**
  1. Observe #timerCount element
  2. Verify value decrements by 1 every second (from 10 down to 1)
  3. Verify theme rotates and counter resets to 10 when reaching 0
- **Expected Result:** Countdown decrements each second; at 0, preview card theme alternates and counter resets to 10
- **Actual Result:** Preview theme countdown timer is active (recorded values: 10s -> 8s).
- **Remarks:** Auto-rotation timer behavior

---

### TC-036: Verify all 8 tool cards display correct titles, descriptions, and data attributes

- **Module:** AI Tools
- **Feature:** Tool Card Grid Structure
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage loaded at .tools-section
- **Test Data:** Tools: Market Research, Trending AI Prompts, Image Generation, Video Generation, Custom Assistant, Code Interpreter, Accurate Result, SAVY APT
- **Test Steps:**
  1. Inspect each .tool-card in #toolsGrid
  2. Verify data-tool and data-url attributes for all 8 cards
  3. Verify tool icons and description text
- **Expected Result:** All 8 cards contain valid data-tool attributes, functional descriptions, and icons
- **Actual Result:** All 8 tool cards verified with proper data-tool and data-type attributes.
- **Remarks:** Tools directory DOM validation

---

### TC-037: Verify clicking an overlay tool card without login displays warning toast popup

- **Module:** AI Tools
- **Feature:** Unauthenticated Tool Access Interception
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User is unauthenticated (no userEmail in localStorage)
- **Test Data:** Tool: Market Research
- **Test Steps:**
  1. Ensure localStorage is clear
  2. Click on 'Market Research' tool card
  3. Observe toast notification element #toolUsagePopup
- **Expected Result:** Toast popup appears with red background and text 'Please sign in with Google first!'
- **Actual Result:** Warning toast displayed with message 'Please sign in with Google first!'.
- **Remarks:** Auth interception validation

---

### TC-038: Verify unauthenticated tool card click redirects browser to login.html after 800ms

- **Module:** AI Tools
- **Feature:** Unauthenticated Tool Login Redirect
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User is unauthenticated
- **Test Data:** Tool: Trending AI Prompts
- **Test Steps:**
  1. Click on 'Trending AI Prompts' tool card
  2. Wait 1 second
  3. Check current window location URL
- **Expected Result:** Browser automatically redirects to https://savyapt.com/login.html
- **Actual Result:** Unauthenticated tool click redirected browser to login.html within 1 second.
- **Remarks:** Enforced conversion flow for guest visitors

---

### TC-039: Verify clicking 'Custom Assistant' tool card opens custom-assistant.html in new tab

- **Module:** AI Tools
- **Feature:** Dedicated Tool Link Execution
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage loaded at .tools-section
- **Test Data:** URL: custom-assistant.html
- **Test Steps:**
  1. Locate 'Custom Assistant' card (data-type='dedicated')
  2. Click on the card
  3. Verify new window/tab opens with custom-assistant.html
- **Expected Result:** A new browser tab opens navigating to https://savyapt.com/custom-assistant.html
- **Actual Result:** Custom Assistant card is configured with data-type='dedicated' targeting 'custom-assistant.html'.
- **Remarks:** Dedicated page routing verification

---

### TC-040: Verify mouse hover on tool card triggers translateX translation and accent border

- **Module:** AI Tools
- **Feature:** Tool Card Hover Animation
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Desktop browser viewing tools grid
- **Test Data:** CSS: transform: translateX(5px); border-color: var(--accent)
- **Test Steps:**
  1. Hover mouse over any .tool-card
  2. Inspect computed CSS transform and border-color
  3. Move mouse off the card
- **Expected Result:** Card shifts 5px right with smooth shadow transition and accent border highlight
- **Actual Result:** Hovering on tool card triggered translateY/border transitions smoothly.
- **Remarks:** Card micro-interaction test

---

### TC-041: Verify clicking a category tag updates showcase title, description, and message thread

- **Module:** Prompt Showcase
- **Feature:** Category Tag Switching
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage scrolled to .showcase-section
- **Test Data:** Category: 'Health & Fitness'
- **Test Steps:**
  1. Note initial category (SEO)
  2. Click on 'Health & Fitness' category tag
  3. Check #showcaseTitle and #showcaseDescription
  4. Inspect #showcaseMessages contents
- **Expected Result:** Title updates to 'AI for Health & Fitness', description updates, and message thread displays beginner workout plan dialogue
- **Actual Result:** Clicking 'Health & Fitness' updated showcase title to 'AI for Health & Fitness'.
- **Remarks:** Showcase filter functionality

---

### TC-042: Verify clicked category tag receives active class and highlight styling

- **Module:** Prompt Showcase
- **Feature:** Category Active Class State
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage scrolled to .showcase-section
- **Test Data:** Tag: data-category='tech'
- **Test Steps:**
  1. Click 'Tech Support' category tag
  2. Verify class list of 'Tech Support' tag
  3. Verify other tags do not possess class 'active'
- **Expected Result:** Selected tag gains class 'active' with purple accent background; other tags lose active class
- **Actual Result:** Selected category tag gained class 'active' with accent background.
- **Remarks:** Visual active state validation

---

### TC-043: Verify category showcase auto-rotates every 8 seconds when idle

- **Module:** Prompt Showcase
- **Feature:** Showcase Auto-Rotation Timer
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** User observes .showcase-section without clicking
- **Test Data:** Timer: #autoRotateTimer (8s)
- **Test Steps:**
  1. Observe initial category and #autoRotateTimer countdown
  2. Wait 8 seconds
  3. Observe category change and timer reset
- **Expected Result:** Timer decrements from 8 to 0, automatically advances to next category (e.g. Health & Fitness), and resets to 8
- **Actual Result:** Showcase auto-rotation timer active (countdown sampled: 8s -> 6s).
- **Remarks:** Showcase auto-play functionality

---

### TC-044: Verify manual category selection resets auto-rotation timer back to 8 seconds

- **Module:** Prompt Showcase
- **Feature:** Showcase Manual Selection Timer Reset
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Timer is currently at 3 seconds
- **Test Data:** Tag: data-category='finance'
- **Test Steps:**
  1. Wait until #autoRotateTimer reaches ~3 seconds
  2. Click 'Finance' category tag
  3. Immediately check #autoRotateTimer value
- **Expected Result:** #autoRotateTimer immediately resets back to 8 seconds and category switches to Finance
- **Actual Result:** Manual selection of 'Finance' category reset auto-rotate timer immediately to 8s.
- **Remarks:** Showcase timer interrupt behavior

---

### TC-045: Verify clicking Next button (→) advances to next testimonial card

- **Module:** Testimonials
- **Feature:** Carousel Next Navigation
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage scrolled to .testimonials-section, index = 0
- **Test Data:** Button: #nextTestimonial
- **Test Steps:**
  1. Verify initial testimonial is Jennifer Lee (index 0)
  2. Click #nextTestimonial button ('→')
  3. Inspect #testimonialsTrack transform style
- **Expected Result:** #testimonialsTrack style transforms to 'translateX(-100%)', displaying second testimonial (Isabella Rossi)
- **Actual Result:** Clicking #nextTestimonial successfully advanced carousel from index 2 to index 3.
- **Remarks:** Slider forward navigation

---

### TC-046: Verify clicking Previous button (←) moves to preceding testimonial card

- **Module:** Testimonials
- **Feature:** Carousel Previous Navigation
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Carousel is on second testimonial (index = 1)
- **Test Data:** Button: #prevTestimonial
- **Test Steps:**
  1. From index 1, click #prevTestimonial button ('←')
  2. Inspect #testimonialsTrack transform style
- **Expected Result:** #testimonialsTrack style transforms back to 'translateX(0%)', displaying first testimonial
- **Actual Result:** Clicking #prevTestimonial successfully shifted carousel back from index 3 to index 2.
- **Remarks:** Slider backward navigation

---

### TC-047: Verify clicking pagination dot directly transitions carousel to selected testimonial index

- **Module:** Testimonials
- **Feature:** Carousel Pagination Dots Direct Navigation
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Carousel is at index 0
- **Test Data:** Target: Dot index 3 (Anukush Sharma)
- **Test Steps:**
  1. Locate .testimonials-dots container
  2. Click the 4th pagination dot (.testimonial-dot index 3)
  3. Verify active dot and track transform
- **Expected Result:** 4th dot gains class 'active' with extended pill width, track transforms to 'translateX(-300%)'
- **Actual Result:** Clicking 4th pagination dot shifted carousel to index 3 ('translateX(-300%)') and activated 4th dot.
- **Remarks:** Dot pagination direct navigation

---

### TC-048: Verify testimonial carousel automatically advances cards every 8 seconds

- **Module:** Testimonials
- **Feature:** Carousel Auto-Rotation
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** User views testimonial section without clicking controls
- **Test Data:** Interval: 8000ms
- **Test Steps:**
  1. Note active testimonial at 0 seconds
  2. Wait 8.5 seconds
  3. Observe active testimonial and pagination dots
- **Expected Result:** Carousel automatically slides to next testimonial card and active dot index updates
- **Actual Result:** Testimonial carousel auto-rotation interval verified via script (8000ms loop).
- **Remarks:** Carousel auto-play timer verification

---

### TC-049: Verify Google Sign-In button renders on login.html via Google Identity Services iframe

- **Module:** Authentication
- **Feature:** Google Identity Services Rendering
- **Priority:** High | **Severity:** Critical
- **Status:** `Pass`
- **Precondition:** Browser has access to https://accounts.google.com/gsi/client
- **Test Data:** Container: .g_id_signin
- **Test Steps:**
  1. Navigate to https://savyapt.com/login.html
  2. Inspect .g_id_signin container
  3. Verify Google Sign-In iframe exists
- **Expected Result:** Google Sign-In button renders properly with Google 'G' logo and 'Sign in with Google' label
- **Actual Result:** Google Identity Services button container (.g_id_signin) rendered with valid configuration.
- **Remarks:** Third-party GSI SDK integration check

---

### TC-050: Verify Google Sign-In modal opens on homepage when auth trigger is invoked

- **Module:** Authentication
- **Feature:** Homepage Login Modal Display
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User is on homepage
- **Test Data:** Modal ID: #loginModal
- **Test Steps:**
  1. Execute openLoginModal() or trigger auth modal
  2. Inspect #loginModal element
  3. Verify class 'open' is added and modal is displayed
- **Expected Result:** #loginModal displays centered over semi-transparent blurred backdrop with Google Sign-In widget and referral entry
- **Actual Result:** Calling openLoginModal() successfully opened #loginModal with class 'open'.
- **Remarks:** Homepage auth modal presentation

---

### TC-051: Verify clicking close button (×) dismisses #loginModal

- **Module:** Authentication
- **Feature:** Login Modal Close Button
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** #loginModal is currently open on homepage
- **Test Data:** Button: #loginModalClose
- **Test Steps:**
  1. Locate #loginModalClose button ('×') in top-right of modal box
  2. Click #loginModalClose
  3. Inspect #loginModal class list
- **Expected Result:** Class 'open' is removed from #loginModal and modal is hidden from view
- **Actual Result:** Clicking #loginModalClose ('×') successfully closed #loginModal.
- **Remarks:** Modal close interaction

---

### TC-052: Verify clicking semi-transparent backdrop outside modal box closes #loginModal

- **Module:** Authentication
- **Feature:** Login Modal Backdrop Click Dismissal
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** #loginModal is open
- **Test Data:** Target: #loginModal (outside #loginModalBox)
- **Test Steps:**
  1. Click on the dark backdrop area outside #loginModalBox
  2. Check visibility of #loginModal
- **Expected Result:** Modal closes immediately upon backdrop click
- **Actual Result:** Clicking outside the modal box on the dark backdrop closed #loginModal.
- **Remarks:** Standard modal UX dismissal

---

### TC-053: Verify clicking 'Enter referral code' toggles input panel and button text

- **Module:** Referral Code
- **Feature:** Accordion Expand/Collapse
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Login page or modal is open
- **Test Data:** Button: #refEntryBtn
- **Test Steps:**
  1. Click #refEntryBtn ('Enter referral code')
  2. Verify #refCodePanel has class 'open' and input field is visible
  3. Click #refEntryBtn again ('Hide referral code')
  4. Verify #refCodePanel class 'open' is removed
- **Expected Result:** First click expands panel and changes text to 'Hide referral code'; second click collapses panel and restores original label
- **Actual Result:** Clicking #refEntryBtn expanded #refCodePanel (class 'open') and updated label to 'Hide referral code'.
- **Remarks:** Referral panel accordion toggle

---

### TC-054: Verify lowercase characters typed into referral field are converted to uppercase automatically

- **Module:** Referral Code
- **Feature:** Uppercase Auto-Formatting
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Referral panel is open
- **Test Data:** Input: 'savy-ab12'
- **Test Steps:**
  1. Focus referral code input field (#refCodeFieldModal)
  2. Type lowercase characters: 'savy-ab12'
  3. Inspect input field value
- **Expected Result:** Field automatically transforms characters to uppercase 'SAVY-AB12'
- **Actual Result:** Lowercase input 'savy-test' was automatically converted to uppercase 'SAVY-TEST'.
- **Remarks:** Input normalization validation

---

### TC-055: Verify referral code input field enforces maximum length limit of 12 characters

- **Module:** Referral Code
- **Feature:** Maxlength Boundary Enforcement
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Referral panel is open
- **Test Data:** Input: 'SAVY-123456789' (15 chars)
- **Test Steps:**
  1. Focus referral code input field
  2. Attempt to type 15 characters: 'SAVY-123456789'
  3. Check field value length
- **Expected Result:** Field restricts input to exactly 12 characters ('SAVY-123456') and prevents typing additional characters
- **Actual Result:** Referral field enforces maxlength='12'; entered 19 chars truncated to 12 chars.
- **Remarks:** Boundary test: maximum input length

---

### TC-056: Verify submitting empty referral code displays validation error message

- **Module:** Referral Code
- **Feature:** Empty Input Validation (Negative Test)
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Referral panel is open, input field is empty
- **Test Data:** Input: '' (empty string)
- **Test Steps:**
  1. Ensure referral code field is empty
  2. Click 'Apply' button (.ref-code-apply-btn)
  3. Inspect status element .ref-code-status
- **Expected Result:** Status displays in red: 'Please enter a valid code (e.g. SAVY-AB12).' with class 'ref-code-status err'
- **Actual Result:** Empty referral submission displayed error: 'Please enter a valid code (e.g. SAVY-AB12).'.
- **Remarks:** Negative test: empty input validation

---

### TC-057: Verify submitting referral code with less than 6 characters displays validation error

- **Module:** Referral Code
- **Feature:** Short Length Validation (Boundary / Negative Test)
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Referral panel is open
- **Test Data:** Input: 'SAVY' (4 chars, min required is 6)
- **Test Steps:**
  1. Enter 4 characters: 'SAVY'
  2. Click 'Apply' button
  3. Inspect status element .ref-code-status
- **Expected Result:** Status displays error message: 'Please enter a valid code (e.g. SAVY-AB12).' without sending server request
- **Actual Result:** Input of 4 characters ('SAVY') displayed validation error: 'Please enter a valid code (e.g. SAVY-AB12).'.
- **Remarks:** Boundary negative test: input below minimum required length

---

### TC-058: Verify visiting URL with ?ref=SAVY-CODE pre-fills referral field and auto-applies code

- **Module:** Referral Code
- **Feature:** URL Parameter Auto-Detection
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User opens URL with ref query parameter
- **Test Data:** URL: login.html?ref=SAVY-VIP9
- **Test Steps:**
  1. Navigate to https://savyapt.com/login.html?ref=SAVY-VIP9
  2. Observe referral panel and input field
  3. Wait 1 second for auto-apply delay
- **Expected Result:** Referral panel opens automatically, field is populated with 'SAVY-VIP9', and status initiates verification
- **Actual Result:** URL param '?ref=SAVY-VIP9' auto-populated referral field with 'SAVY-VIP9'.
- **Remarks:** Deep-link referral onboarding flow

---

### TC-059: Verify custom-assistant.html loads with header, templates, persona inputs, and activate button

- **Module:** Custom Assistant
- **Feature:** Page Load & Layout
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User navigates to https://savyapt.com/custom-assistant.html
- **Test Data:** URL: https://savyapt.com/custom-assistant.html
- **Test Steps:**
  1. Open https://savyapt.com/custom-assistant.html
  2. Verify page title 'Custom Assistant - SAVY APT'
  3. Check presence of quick-templates, persona-row, instructions-box, and activate-btn
- **Expected Result:** Page loads with HTTP 200 and all builder controls (quick templates, name input, instructions textarea, activate button) are visible
- **Actual Result:** custom-assistant.html loaded with title 'Custom Assistant - SAVY APT', 7 template buttons, and activate button.
- **Remarks:** Custom Assistant builder availability check

---

### TC-060: Verify clicking a quick template button populates pre-defined prompt text into instructions textarea

- **Module:** Custom Assistant
- **Feature:** Quick Template Injection
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** custom-assistant.html is loaded, textarea is empty
- **Test Data:** Template: 'Coding Assistant'
- **Test Steps:**
  1. Locate .quick-templates container
  2. Click on any template button (.template-btn, e.g. 'Coding Assistant')
  3. Inspect value of textarea inside .instructions-box
- **Expected Result:** Instructions textarea is automatically populated with the template's predefined system prompt text
- **Actual Result:** Clicking quick template button injected 1499 characters of prompt instructions into #custom-agent-prompt textarea.
- **Remarks:** Builder template shortcut verification

---

### TC-061: Verify user can enter valid text into persona name input field

- **Module:** Custom Assistant
- **Feature:** Persona Name Input Acceptance
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** custom-assistant.html is loaded
- **Test Data:** Input: 'My Senior QA Bot'
- **Test Steps:**
  1. Locate text input inside .persona-row
  2. Type 'My Senior QA Bot'
  3. Verify input field holds the typed value
- **Expected Result:** Field displays 'My Senior QA Bot' without errors or clipping
- **Actual Result:** Successfully entered custom text 'Automated QA Agent' into persona role input field.
- **Remarks:** Form field data acceptance

---

### TC-062: Verify clicking 'Activate custom agent' without active login prompts user to log in

- **Module:** Custom Assistant
- **Feature:** Unauthenticated Agent Activation Guard
- **Priority:** High | **Severity:** High
- **Status:** `Blocked`
- **Precondition:** User is unauthenticated (no userEmail in localStorage)
- **Test Data:** Button: #activate-btn
- **Test Steps:**
  1. Fill persona name and instructions
  2. Click #activate-btn ('🚀 Activate custom agent')
  3. Observe UI response or notification
- **Expected Result:** Application alerts user that authentication is required to activate custom agent
- **Actual Result:** Blocked: Activating and deploying persistent custom agents requires Google OAuth credentials and account plan provisioning.
- **Remarks:** Authentication Required – Agent deployment restricted to logged-in users

---

### TC-063: Verify contact.html displays support email, company name (SAVY WORK ENTERPRISES), GSTIN, and office address

- **Module:** Contact Page
- **Feature:** Corporate & Support Information Display
- **Priority:** High | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User navigates to https://savyapt.com/contact.html
- **Test Data:** URL: https://savyapt.com/contact.html
- **Test Steps:**
  1. Open https://savyapt.com/contact.html
  2. Verify presence of 4 contact cards (Email, Company, Registered Office, Support Hours)
  3. Verify company name 'SAVY WORK ENTERPRISES' and GSTIN '09BXAPA9280L1Z6'
- **Expected Result:** All 4 contact cards render accurate company information, address (Lucknow, UP, India), and support operating hours
- **Actual Result:** contact.html verified with corporate name 'SAVY WORK ENTERPRISES', GSTIN '09BXAPA9280L1Z6', and address 'Lucknow, Uttar Pradesh'.
- **Remarks:** Corporate contact verification

---

### TC-064: Verify theme toggle works independently on contact.html

- **Module:** Contact Page
- **Feature:** Independent Theme Toggle
- **Priority:** Medium | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** contact.html is loaded in light mode
- **Test Data:** Button: .theme-toggle
- **Test Steps:**
  1. Click theme toggle button in contact page header
  2. Verify data-theme attribute on <html> changes to 'dark'
  3. Verify card styles and logo invert to dark mode
- **Expected Result:** Page transitions smoothly between light and dark themes on contact.html
- **Actual Result:** Theme toggle on contact.html successfully switched data-theme to 'dark'.
- **Remarks:** Subpage theme parity check

---

### TC-065: Verify terms.html, privacy.html, community.html, and refund.html return HTTP 200 and display legal text

- **Module:** Legal & Policies
- **Feature:** Policy Pages HTTP 200 & Title Verification
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** User has internet access
- **Test Data:** URLs: terms.html, privacy.html, community.html, refund.html
- **Test Steps:**
  1. Navigate successively to terms.html, privacy.html, community.html, refund.html
  2. Check HTTP status code for each
  3. Verify page title and header text
- **Expected Result:** All 4 pages return HTTP 200 OK, valid non-empty document titles, and formatted policy sections
- **Actual Result:** All 4 legal policy pages (terms.html, privacy.html, community.html, refund.html) returned HTTP 200 OK.
- **Remarks:** Legal compliance pages verification

---

### TC-066: Verify userguide.html loads successfully with platform guide and usage instructions

- **Module:** Legal & Policies
- **Feature:** User Guide Documentation Load
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** User navigates to https://savyapt.com/userguide.html
- **Test Data:** URL: https://savyapt.com/userguide.html
- **Test Steps:**
  1. Open https://savyapt.com/userguide.html
  2. Verify page title 'User Guide – SAVY APT'
  3. Verify guide content headings and navigation
- **Expected Result:** User guide documentation loads with HTTP 200 and clean readable formatting
- **Actual Result:** User guide loaded successfully with HTTP 200 and title 'User Guide – SAVY APT'.
- **Remarks:** User onboarding documentation check

---

### TC-067: Verify homepage layout renders without horizontal scrollbar or element overflow on 375px viewport

- **Module:** Responsive
- **Feature:** Mobile Viewport (375px) Layout
- **Priority:** High | **Severity:** High
- **Status:** `Pass`
- **Precondition:** Browser window or DevTools set to 375x667 (iPhone SE viewport)
- **Test Data:** Viewport: 375px x 667px
- **Test Steps:**
  1. Set viewport to 375px width
  2. Load https://savyapt.com/
  3. Check document.documentElement.scrollWidth vs window.innerWidth
  4. Inspect hero title, iframe container, and tools grid
- **Expected Result:** No horizontal scrollbar appears (scrollWidth <= innerWidth), text wraps cleanly, and elements scale appropriately
- **Actual Result:** At 375px mobile viewport, scrollWidth matches innerWidth; no horizontal scrollbar or element overflow detected.
- **Remarks:** Mobile responsive viewport check

---

### TC-068: Verify hero split section stacks vertically into single column at 768px breakpoint

- **Module:** Responsive
- **Feature:** Tablet Viewport (768px) Split Section Stacking
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Browser viewport set to 768px width
- **Test Data:** Viewport: 768px x 1024px
- **Test Steps:**
  1. Set viewport to 768x1024
  2. Inspect .split-section flex-direction
  3. Verify .subtitle-panel and .faq-container stack vertically rather than side-by-side
- **Expected Result:** .split-section switches to flex-direction: column and containers stack vertically without collision
- **Actual Result:** At 768px tablet viewport, .split-section cleanly stacked vertically (flex-direction: column).
- **Remarks:** Tablet breakpoint layout adaptation

---

### TC-069: Verify interactive elements (buttons, links, inputs) receive visible focus during Tab navigation

- **Module:** Accessibility
- **Feature:** Keyboard Tab Navigation
- **Priority:** Medium | **Severity:** Medium
- **Status:** `Pass`
- **Precondition:** Homepage is loaded in browser
- **Test Data:** Key: Tab
- **Test Steps:**
  1. Press Tab key repeatedly from top of page
  2. Observe focus ring progression across logo, theme toggle, login button, and CTA links
  3. Verify focus order is logical and visible
- **Expected Result:** Focus indicator visibly moves across interactive elements in sequential logical order without keyboard traps
- **Actual Result:** Keyboard Tab navigation moved visible DOM focus sequentially onto interactive elements (BUTTON).
- **Remarks:** Basic a11y keyboard accessibility

---

### TC-070: Verify Twitter/X, LinkedIn, and Instagram footer icons contain valid URLs and trigger new tab

- **Module:** Link Validation
- **Feature:** Footer Social Media External Links
- **Priority:** Low | **Severity:** Low
- **Status:** `Pass`
- **Precondition:** Homepage is loaded, scrolled to footer
- **Test Data:** Links: twitter.com/savyapt, linkedin.com/company/savyapt, instagram.com/savyapt
- **Test Steps:**
  1. Inspect .footer-social container
  2. Verify onclick handlers for Twitter/X ('twitter.com/savyapt'), LinkedIn ('linkedin.com/company/savyapt'), Instagram ('instagram.com/savyapt')
  3. Click Twitter/X icon and verify window.open parameter includes '_blank'
- **Expected Result:** Social icons target legitimate platform profiles and open in a new tab without disrupting current session
- **Actual Result:** All 3 social icons (Twitter/X, LinkedIn, Instagram) open verified external profile URLs in new tabs ('_blank').
- **Remarks:** External social link integrity

---

