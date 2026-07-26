# ThreadWatch AI

> **AI Workforce Intelligence & Compliance Platform for Bangladesh's RMG Industry.**

[![Status](https://img.shields.io/badge/round-1%20online-blueviolet)](#)
[![Stack](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-success)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live](https://img.shields.io/badge/live-_netlify-success)](#)

ThreadWatch AI turns anonymous worker complaints into **structured, explainable, predictive** signals — and gives brands, buyers, and inspectors a real-time health score for every factory under their watch.

```
┌─────────────────────────────────────────────────────────────────────┐
│  Worker (👷)         Manager (🏭)         Inspector (🛡️)            │
│  · Voice/text         · Live health score  · Cross-factory alerts  │
│  · Bangla + English   · Explainable "Why?" · Department risk map   │
│  · Anonymity hash     · AI Trends          · Compliance reports    │
│  · Worker receipts    · Smart Search       · Predictive forecasts  │
└─────────────────────────────────────────────────────────────────────┘
                ↓                                       ↑
       (Anonymous, provenance-stamped)         (Predictive risk signals)
                ↓                                       ↑
   ┌─────────────────────────────────────────────────────────────┐
   │  ThreadWatch AI  ·  HTML/CSS/JS SPA ·  No backend lock-in   │
   └─────────────────────────────────────────────────────────────┘
```

---

## 🌟 Three things that make this stand out

1. **Anonymity Shield** — every report gets a 16-character fingerprint of the *raw text* and shows the visible fields that were stripped (names, phones, IDs). The worker can verify: *my anonymous report really is anonymous.*
2. **"Why this score?" Explainability** — every health score is fully explainable. Click any number on the hero dashboard or the manager KPI bar to see the 3 deterministic bullets that produced it.
3. **Live Anomaly Pulse** — every 12 seconds the AI detects a fresh risk pattern, the health ring flashes red, the score dips, and the AI stream updates. **The dashboard literally beats like a heart.**

---

## 🚀 Live Demo

| Resource | Link |
|---|---|
| **GitHub repo** | [github.com/AimanKabir/threadwatch-ai](https://github.com/AimanKabir/threadwatch-ai) |
| **Live app** | `https://<your-netlify-subdomain>.netlify.app` (deploy guide below) |
| **Demo video** | Google Drive public link _(see [Demo Video section](#-demo-video) below)_ |
| **Concept note** | [`docs/CONCEPT_NOTE.md`](docs/CONCEPT_NOTE.md) |

---

## 🏃 How to run

This is a **pure static SPA** — no build step, no backend, no `npm install`.

### Option A — Direct file open
Open `app/index.html` in any modern browser. Done.

### Option B — Local server (recommended)
```bash
# Python (any version)
cd app
python -m http.server 8000

# Or Node.js
npx serve app

# Or any Live Server extension
```

### Option C — Deploy to Netlify (drag-and-drop)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `app/` folder into the dropzone
3. Wait ~10 seconds → you get a `https://<random>.netlify.app` URL
4. The included `netlify.toml` already disables caching so `?v=N` cache-busts work.

### Option D — Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

---

## 📁 Project structure

```
threadwatch-ai/
├── app/                       # Static SPA — pure HTML/CSS/JS
│   ├── index.html             # Single entry point
│   ├── css/
│   │   └── styles.css         # All styles (vanilla CSS, custom properties)
│   └── js/
│       ├── app.js             # Main application (state, rendering, events)
│       ├── aiEngine.js        # Health scoring, sentiment, anomaly detection
│       ├── mockData.js        # Synthetic factories, complaints, lessons
│       └── i18n.js            # English + Bengali translations
├── docs/
│   └── CONCEPT_NOTE.md        # Online round submission (≤400 words)
├── netlify.toml               # Netlify deploy config
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🏗️ Architecture

```
┌────────────────── USER INTERFACE ──────────────────┐
│  index.html  ──  <header> <nav> <main> <views>      │
│       │                                            │
│       ▼                                            │
│  css/styles.css  ──  Custom properties + themes    │
│       │                                            │
│       ▼                                            │
│  js/app.js  ──  State + Router + Render            │
│       │                                            │
│       ├── js/aiEngine.js  ──  HealthScore(),       │
│       │                       healthGrade(),       │
│       │                       detectAnomaly(),     │
│       │                       chatReply()          │
│       │                                            │
│       ├── js/mockData.js  ──  MOCK.factories[],    │
│       │                       MOCK.complaints[],   │
│       │                       MOCK.chatKB[]        │
│       │                                            │
│       └── js/i18n.js  ──  I18N.en, I18N.bn         │
└─────────────────────────────────────────────────────┘
```

There is **no backend**. All AI is deterministic JavaScript (see `aiEngine.js` for the model). The entire app is **under 500 KB** of source.

---

## 🧠 How the AI works (deterministic, explainable)

| Function | What it does |
|---|---|
| `AI.computeHealthScore(complaints)` | Weighted severity × urgency × (1 - resolution rate). Returned 0–100. |
| `AI.healthGrade(score)` | Maps score → `{ grade: 'A+'..'D', color, label }` |
| `AI.detectAnomaly(snapshot)` | Compares last 5 minutes of complaints vs. trailing 24h baseline. |
| `AI.anonymize(text)` | Strips names, phone numbers, national IDs, and hashes the result. |
| `AI.chatReply(query)` | Bangla/English keyword KB → contextual reply. |

Every score is **fully explainable** via the "Why this score?" popover — no black boxes.

---

## 🌍 Internationalization

The app supports **English** and **বাংলা (Bangla)** out of the box. Toggle via the top nav. Add a new language by appending to `js/i18n.js` — no app logic changes needed.

---

## 🛣️ Roadmap (Round 2 if we clear)

| Feature | Why |
|---|---|
| **WhatsApp voice → anonymous report** | Workers speak, not type. In Bangla. |
| **Worker feedback ledger** | Closes the trust loop: *report → ack → resolved.* |
| **Predictive risk forecasting** | "F-003 will drop from 78 → 64 by Aug 15." |
| **Real BGMEA / Accord data feeds** | Replaces synthetic fixtures with the real inspection registry. |
| **Brand buyer portal** | 4th role: aggregate compliance for H&M, Zara, Levi's CSR. |
| **Inspector PWA with offline mode** | Field inspections with no Wi-Fi. |

---

## 📹 Demo Video

🎥 **[▶ Watch the demo on Google Drive →](https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing)**

_(1–3 minute walkthrough covering worker → manager → inspector narrative, with the three signature features shown live: anonymity shield, why-this-score, anomaly pulse.)_

---

## 📜 License

MIT — see [LICENSE](LICENSE).
