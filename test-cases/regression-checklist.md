# SAVY APT – Regression Test Checklist

**Target Website:** https://savyapt.com/  
**Document Purpose:** Concise quality assurance checklist to be executed prior to major deployments, bug fixes, UI refreshes, or third-party SDK updates to ensure existing functionality remains uncorrupted.  
**QA Role:** Trainee – Software Testing  
**Execution Cycle:** Post-Build / Release Candidate Verification  
**Initial Baseline Status:** All items marked as `[ ] Pending Execution`  

---

## 1. Header Navigation & Branding
- [ ] **TC-001:** Homepage responds with HTTP 200 and loads within 3 seconds.
- [ ] **TC-002:** Brand logo (`#header-logo`) and "SAVY APT" brand name render with correct alignment.
- [ ] **TC-003:** "Login" button in top bar navigates directly to `login.html`.
- [ ] **TC-003:** "Join Now for Free" button in top bar navigates directly to `login.html`.
- [ ] **TC-019:** Sticky header remains docked at top of viewport during vertical scrolling.
- [ ] **TC-020:** Clicking header logo returns user to `index.html`.

## 2. Theme Switching (Light / Dark Mode)
- [ ] **TC-014:** Page defaults to `data-theme="light"` when no preference is cached.
- [ ] **TC-015:** Clicking desktop theme toggle button switches to `dark` mode and updates icon to 🌙.
- [ ] **TC-016:** Clicking theme toggle in dark mode restores `light` mode and updates icon to ☀️.
- [ ] **TC-017:** Theme selection persists in `localStorage('theme')` across page reload.
- [ ] **TC-018:** Logo images dynamically swap between `savy_logo_light.png` and `savy_logo_dark.png`.

## 3. Mobile Navigation & Responsiveness
- [ ] **TC-023:** Hamburger menu button (`☰`) is hidden on desktop (>768px) and visible on mobile (≤768px).
- [ ] **TC-024:** Clicking hamburger button smoothly expands and collapses `#mobileMenu`.
- [ ] **TC-025:** Clicking outside the expanded mobile menu closes the drawer.
- [ ] **TC-026:** Toggling theme inside the mobile menu updates document theme.
- [ ] **TC-067:** No horizontal overflow or scrollbar appears on 375px mobile viewport.
- [ ] **TC-068:** Hero split section stacks vertically into single column at 768px tablet breakpoint.

## 4. Hero Section & Embedded Chat
- [ ] **TC-005:** Embedded chat iframe (`#chatIframe`) loads with `chat.html?embed=true&hideSidebar=true`.
- [ ] **TC-008:** Hero "Start Chat" CTA button directs user to `login.html`.
- [ ] **TC-009:** Model pill badges (ChatGPT 5.5, Claude Opus 4.8, Gemini 3.5 Pro, Grok 4.3, DeepSeek V4, Llama 4) are visibly rendered.
- [ ] **TC-010:** Hovering on model pill badges elevates pill and highlights background.
- [ ] **TC-012:** Embedded chat iframe does not trigger forced redirection on landing page.
- [ ] **TC-013:** Direct navigation to standalone `chat.html` without session redirects to `https://savyapt.com/`.

## 5. FAQ Accordion
- [ ] **TC-027:** First FAQ item ("What is SAVY APT?") is open by default on page load.
- [ ] **TC-028:** Clicking collapsed FAQ item expands answer and rotates arrow indicator 180°.
- [ ] **TC-029:** Expanding a new FAQ item collapses the previously open item (mutual exclusivity).
- [ ] **TC-030:** Clicking an active FAQ item collapses it.
- [ ] **TC-031:** All 5 FAQ questions and answers match verified product documentation.

## 6. AI Tools Directory & Access Control
- [ ] **TC-006:** All 8 AI tool cards render in `.tools-section` with icons, titles, and descriptions.
- [ ] **TC-037:** Unauthenticated click on any overlay tool card displays red toast warning `"Please sign in with Google first!"`.
- [ ] **TC-038:** Tool card auth warning redirects user to `login.html` after 800ms.
- [ ] **TC-039:** Clicking "Custom Assistant" tool card opens `custom-assistant.html` in a new tab.
- [ ] **TC-040:** Hovering over tool cards triggers smooth `translateX(5px)` and accent border highlight.

## 7. Category Showcase & Testimonials
- [ ] **TC-041:** Clicking category chips (SEO, Health, Tech, Language, Recipe, etc.) updates showcase title, description, and message thread.
- [ ] **TC-042:** Selected category chip gains active class with purple accent background.
- [ ] **TC-043:** Category showcase auto-rotates every 8 seconds when user does not interact.
- [ ] **TC-044:** Manually clicking a category chip resets auto-rotation timer back to 8 seconds.
- [ ] **TC-045:** Clicking testimonial Next button (`→`) advances to next testimonial card.
- [ ] **TC-046:** Clicking testimonial Previous button (`←`) shifts to preceding testimonial card.
- [ ] **TC-047:** Clicking testimonial pagination dots transitions carousel directly to that review.
- [ ] **TC-048:** Testimonials slider auto-advances reviews every 8 seconds.

## 8. Authentication & Referral Code
- [ ] **TC-004:** Dedicated `login.html` page loads with Google Sign-In widget.
- [ ] **TC-049:** Google Identity Services iframe renders button with Google "G" logo and label.
- [ ] **TC-050:** Google Sign-In modal (`#loginModal`) opens on homepage upon auth trigger.
- [ ] **TC-051:** Clicking close button (`×`) dismisses `#loginModal`.
- [ ] **TC-052:** Clicking outside modal box on backdrop closes `#loginModal`.
- [ ] **TC-053:** Clicking "Enter referral code" smoothly expands input field and toggles button label.
- [ ] **TC-054:** Referral input converts typed lowercase letters to uppercase automatically.
- [ ] **TC-055:** Referral input enforces 12-character maximum length boundary.
- [ ] **TC-056:** Submitting empty referral field displays error: `"Please enter a valid code (e.g. SAVY-AB12)."`.
- [ ] **TC-057:** Submitting code with fewer than 6 characters displays validation error.
- [ ] **TC-058:** URL query parameter `?ref=CODE` automatically populates referral field and opens panel.

## 9. Custom Assistant Builder
- [ ] **TC-059:** `custom-assistant.html` loads with header, templates, persona inputs, instructions, and activate button.
- [ ] **TC-060:** Clicking quick template buttons injects pre-defined system prompts into textarea.
- [ ] **TC-061:** User can enter and edit custom persona names.
- [ ] **TC-062:** Clicking "Activate custom agent" without active login blocks execution and prompts sign-in.

## 10. Contact, Legal Policies & Social Links
- [ ] **TC-063:** `contact.html` displays corporate details: SAVY WORK ENTERPRISES, GSTIN, address (Lucknow), and support hours.
- [ ] **TC-064:** Theme toggle functions properly on `contact.html`.
- [ ] **TC-065:** `terms.html`, `privacy.html`, `community.html`, and `refund.html` return HTTP 200 and display legal text.
- [ ] **TC-066:** `userguide.html` loads successfully with platform documentation.
- [ ] **TC-070:** External social media icons (Twitter/X, LinkedIn, Instagram) contain valid URLs and open in a new tab.

## 11. Accessibility & Error Handling
- [ ] **TC-069:** Sequential keyboard Tab navigation visibly focuses interactive buttons, inputs, and links without trapping focus.
- [ ] **TC-007:** AI trademark disclaimer is present and legible in global footer.
- [ ] No unhandled JavaScript console exceptions occur during standard page exploration.

---

## Sign-Off Block

| Role | Name | Status | Date | Notes |
|---|---|---|---|---|
| **QA Trainee / Tester** | ____________________ | [ ] Pending | _________ | Initial test suite baseline |
| **QA Lead / Reviewer** | ____________________ | [ ] Pending | _________ | Codebase ready for execution |
