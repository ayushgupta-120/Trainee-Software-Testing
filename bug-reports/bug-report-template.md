# Defect / Bug Report Template

Use this standard template for documenting any defects discovered during manual or automated test execution.

---

**Bug ID:** BUG-00X  
**Title:** [Short, descriptive summary of the defect observed]  
**Module:** [e.g., Authentication / FAQ / Theme / Navigation / AI Tools / Forms]  
**Severity:** [Critical / High / Medium / Low]  
**Priority:** [High / Medium / Low]  
**Status:** [New / Open / In Progress / Fixed / Retest / Closed / Rejected]  
**Reported By:** Trainee – Software Testing  
**Date Reported:** YYYY-MM-DD  

---

### Environment & Test Configuration
- **Application URL:** https://savyapt.com/
- **Browser:** Google Chrome (Version: __________)
- **Operating System:** Windows 11
- **Viewport / Device:** Desktop (1280x800) / Tablet (768x1024) / Mobile (375x667)
- **User Account / Session:** Unauthenticated Guest / Authenticated User

---

### Precondition
[Describe any prerequisites, browser states, or stored credentials required before executing the reproduction steps.]

---

### Steps to Reproduce
1. Navigate to `https://savyapt.com/...`
2. Perform action (e.g. click, hover, enter text)...
3. Observe the application behavior and response...

---

### Test Data
- **Inputs used:** [e.g., invalid strings, boundary values, specific email]
- **Parameters:** [e.g., URL parameters, viewport settings]

---

### Expected Result
[Describe what the software *should* do according to specifications, requirements, or design guidelines.]

---

### Actual Result
[Describe what the software *actually* did, including error messages, unexpected visual behavior, console errors, or network status codes.]

---

### Attachments & Evidence
- **Screenshots:** `../screenshots/BUG-00X.png`
- **Console Logs / Network Payloads:** (Attach relevant stack traces or failed HTTP responses)

---

### Impact Analysis
[Describe the business or user experience impact, affected workflows, and potential workarounds if available.]
