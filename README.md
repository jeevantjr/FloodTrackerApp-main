# 🌊 FloodTrackerApp — Community Resilience Tracker

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-0055a5?style=flat-square&logo=github)](https://drjeevaraj.github.io/FloodTrackerApp/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-27ae60?style=flat-square&logo=googlechrome)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-e67e22?style=flat-square)](LICENSE)
[![Made in Sri Lanka](https://img.shields.io/badge/Made%20in-Sri%20Lanka%20🇱🇰-8B0000?style=flat-square)](https://drjeevaraj.com)
[![Developer](https://img.shields.io/badge/Developer-Dr.%20T.%20Jeevaraj-0077cc?style=flat-square)](https://drjeevaraj.com)

A **mobile-first Progressive Web App (PWA)** for community-based reporting and monitoring of flood events, public health alerts, and education disruptions. Built for field use in disaster-affected and low-connectivity areas — offline-capable and deployable at zero infrastructure cost.

> Developed as part of the **HeroX Data-to-Dust Challenge**, demonstrating how lightweight digital tools can strengthen community resilience during climate emergencies and humanitarian crises.

---

## 🖼️ Screenshots

| Home | Dashboard | Flood Report |
|------|-----------|--------------|
| Community landing with live incident map | Unified reports dashboard with filtering | Structured form for field reporting |

---

## ✨ Features

- **📡 Offline-ready** — Service Worker caching keeps the app functional when connectivity fails
- **🗺️ Live incident map** — Leaflet.js map showing georeferenced flood, health, and education incidents across Sri Lanka
- **📋 Multi-domain reporting** — Floods 🌊, public health 🩺, and education/safety 🏫 in one platform
- **📊 Unified dashboard** — Filter and view all reports with severity and status badges
- **⚡ Real-time alert ticker** — Scrolling live alerts bar on the home page
- **📲 PWA installable** — Users can install it like a native app on Android and iOS
- **♿ Accessible** — ARIA labels, semantic HTML, keyboard-navigable
- **🌐 Zero-cost hosting** — Fully static; deployable on GitHub Pages at no cost
- **📱 Responsive** — Optimised for mobile, tablet, and desktop

---

## 🧩 App Structure

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with live map, alert ticker, and domain cards |
| `flood-report.html` | Field form — submit flood observations with severity and location |
| `health-report.html` | Field form — report health alerts, outbreaks, or supply shortages |
| `education-report.html` | Field form — report school closures or public safety incidents |
| `dashboard.html` | Unified view of all reports with filter tabs and status badges |
| `privacy.html` | Privacy policy for field reporters |
| `terms.html` | Terms of use and disclaimers |

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Map | [Leaflet.js](https://leafletjs.com/) + OpenStreetMap |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| PWA | Web App Manifest + Service Worker |
| Hosting | GitHub Pages (static, zero-cost) |
| Offline | Cache-first strategy via `service-worker.js` |

---

## 🚀 Getting Started

### View Live
Open the deployed app directly — no installation required:

```
https://drjeevaraj.github.io/FloodTrackerApp/
```

### Run Locally

```bash
git clone https://github.com/drjeevaraj/FloodTrackerApp.git
cd FloodTrackerApp

# Serve with any static file server, e.g.:
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

> **Note:** The PWA Service Worker requires HTTPS or localhost to activate. GitHub Pages serves over HTTPS automatically.

### Install as App (PWA)

On supported browsers, visit the live URL and tap **"Install FedWatch App"** when prompted — or use the browser's "Add to Home Screen" option.

---

## 📂 Repository Structure

```
FloodTrackerApp/
├── index.html              # Home / landing page
├── dashboard.html          # Reports dashboard
├── flood-report.html       # Flood reporting form
├── health-report.html      # Health alert form
├── education-report.html   # Education / safety form
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline caching
├── images/
│   └── flood-icon.png      # App icon (192×192 & 512×512)
└── LICENSE
```

---

## 🌏 Context & Motivation

Sri Lanka is vulnerable to seasonal flooding, tropical storms, and cascading health and education disruptions. During disaster events, field workers and community members often operate in areas with intermittent connectivity and no access to institutional data systems.

FloodTrackerApp was designed from first-hand experience working in disaster-affected communities in the Eastern Province — where a lightweight, offline-capable reporting tool can make a real difference before formal emergency management systems respond.

This project sits within a broader portfolio of digital public health work including disease surveillance platforms (OutbreakWatch), health statistics visualisers (District Health Stats PWA), and welfare-centre dashboards built for the Sri Lankan context.

---

## 👨‍⚕️ Developer

<table>
  <tr>
    <td valign="top" width="160">
      <a href="https://drjeevaraj.com">
        <img src="https://drjeevaraj.com/T. Jeevaraj.jpg" width="140" alt="Dr. T. Jeevaraj" style="border-radius:8px;" />
      </a>
    </td>
    <td valign="top">
      <h3>Dr. Thangarasa Jeevaraaj</h3>
      <p>
        <strong>MBBS · MCGP · MSc Biomedical Informatics</strong><br />
        MD Trainee, Health Informatics — PGIM, University of Colombo<br />
        General Practitioner · Health Informatician · Author · Sri Lanka
      </p>
      <p>
        I build digital health tools that serve communities, not just institutions — offline-first, zero-cost, field-ready. This app is part of a portfolio of 8 digital health projects developed alongside clinical practice in Sri Lanka.
      </p>
      <p>
        🌐 <a href="https://drjeevaraj.com">drjeevaraj.com</a> &nbsp;·&nbsp;
        📄 <a href="https://drjeevaraj.com/cv.html">Full CV</a> &nbsp;·&nbsp;
        💼 <a href="https://drjeevaraj.com/dev.html">Dev Portfolio</a><br />
        🔗 <a href="https://www.linkedin.com/in/geevanathy/">LinkedIn</a> &nbsp;·&nbsp;
        🐦 <a href="https://x.com/drjeevaraj">X / Twitter</a> &nbsp;·&nbsp;
        📧 <a href="mailto:tjeevaraj78@gmail.com">tjeevaraj78@gmail.com</a>
      </p>
      <p>
        📚 Author of <a href="https://www.amazon.com/dp/B0H333G41P"><em>Are You Still Human?</em></a> (Kindle, 2026) — a literary nonfiction work on AI and human relationships.
      </p>
    </td>
  </tr>
</table>

### Other Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [OutbreakWatch](https://drjeevaraj.com/dev.html) | Real-time disease surveillance with anomaly detection | Python · Django |
| [District Health Stats PWA](https://drjeevaraj.com/dev.html) | Offline health data visualiser for district level | JS · D3.js |
| [Welfare Centre Dashboard](https://drjeevaraj.com/dev.html) | Displaced-population tracking during disasters | React · Firebase |
| [Cancer Early Detection Centre](https://drjeevaraj.com/dev.html) | Patient registration & screening workflows | Vue.js · REST API |

Full portfolio: [drjeevaraj.com/dev.html](https://drjeevaraj.com/dev.html)

---

## 📜 License

This project is released under the [MIT License](LICENSE).

You are free to use, adapt, and redistribute this tool for community and humanitarian purposes. Attribution is appreciated.

---

## 🙏 Acknowledgements

- [Leaflet.js](https://leafletjs.com/) — open-source interactive maps
- [OpenStreetMap](https://www.openstreetmap.org/) — map tile data
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- [HeroX](https://www.herox.com/) — Data-to-Dust Challenge platform
- Communities of Trincomalee and the Eastern Province who inspired this work

---

<p align="center">
  Built with purpose for communities that need it most.<br />
  <a href="https://drjeevaraj.com">drjeevaraj.com</a> · Sri Lanka · 2026
</p>
