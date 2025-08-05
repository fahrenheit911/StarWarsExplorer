---
name: Bug Report
about: Report an issue to help improve the StarWarsExplorer project
title: '[BUG]: '
labels: bug
assignees: ''
---

### 🐛 Bug Description

When deploying the **StarWarsExplorer** app to GitHub Pages, navigating directly to a nested route
(e.g., `/people`) and refreshing the page results in a **404 error**.

This happens because **GitHub Pages does not support SPA routing with BrowserRouter by default**,
and subpath requests are not redirected to `index.html`.

---

### 🔄 Steps to Reproduce

1. Open: https://fahrenheit911.github.io/StarWarsExplorer/people
2. Refresh the page
3. Browser shows **404 Not Found**

---

### ✅ Expected Behavior

- The page should **load correctly on refresh**, keeping the current route.

---

### 📸 Screenshots / Logs

_None yet_

---

### 💻 Environment

- **OS:** Windows 11 Pro 24H2 (other OS not tested)
- **Browser:** Chrome Version 138.0.7204.18 (likely reproducible in other browsers)
- **Project commit / version:** d48b7a2

---

### 🔁 Reproducibility

- [x] Always
- [ ] Sometimes
- [ ] Rarely

---

### ⚡ Severity / Impact

- [ ] Minor — does not block core functionality
- [x] Major — breaks core navigation
- [ ] Critical — application becomes unusable

---

### 🔧 Workaround

_None yet_

---

### 🔗 Related Issues / PR

_None yet_
