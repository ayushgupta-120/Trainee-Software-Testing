# SAVY APT Website Analysis

## Application Under Test
**Website URL:** https://savyapt.com/  
**Application Name:** SAVY APT  
**Classification:** Multi-Model AI Aggregation & Consensus Platform  
**Target Environment:** Production Web Application (Cloudflare CDN / HTTPS)  
**Analysis Date:** September 2026  
**Auditor / QA Role:** Senior QA Engineer (Portfolio Project for Trainee – Software Testing)

---

## Website Overview

SAVY APT (`https://savyapt.com/`) is a web-based artificial intelligence platform that aggregates responses across multiple commercial and open-source Large Language Models (LLMs), including GPT, Claude, Gemini, Grok, DeepSeek, and Ollama. Its core value proposition is delivering accurate, consensus-driven answers with reduced hallucinations by querying models in parallel and highlighting consensus outputs.

The public web surface consists of a marketing landing page with embedded interactive widgets, dedicated authentication entry points via Google Identity Services, informational and legal policy pages, an interactive prompt category showcase, a tool suite catalog with authentication-gated access, an interactive FAQ accordion, and an embedded chat experience.

---

## Publicly Accessible Pages

All pages below were directly requested and verified via live HTTP GET/HEAD checks:

| Page | URL | Accessible | Notes |
|---|---|---|---|
| **Homepage / Landing** | `https://savyapt.com/` | Yes (HTTP 200) | Primary entry point. Features top bar, hero section with embedded chat iframe, model tags, interactive FAQ accordion, live chat preview with theme timer, 8 AI tool cards, category showcase, testimonial carousel, footer links, and Google Sign-in modal. |
| **Login / Authentication** | `https://savyapt.com/login.html` | Yes (HTTP 200) | Dedicated sign-in page with Google Identity Services button, referral code entry accordion, terms/privacy links, and dark/light theme toggle. |
| **Contact Us** | `https://savyapt.com/contact.html` | Yes (HTTP 200) | Informational support page listing email contact, company registration (SAVY WORK ENTERPRISES, GSTIN), office address (Lucknow, UP, India), and support operating hours. |
| **Terms of Use** | `https://savyapt.com/terms.html` | Yes (HTTP 200) | Comprehensive legal terms and conditions governing platform usage, API limitations, and user responsibilities. |
| **Privacy Policy** | `https://savyapt.com/privacy.html` | Yes (HTTP 200) | Privacy declaration detailing data collection, cookies, third-party AI provider disclosures, and user rights. |
| **Community Guidelines** | `https://savyapt.com/community.html` | Yes (HTTP 200) | Code of conduct and safety policies regarding prohibited content and acceptable use of AI models. |
| **Refund Policy** | `https://savyapt.com/refund.html` | Yes (HTTP 200) | Rules regarding subscription purchases, free trial limitations, and refund eligibility. |
| **User Guide** | `https://savyapt.com/userguide.html` | Yes (HTTP 200) | Documentation and tutorial page on navigating models, prompts, custom agents, and consensus scoring. |
| **Custom Assistant Builder** | `https://savyapt.com/custom-assistant.html` | Yes (HTTP 200) | Standalone builder UI for configuring custom AI personas, instructions, prebuilt agent templates, and file attachments. |
| **Main Chat App (Standalone)** | `https://savyapt.com/chat.html` | Redirects to Home (HTTP 200) | Direct browser navigation without active `localStorage` credentials triggers an authentication/inactivity guard that redirects users to `https://savyapt.com/`. However, it renders successfully when embedded inside the landing page iframe via `?embed=true&hideSidebar=true`. |

---

## Navigation

### 1. Desktop Header Navigation (Sticky Top Bar)
- **Brand Logo & Text:** Clicking the header logo or "SAVY APT" brand title reloads/navigates to the home view. The logo dynamically switches between `savy_logo_light.png` and `savy_logo_dark.png` depending on the active theme.
- **Theme Toggle Button:** Clicking the theme toggle icon (☀️ / 🌙) instantly switches the entire document between `light` and `dark` modes, updating styles, logos, and broadcasting a `postMessage` to the embedded chat iframe.
- **"Login" Button:** Directs the user to `login.html`.
- **"Join Now for Free" Button:** Directs the user to `login.html`.

### 2. Mobile Header Navigation (Viewport ≤ 768px)
- **Hamburger Button (`☰`):** Displayed on tablet and mobile viewports (`.mobile-menu-btn`). Clicking toggles the mobile menu container (`#mobileMenu`).
- **Mobile Menu Items:**
  - Theme Toggle item (with dynamic ☀️/🌙 icon).
  - "Login" link (navigates to `login.html`).
  - "Join Now for Free" link (navigates to `login.html`).
- **Outside Click Handler:** Tapping outside the open mobile menu automatically closes it.

### 3. Subpage Navigation
- **Back Links (`.back-link`):** Subpages (`login.html`, `contact.html`, `terms.html`, etc.) feature a prominent `← Back to Home` link navigating to `index.html`.

### 4. Global Footer Navigation
- **Legal & Information Links:**
  - Contact Us (`contact.html`)
  - Terms of Use (`terms.html`)
  - Privacy Policy (`privacy.html`)
  - Community Guidelines (`community.html`)
  - Refund Policy (`refund.html`)
  - User Guide (`userguide.html`)
- **Social Media External Links:**
  - X / Twitter: `https://twitter.com/savyapt` (Opens in new tab via `window.open`)
  - LinkedIn: `https://linkedin.com/company/savyapt` (Opens in new tab via `window.open`)
  - Instagram: `https://instagram.com/savyapt` (Opens in new tab via `window.open`)
- **Trademark Disclaimer:** Explicit non-affiliation declaration covering OpenAI, Google, Anthropic, xAI, etc.

---

## Functional Features

| Feature | Location | Expected Behavior | Verified |
|---|---|---|---|
| **Theme Toggle (Global)** | Top Bar & Mobile Menu | Toggles `data-theme` attribute between `light` and `dark`, updates CSS custom variables, swaps light/dark logo images, persists setting to `localStorage('theme')`. | Yes (Verified via DOM & script inspection) |
| **Hero "Start Chat" CTA** | Hero Section | Clicking navigates to `login.html` to prompt authentication before full chat access. | Yes (Verified) |
| **Embedded Chat Interface** | Hero Section Iframe | Loads `chat.html?embed=true&hideSidebar=true`, bypasses redirect guard, displays interactive model selection chips and chat input preview. | Yes (Verified) |
| **Model Badges Display** | Subtitle Card | Displays pill tags highlighting supported LLMs: ChatGPT 5.5, Claude Opus 4.8, Gemini 3.5 Pro, Grok 4.3, DeepSeek V4, Llama 4. Hover effect shifts pill elevation. | Yes (Verified) |
| **FAQ Accordion** | Split Section (Right Panel) | 5 accordion items. Clicking a question expands the answer panel (`max-height: 500px`), rotates the arrow indicator (`▼` to `▲`), and collapses any previously open FAQ item. | Yes (Verified) |
| **Simulated Chat Preview** | Preview Section | Plays an automated scripted conversation showing bot welcome, user prompt, and multi-bullet response with wave loading animations. | Yes (Verified) |
| **Preview Theme Switcher** | Preview Section | "Light Mode" and "Dark Mode" buttons manually toggle the preview card styling; auto-rotates every 10 seconds via countdown timer (`#timerCount`). | Yes (Verified) |
| **Tool Cards (8 Catalog Items)** | Tools Section | 8 cards representing platform capabilities (Market Research, Trending Prompts, Image Gen, Video Gen, Custom Assistant, Code Interpreter, Accurate Result, SAVY APT). Non-logged-in clicks trigger error toast. | Yes (Verified) |
| **Tool Authentication Interceptor** | Tools Section | When an unauthenticated visitor clicks any overlay tool card, a red toast popup warns `"Please sign in with Google first!"` and redirects to `login.html` after 800ms. | Yes (Verified) |
| **Dedicated Tool Redirect** | Custom Assistant Card | Clicking "Custom Assistant" has `data-type="dedicated"` and opens `custom-assistant.html` in a new window/tab. | Yes (Verified) |
| **Category Showcase Selector** | Showcase Section | 10 category chips (SEO, Health, Tech, Language, Recipe, Finance, Content, Travel, Product, Education). Clicking a chip instantly switches the featured title, description, and message thread. | Yes (Verified) |
| **Category Auto-Rotation** | Showcase Section | Auto-advances to the next category every 8 seconds with an animated countdown timer (`#autoRotateTimer`) and pulsing dot indicator. | Yes (Verified) |
| **Testimonial Carousel Slider** | Testimonials Section | Displays 5 user reviews with avatar, star rating, quote, and author. Includes Left (`←`) and Right (`→`) arrow navigation buttons and 5 clickable pagination dots. | Yes (Verified) |
| **Testimonial Auto-Slider** | Testimonials Section | Automatically transitions testimonial cards every 8 seconds via CSS transform (`translateX`). | Yes (Verified) |
| **Referral Code Modal Accordion** | Login Modal / Login Page | Clicking "Enter referral code" expands a smooth accordion revealing input field and "Apply" button. Label toggles to "Hide referral code". | Yes (Verified) |
| **Referral Code Validation** | Login Modal / Login Page | Validates length (≥6 characters), capitalizes input automatically, sends verification POST request to `save.php?action=verify-referral-code`. | Yes (Verified) |
| **Referral URL Auto-Detection** | Homepage / Login Page | Parsing URL query parameter `?ref=CODE` automatically populates the referral input and submits verification after an 800ms delay. | Yes (Verified) |
| **Google Sign-In Modal** | Global Overlay (`#loginModal`) | Background overlay with blur filter. Displays modal box with logo, title, Google Sign-in iframe container, referral section, and close button. | Yes (Verified) |
| **Modal Dismissal** | Global Overlay (`#loginModal`) | Can be dismissed by clicking the `×` button or clicking the dark backdrop outside `#loginModalBox`. | Yes (Verified) |

---

## Forms and Inputs

1. **Referral Code Field (`#refCodeFieldModal` / `#refCodeField`)**
   - **Location:** Inside `#loginModal` on `index.html` and inside `.login-card` on `login.html`.
   - **Type:** Text input (`type="text"`).
   - **Attributes:** `placeholder="e.g. SAVY-AB12"`, `maxlength="12"`, auto-uppercase transform on input (`oninput="this.value=this.value.toUpperCase()"`).
   - **Submission:** Submits on click of "Apply" button or on pressing `Enter` key.
   - **Validation Feedback:** Displays inline status messages inside `.ref-code-status` (green for verified/saved, red for invalid code format or already-used codes).

2. **Custom Assistant Persona & Instructions Inputs**
   - **Location:** `custom-assistant.html`.
   - **Persona Input:** `#persona-name` (Text input for naming the agent persona).
   - **Instructions Area:** `#custom-instructions` (Multi-line textarea for defining system instructions/prompts).
   - **File Upload:** `#upload-files-btn` (Triggers hidden file input for document attachments).
   - **Template Buttons:** Quick template pills that inject predefined prompts into the instructions textarea.

3. **Contact Page Form Verification**
   - **Observation:** `contact.html` does **not** contain an HTML `<form>` or text inputs. Instead, it provides direct contact cards with clickable email links (`mailto:`), registered office address, and support operating hours.

---

## Login / Signup

SAVY APT relies on Google OAuth 2.0 via Google Identity Services (GSI):

- **Script Source:** `https://accounts.google.com/gsi/client`
- **Client IDs Configured:**
  - Landing page: `253160804539-eg47gt0at7nukvfgq82so5epu8lpt4cm.apps.googleusercontent.com`
  - Login page: `253160804539-2gtgr3vs6rjspoc1mf7ervr00mvue36m.apps.googleusercontent.com`
- **Render Configuration:**
  - Shape: Rectangular
  - Theme: Outline
  - Text: "Sign in with Google" (`signin_with`)
  - Size: Large
  - UX Mode: Popup
- **Authentication Handler Flow (`handleGoogleCredential`):**
  1. Captures JWT credential from Google authentication response.
  2. Decodes Base64 payload extracting user profile (`email`, `sub`/Google ID, `name`, `picture`).
  3. Writes session identifiers to `localStorage`: `userEmail`, `userGoogleId`, `userPicture`, `userName`, `lastActiveTimestamp`.
  4. Dispatches background registration to server (`save.php?action=register-referral-code`).
  5. Renders a full-screen welcome overlay (`#welcomeOverlay`) showing user avatar, name, and a 4-second animated countdown.
  6. Automatically redirects user to `chat.html` upon timer expiry or click of "Go Now →".
- **Session Expiry / Inactivity Logic:**
  - Standalone `chat.html` checks `lastActiveTimestamp`. If inactive for > 15 minutes (`15 * 60 * 1000` ms), local storage keys are flushed and the user is redirected to `https://savyapt.com/`.

---

## AI/Chat Features

1. **Embedded Hero Chat (`chat.html?embed=true&hideSidebar=true`)**
   - Publicly visible inside the hero container on `index.html`.
   - Embed guard disables forced authentication redirects.
   - Shows model switching chips (GPT, Claude, Grok, Gemini, DeepSeek) and interactive prompt box.
2. **Sequential Chat Simulation (`#previewMessages`)**
   - Demonstrates AI conversation flow without calling paid external LLMs.
   - Animated bot loading state (`.loading-dots` wave effect).
3. **Showcase Interactive Prompt Threads (`#showcaseMessages`)**
   - Pre-rendered realistic dialogues spanning 10 domains (SEO audit tips, 3-day workout routines, laptop freezing troubleshooting, Spanish phrases, lemon garlic chicken recipe, $500 investment strategies, social media calendar, Paris trip itinerary, product roadmap framework, quantum computing explanation).
4. **Multi-Model Consensus Mechanism (Marketing & Documentation Claim)**
   - The platform claims to parallel-query models and highlight highest-confidence consensus responses. In the public UI, this is presented via badges, model selectors, and user guide documentation.

---

## UI/UX Observations

- **Design System:** High-contrast modern SaaS design utilizing CSS custom variables (`--bg`, `--text`, `--accent`, `--border`). Accent colors are indigo/purple (`#5e5ce6` / `#6366f1`).
- **Smooth Animations:** Includes CSS keyframe animations for floating icons (`subtitleFloat`), modal fade-ins (`cardFadeIn`, `modalPop`), loading wave pulses (`loadingWave`), and testimonial slide transitions (`translateX`).
- **Dark/Light Mode Fidelity:** All primary typography, card backgrounds, borders, and footer containers cleanly invert when toggling themes. Brand logos (`savy_logo_light.png` / `savy_logo_dark.png`) and social icons invert cleanly without layout shifts.
- **Micro-Interactions:** Hover states on tool cards (translate + box-shadow glow), testimonial navigation buttons, category pills, and start buttons give immediate tactile feedback.

---

## Responsive Testing Considerations

- **Breakpoints Detected in Stylesheets:**
  - **`1024px`:** Hero split section flips from 2-column flex to single-column stacked layout; iframe height sets to 500px.
  - **`768px`:** Desktop top-bar navigation collapses; hamburger button (`.mobile-menu-btn`) activates; tools grid shifts from 4 columns to single column or 2 columns; footer links align into column.
  - **`600px`:** Contact page grid shifts to single column stack.
  - **`480px`:** Hero iframe height scales to 400px; modal card padding and font sizes scale down for small mobile viewports.
- **Fluid Typography:** Uses CSS `clamp()` for headline titles (`clamp(36px, 7vw, 56px)`) and button padding to prevent overflow on narrow screens.
- **Iframe Responsiveness:** The embedded chat iframe container maintains width dynamically (`width: 95%; max-width: 1400px`).

---

## Accessibility Considerations

- **Color Contrast:** High contrast in both light (dark text on white/grey) and dark (light text on near-black `#0f0f0f`) themes.
- **ARIA & Keyboard Navigation:**
  - Modal close button provides `aria-label="Close"`.
  - Chat iframe provides explicit `title="SAVY APT Chat Interface"`.
  - FAQ accordion items are clickable divs; adding keyboard `tabindex` and `aria-expanded` attributes would further improve screen-reader accessibility.
- **Obfuscated Email:** Cloudflare email protection is active on `contact.html` to prevent bot scraping while remaining accessible to human visitors.

---

## Features Requiring Authentication

The following features cannot be tested anonymously without completing Google OAuth credentials:
1. **Full Interactive LLM Chat Session:** Sending custom prompts to live upstream APIs (OpenAI, Anthropic, Google, xAI) within standalone `chat.html`.
2. **Tool Execution:** Using Market Research, Trending Prompts, Image Generation, Video Generation, or Code Interpreter overlays.
3. **Custom Agent Saving & Activation:** Deploying a custom persona to the user's permanent account.
4. **User Profile & History:** Loading conversation history, invoice history, or user profile settings.
5. **Subscription & Plan Upgrades:** Stripe checkout integration on `upgrade.html`.

---

## Features Not Tested

In accordance with strict QA standards:
- **Live Google OAuth completion:** Not tested – requires private third-party credentials.
- **Stripe Payment Gateway:** Not tested – requires active payment cards and financial transactions.
- **Live Backend API LLM Token Ingestion:** Not tested – requires authenticated API quota and private user tokens.
- **Server-side database records:** Not tested – black-box testing methodology without backend administrative access.

---

## Testing Limitations

1. **Third-Party OAuth Dependency:** Authentication relies solely on Google Identity Services; there is no native email/password registration form available to test standard form validation (e.g. password strength meters, confirmation mismatch).
2. **Session Guard Redirection:** Standalone access to `chat.html` immediately redirects unauthenticated browsers to the root domain after checking `localStorage`, limiting direct URL testing to the embedded hero iframe.
3. **External Social Media Destinations:** Social icons link to external platforms (Twitter/X, LinkedIn, Instagram); tests verify link targets and `window.open` calls without asserting external platform functionality.
4. **Backend Mock vs Live APIs:** Certain AJAX endpoints (`save.php?action=verify-referral-code`) have frontend graceful fallbacks when offline or unauthenticated.
