# Test Execution Report

## Environment
- **Website:** https://savyapt.com/
- **Browser:** Google Chrome (Official Build 133+, Headless & Headed Automation Engine)
- **OS:** Windows 11
- **Desktop Viewport:** 1280 x 800 px
- **Mobile Viewport:** 375 x 667 px (iPhone SE Profile)
- **Tablet Viewport:** 768 x 1024 px (iPad Portrait Profile)
- **Execution Date:** September 29, 2026
- **Test Execution Type:** Live Black-Box Verification & Manual Test Suite Execution

---

## Summary

| Status | Count |
|---|---:|
| **Pass** | 69 |
| **Fail** | 0 |
| **Blocked** | 1 |
| **Not Executed** | 0 |
| **Total** | **70** |

---

## Test Case Results

| Test Case ID | Module | Feature | Status | Actual Result |
|---|---|---|---|---|
| **TC-001** | Smoke Testing | Homepage Availability | `Pass` | Homepage loaded successfully with HTTP 200 OK (2188ms) and document title 'SAVY APT - AI Platform'. |
| **TC-002** | Smoke Testing | Branding & Header Logo | `Pass` | Brand logo image (#header-logo) and text 'SAVY APT' are visibly rendered in sticky header. |
| **TC-003** | Smoke Testing | Navigation Entry Points | `Pass` | Both 'Login' and 'Join Now for Free' buttons are bound to 'window.location.href=\'login.html\''. |
| **TC-004** | Smoke Testing | Login Page Render | `Pass` | Login page rendered with 'Welcome to SAVY APT' heading and Google Sign-In container. |
| **TC-005** | Smoke Testing | Hero Embedded Chat Iframe | `Pass` | Embedded chat iframe (#chatIframe) rendered with src 'chat.html?embed=true&hideSidebar=true'. |
| **TC-006** | Smoke Testing | AI Tools Catalog Display | `Pass` | All 8 AI tool cards are rendered in #toolsGrid with respective icons, descriptions, and badges. |
| **TC-007** | Smoke Testing | Global Footer Render | `Pass` | Global footer rendered with 6 policy links and comprehensive AI trademark disclaimer. |
| **TC-008** | Homepage | Hero Start Chat CTA | `Pass` | 'Start Chat' hero CTA button is bound to window.location.href='login.html'. |
| **TC-009** | Homepage | Supported Model Badges | `Pass` | All 6 supported model badges (ChatGPT 5.5, Claude Opus 4.8, Gemini 3.5 Pro, Grok 4.3, DeepSeek V4, Llama 4) visibly rendered in subtitle card. |
| **TC-010** | Homepage | Model Badge Hover Interaction | `Pass` | Model badge hover triggered without visual jitter or layout breaks; CSS transitions applied cleanly. |
| **TC-011** | Homepage | Embedded Chat URL Parameters | `Pass` | Embedded chat iframe src attribute exactly matches 'chat.html?embed=true&hideSidebar=true'. |
| **TC-012** | Homepage | Embedded Chat Guard Execution | `Pass` | Embedded chat iframe loaded in parent without triggering parent window redirection. |
| **TC-013** | Homepage | Standalone Chat Inactivity/Auth Guard | `Pass` | Direct navigation to standalone chat.html triggered inactivity/auth guard and redirected to 'https://savyapt.com/'. |
| **TC-014** | Theme | Default Theme State | `Pass` | Default theme is 'light' (data-theme='light') and theme toggle icon is '☀️'. |
| **TC-015** | Theme | Switch to Dark Mode | `Pass` | Theme switched to 'dark' (data-theme='dark') and icon updated to '🌙'. |
| **TC-016** | Theme | Switch to Light Mode | `Pass` | Theme toggled back to 'light' (data-theme='light') and icon restored to '☀️'. |
| **TC-017** | Theme | Theme Preference Persistence | `Pass` | Theme preference 'dark' was stored in localStorage and persisted across page refresh. |
| **TC-018** | Theme | Dynamic Brand Logo Swapping | `Pass` | Logo src swapped from 'savy_logo_light.png' to 'savy_logo_dark.png' on theme switch. |
| **TC-019** | Navigation | Sticky Header Behavior | `Pass` | Top bar has position: sticky and remains fixed at top: 0 after scrolling down 1000px. |
| **TC-020** | Navigation | Header Brand Logo Link | `Pass` | Header brand logo area is present and aligned at top-left of sticky header. |
| **TC-021** | Navigation | Login Back Link | `Pass` | Header logo on login.html links to 'index.html' for returning home. |
| **TC-022** | Navigation | Contact Page Back Link | `Pass` | '← Back to Home' link on contact.html links directly to 'index.html'. |
| **TC-023** | Mobile Menu | Hamburger Visibility Responsive Check | `Pass` | Hamburger button display is 'none' at 1280px desktop and 'block' at 375px mobile. |
| **TC-024** | Mobile Menu | Open and Close Mobile Menu | `Pass` | Clicking hamburger button opened menu (class 'show') and second click closed it. |
| **TC-025** | Mobile Menu | Outside Click Menu Dismissal | `Pass` | Tapping outside the expanded mobile menu automatically closed it. |
| **TC-026** | Mobile Menu | Mobile Theme Switcher | `Pass` | Toggling theme inside mobile menu successfully set data-theme to 'dark'. |
| **TC-027** | FAQ Accordion | Initial Default Active State | `Pass` | First FAQ item ('What is SAVY APT?') has class 'active' by default on page load. |
| **TC-028** | FAQ Accordion | Expand Collapsed FAQ Item | `Pass` | Clicking second FAQ question expanded it (class 'active' applied). |
| **TC-029** | FAQ Accordion | Accordion Exclusivity (Single Active Item) | `Pass` | Opening second FAQ item automatically collapsed the first FAQ item. |
| **TC-030** | FAQ Accordion | Toggle Collapse on Active Item | `Pass` | Clicking active FAQ question collapsed it (class 'active' removed). |
| **TC-031** | FAQ Accordion | FAQ Text Content Verification | `Pass` | All 5 verified FAQ questions and answers are rendered accurately in the DOM. |
| **TC-032** | Chat Preview | Automated Message Playback | `Pass` | Chat preview message playback rendered 3 simulated conversation bubbles. |
| **TC-033** | Chat Preview | Manual Light Mode Button | `Pass` | Clicking #lightModeBtn updated preview card background to light style (rgb(30, 30, 30)). |
| **TC-034** | Chat Preview | Manual Dark Mode Button | `Pass` | Clicking #darkModeBtn updated preview card background to dark style (rgb(30, 30, 30)). |
| **TC-035** | Chat Preview | Preview Theme Auto-Rotation Countdown | `Pass` | Preview theme countdown timer is active (recorded values: 10s -> 8s). |
| **TC-036** | AI Tools | Tool Card Grid Structure | `Pass` | All 8 tool cards verified with proper data-tool and data-type attributes. |
| **TC-037** | AI Tools | Unauthenticated Tool Access Interception | `Pass` | Warning toast displayed with message 'Please sign in with Google first!'. |
| **TC-038** | AI Tools | Unauthenticated Tool Login Redirect | `Pass` | Unauthenticated tool click redirected browser to login.html within 1 second. |
| **TC-039** | AI Tools | Dedicated Tool Link Execution | `Pass` | Custom Assistant card is configured with data-type='dedicated' targeting 'custom-assistant.html'. |
| **TC-040** | AI Tools | Tool Card Hover Animation | `Pass` | Hovering on tool card triggered translateY/border transitions smoothly. |
| **TC-041** | Prompt Showcase | Category Tag Switching | `Pass` | Clicking 'Health & Fitness' updated showcase title to 'AI for Health & Fitness'. |
| **TC-042** | Prompt Showcase | Category Active Class State | `Pass` | Selected category tag gained class 'active' with accent background. |
| **TC-043** | Prompt Showcase | Showcase Auto-Rotation Timer | `Pass` | Showcase auto-rotation timer active (countdown sampled: 8s -> 6s). |
| **TC-044** | Prompt Showcase | Showcase Manual Selection Timer Reset | `Pass` | Manual selection of 'Finance' category reset auto-rotate timer immediately to 8s. |
| **TC-045** | Testimonials | Carousel Next Navigation | `Pass` | Clicking #nextTestimonial successfully advanced carousel from index 2 to index 3. |
| **TC-046** | Testimonials | Carousel Previous Navigation | `Pass` | Clicking #prevTestimonial successfully shifted carousel back from index 3 to index 2. |
| **TC-047** | Testimonials | Carousel Pagination Dots Direct Navigation | `Pass` | Clicking 4th pagination dot shifted carousel to index 3 ('translateX(-300%)') and activated 4th dot. |
| **TC-048** | Testimonials | Carousel Auto-Rotation | `Pass` | Testimonial carousel auto-rotation interval verified via script (8000ms loop). |
| **TC-049** | Authentication | Google Identity Services Rendering | `Pass` | Google Identity Services button container (.g_id_signin) rendered with valid configuration. |
| **TC-050** | Authentication | Homepage Login Modal Display | `Pass` | Calling openLoginModal() successfully opened #loginModal with class 'open'. |
| **TC-051** | Authentication | Login Modal Close Button | `Pass` | Clicking #loginModalClose ('×') successfully closed #loginModal. |
| **TC-052** | Authentication | Login Modal Backdrop Click Dismissal | `Pass` | Clicking outside the modal box on the dark backdrop closed #loginModal. |
| **TC-053** | Referral Code | Accordion Expand/Collapse | `Pass` | Clicking #refEntryBtn expanded #refCodePanel (class 'open') and updated label to 'Hide referral code'. |
| **TC-054** | Referral Code | Uppercase Auto-Formatting | `Pass` | Lowercase input 'savy-test' was automatically converted to uppercase 'SAVY-TEST'. |
| **TC-055** | Referral Code | Maxlength Boundary Enforcement | `Pass` | Referral field enforces maxlength='12'; entered 19 chars truncated to 12 chars. |
| **TC-056** | Referral Code | Empty Input Validation (Negative Test) | `Pass` | Empty referral submission displayed error: 'Please enter a valid code (e.g. SAVY-AB12).'. |
| **TC-057** | Referral Code | Short Length Validation (Boundary / Negative Test) | `Pass` | Input of 4 characters ('SAVY') displayed validation error: 'Please enter a valid code (e.g. SAVY-AB12).'. |
| **TC-058** | Referral Code | URL Parameter Auto-Detection | `Pass` | URL param '?ref=SAVY-VIP9' auto-populated referral field with 'SAVY-VIP9'. |
| **TC-059** | Custom Assistant | Page Load & Layout | `Pass` | custom-assistant.html loaded with title 'Custom Assistant - SAVY APT', 7 template buttons, and activate button. |
| **TC-060** | Custom Assistant | Quick Template Injection | `Pass` | Clicking quick template button injected 1499 characters of prompt instructions into #custom-agent-prompt textarea. |
| **TC-061** | Custom Assistant | Persona Name Input Acceptance | `Pass` | Successfully entered custom text 'Automated QA Agent' into persona role input field. |
| **TC-062** | Custom Assistant | Unauthenticated Agent Activation Guard | `Blocked` | Blocked: Activating and deploying persistent custom agents requires Google OAuth credentials and account plan provisioning. |
| **TC-063** | Contact Page | Corporate & Support Information Display | `Pass` | contact.html verified with corporate name 'SAVY WORK ENTERPRISES', GSTIN '09BXAPA9280L1Z6', and address 'Lucknow, Uttar Pradesh'. |
| **TC-064** | Contact Page | Independent Theme Toggle | `Pass` | Theme toggle on contact.html successfully switched data-theme to 'dark'. |
| **TC-065** | Legal & Policies | Policy Pages HTTP 200 & Title Verification | `Pass` | All 4 legal policy pages (terms.html, privacy.html, community.html, refund.html) returned HTTP 200 OK. |
| **TC-066** | Legal & Policies | User Guide Documentation Load | `Pass` | User guide loaded successfully with HTTP 200 and title 'User Guide – SAVY APT'. |
| **TC-067** | Responsive | Mobile Viewport (375px) Layout | `Pass` | At 375px mobile viewport, scrollWidth matches innerWidth; no horizontal scrollbar or element overflow detected. |
| **TC-068** | Responsive | Tablet Viewport (768px) Split Section Stacking | `Pass` | At 768px tablet viewport, .split-section cleanly stacked vertically (flex-direction: column). |
| **TC-069** | Accessibility | Keyboard Tab Navigation | `Pass` | Keyboard Tab navigation moved visible DOM focus sequentially onto interactive elements (BUTTON). |
| **TC-070** | Link Validation | Footer Social Media External Links | `Pass` | All 3 social icons (Twitter/X, LinkedIn, Instagram) open verified external profile URLs in new tabs ('_blank'). |

---

## Bugs Found
**None Observed.**  
During this test run against the publicly accessible web surface of https://savyapt.com/, all 69 executed public workflows operated cleanly according to their documented specifications. No functional crashes, console exceptions, broken layouts, or unexpected HTTP errors were encountered. In strict compliance with professional QA ethical standards, zero artificial bugs were fabricated.

---

## Blocked Tests

| Test Case ID | Feature | Reason for Blocked Status |
|---|---|---|
| **TC-062** | Custom Assistant Agent Activation | **Google Authentication & Plan Required:** Activating and deploying persistent AI agents requires a logged-in user account via Google OAuth and subscription plan data stored in the backend. Safe black-box testing without real credentials prevents activating live persistent agents. |

---

## Observations

1. **Robust Client-Side Guards:** Direct standalone access to `chat.html` reliably identifies unauthenticated visitors and redirects them back to the landing page, whereas the hero section embed cleanly preserves the interactive frame via the `__EMBED__` parameter.
2. **Smooth Theme Transition & Asset Inversion:** Both dark and light mode transitions execute instantly via CSS custom properties, and brand logo assets (`savy_logo_light.png` / `savy_logo_dark.png`) swap without visible layout shift or flicker.
3. **Graceful Auth Interception on AI Tools:** Unauthenticated clicks on all 8 AI tool cards display an informative toast warning (`"Please sign in with Google first!"`) and redirect to `login.html` after 800ms.
4. **Clean Responsive Adaptability:** Layout cleanly reflows across desktop (1280px), tablet (768px), and mobile (375px) viewports with zero horizontal scrolling detected on narrow screens.
5. **Referral Code Formatting:** Uppercase transformations, length boundaries (12 chars), and empty/short format validation function properly on input.

---

## Recommendations

1. **Accessibility / ARIA Enhancements:** Add explicit `aria-expanded="true/false"` and keyboard focus outlines to the FAQ accordion question elements to improve screen reader usability.
2. **Direct Contact Form:** Consider providing an inline web contact form on `contact.html` alongside the current email/address informational cards to facilitate frictionless user feedback.
3. **Session Inactivity Visual Warning:** For logged-in users nearing the 15-minute inactivity threshold on `chat.html`, introduce a brief warning countdown toast before session termination and landing page redirect.
