# Nursing Notes — Clinical Case Studies

An educational Astro.build website featuring a plethora of clinical case studies and unfolding cases with professional nursing documentation.

🌐 **Live Site:** [https://sagreenxyz.github.io/nursing-notes](https://sagreenxyz.github.io/nursing-notes)

## Features

- **6 detailed clinical cases** spanning cardiovascular, endocrine, neurological, critical care, pediatric/respiratory, and orthopedic/surgical nursing
- **Unfolding scenarios** — each case progresses through 3–4 phases showing how patient status evolves
- **Multiple nursing note formats** — SBAR, DAR, SOAP, Focus, and Narrative charting demonstrated in every case
- **Evidence-based content** aligned with current clinical guidelines
- **Deployed to GitHub Pages** via GitHub Actions

## Cases Included

| Case | Category | Phases |
|------|----------|--------|
| Acute Coronary Syndrome (STEMI → PCI) | Cardiovascular | 4 |
| Diabetic Ketoacidosis | Endocrine | 4 |
| Ischemic Stroke (tPA → Rehab) | Neurological | 4 |
| Sepsis & Septic Shock | Critical Care | 4 |
| Pediatric Asthma Exacerbation | Pediatric/Respiratory | 3 |
| Post-Op Hip Replacement (DVT complication) | Orthopedic/Surgical | 4 |

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages on every push to `main` via the GitHub Actions workflow at `.github/workflows/deploy.yml`.

**Required GitHub Settings:**
1. Go to repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**

## Tech Stack

- [Astro](https://astro.build) v6 — static site generator
- Vanilla CSS — no frameworks needed
- GitHub Pages — free static hosting
- GitHub Actions — CI/CD deployment

---

> **Disclaimer:** All patient cases are fictional and created for educational purposes only. Not a substitute for clinical judgment or professional guidance.