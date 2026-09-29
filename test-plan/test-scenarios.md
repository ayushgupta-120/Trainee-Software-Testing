# SAVY APT – High-Level Test Scenarios Matrix

This document defines the high-level test scenarios covering all functional and non-functional areas of the **SAVY APT** public web platform (`https://savyapt.com/`). Each scenario maps to specific test cases defined in [`test-cases/manual-test-cases.md`](../test-cases/manual-test-cases.md) and automated in [`automation/tests/`](../automation/tests/).

---

## Scenario Mapping Matrix

| Scenario ID | Functional Area | Scenario Description | Mapped Test Cases | Execution Status |
|---|---|---|---|---|
| **TS-NAV-01** | Navigation & Branding | Verify primary header navigation, brand logo links, sticky positioning, and subpage return pathways (`index.html`). | TC-001, TC-002, TC-003, TC-004, TC-005, TC-006, TC-007, TC-008, TC-019, TC-020, TC-021, TC-022 | Passed |
| **TS-HERO-01** | Hero & Dynamic Display | Verify hero headline rendering, model badges hover micro-interactions, dynamic prompt auto-rotation, and standalone route redirects. | TC-009, TC-010, TC-011, TC-012, TC-013 | Passed |
| **TS-THEME-01** | Theme Switcher | Verify default theme attribute, dark/light mode toggle switch, icon synchronization, localStorage persistence, and logo asset swapping. | TC-014, TC-015, TC-016, TC-017, TC-018 | Passed |
| **TS-NAV-02** | Mobile Navigation | Verify mobile hamburger button responsive display, drawer expansion, outside-click dismissal, nav routing, and drawer theme toggle. | TC-023, TC-024, TC-025, TC-026 | Passed |
| **TS-FAQ-01** | FAQ Accordion | Verify default active state, expanding collapsed questions, accordion exclusivity, collapse toggling, persistence, and rapid click resilience. | TC-027, TC-028, TC-029, TC-030, TC-031, TC-032 | Passed |
| **TS-TOOLS-01** | AI Tool Directory | Verify tool card grid rendering, category pill filtering, hover effects, and tag metadata display. | TC-033, TC-034, TC-035, TC-036 | Passed |
| **TS-TOOLS-02** | Tool Authentication Gate | Verify that unauthenticated clicks on tool cards trigger the prompt toast (`#toolUsagePopup`) and redirect to `login.html`. | TC-037, TC-038, TC-039, TC-040 | Passed |
| **TS-LEGAL-01** | Legal & Compliance | Verify Privacy Policy, Terms of Service, and Security information links resolve with HTTP 200 and valid policy content. | TC-041, TC-042, TC-043 | Passed |
| **TS-TEST-01** | Testimonials Carousel | Verify customer testimonial cards auto-rotate on timer (8s), respond to manual dot selection, and display author details. | TC-044, TC-045, TC-046, TC-047, TC-048 | Passed |
| **TS-AUTH-01** | Authentication Interface | Verify Google Identity Services client script and Google Sign-In button rendering on `login.html`. | TC-049 | Passed |
| **TS-REF-01** | Referral Program | Verify referral tier showcase, reward value calculations, and interactive referral accordions. | TC-050, TC-051, TC-052, TC-053 | Passed |
| **TS-HERO-02** | Interactive Chat Demo | Verify embedded iframe chat interface renders seamlessly with prompt category chips and input interactions while suppressing unauthenticated redirects. | TC-054, TC-055, TC-056, TC-057, TC-058 | Passed |
| **TS-ASST-01** | Custom Assistant | Verify custom assistant promotional landing page, feature highlights, and deployment authentication gate. | TC-059, TC-060, TC-061, TC-062 | Passed (3) / Blocked (1 gated) |
| **TS-FORM-01** | Contact Form Validation | Verify contact form fields, input boundary validations, email regex constraints, and required field triggers. | TC-063, TC-064, TC-065, TC-066 | Passed |
| **TS-RESP-01** | Responsive Design | Verify layout elasticity, grid wrapping, touch target sizing, and zero horizontal scroll overflow at 375px, 768px, and 1280px widths. | TC-067, TC-068, TC-069, TC-070 | Passed |

---

## Coverage Analysis
- **Total High-Level Scenarios:** 15
- **Total Detailed Test Cases:** 70 (TC-001 through TC-070)
- **Total Automated Test Specs:** 7 spec files (34 atomic test runs)
- **Feature Traceability:** 100% of publicly discovered application features mapped to formal scenarios and executed.
- **Pass Rate:** 69 Passed (98.6%) | 1 Blocked by design (1.4%) | 0 Failed (0.0%)
