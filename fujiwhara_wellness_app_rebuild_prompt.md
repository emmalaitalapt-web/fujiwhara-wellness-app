# Fujiwhara Wellness Tracker — Rebuild Prompt

## Setup (do this first, in Terminal)

```
mkdir ~/Desktop/fujiwhara-wellness-app
cd ~/Desktop/fujiwhara-wellness-app
git init
claude
```

Then paste everything below into Claude Code.

---

## What we're building

A mobile-first web app called "Fujiwhara Wellness Tracker," for women in perimenopause. It's a companion to a speaking gig and gets sold as a digital product afterwards (women bookmark it on their phone home screen, no app store needed).

## Tech and setup instructions for Claude Code

- Build as a simple web app (HTML/CSS/JS or React, your choice), mobile-first, large touch targets
- Use browser local storage for data persistence — each woman's data stays on her own device, no backend, accounts, or database needed for v1
- Set up git immediately: init the repo, commit after each major feature is working, and offer to help connect it to GitHub so this project is never lost
- Branding: black background/header, orange accent colour #F7941D, blue as a secondary accent — match Fujiwhara Personal Training's visual style

## Core sections (bottom navigation)

### 1. Daily Tracker
- Protein (g) and fibre (g) — typed number entry, the only numeric fields in the whole app
- Workout checklist: strength trained / cardio (tap to check)
- Nutrient checklist (tap to check, tap label to expand a small panel of food source examples):
  - Omega-3: salmon, sardines, walnuts, chia seeds, flaxseed, fish oil
  - Magnesium: pumpkin seeds, almonds, spinach, dark chocolate, magnesium supplement
  - Calcium: dairy/yoghurt, fortified plant milk, leafy greens, tinned sardines, tofu
  - Vitamin D: sunlight exposure, salmon, eggs, fortified milk, vitamin D supplement
  - Iron: red meat, lentils, spinach, tofu, fortified cereal
- Water tracker: simple glass count, tap to increment, target ~8 glasses
- Optional short mood/symptom note field

### 2. Calendar / History
- Monthly calendar view, default to current month, back/forward arrows to navigate months
- Days with a logged entry show an orange (#F7941D) dot or highlight
- Tapping a day with an entry opens a read-only summary: protein, fibre, workouts completed, nutrient checklist items ticked, water glasses, mood/symptom note
- Days without entries show nothing on tap

### 3. Recipes
- Sub-tabs: Breakfast, Lunch, Dinner
- Card format for each recipe: ingredients list, method steps, one-line description with personality/voice
- For Breakfast: pull recipes from `/Users/emmalaitala/Downloads/Fujiwhara_Savoury_Breakfast_Recipes.pdf` (read this file directly and adapt the recipes into the card format)
- For Lunch and Dinner: create 3-4 placeholder recipes each in the same style/format, to be expanded later
- Nutrient tag badges on each card (max 1-3, only when genuinely relevant): tag with whichever of Omega-3, Magnesium, Calcium, Vitamin D, Iron, Protein, Fibre the recipe is a good source of

### 4. Library / Topics
- Content tabs covering:
  - Glucose & insulin resistance basics and why it matters in perimenopause — source from `/Users/emmalaitala/Downloads/Fujiwhara_Glucose_Guide_FIXED_v3.pdf` and `/Users/emmalaitala/Downloads/glucose_goddess_fujiwhara.pdf`
  - What to do after meals to minimise glucose spikes (from the glucose guide content above)
  - Sleep — source from `/Users/emmalaitala/Downloads/Fujiwhara_9_Ways_To_Improve_Sleep.pdf`
  - Gut health — source from `/Users/emmalaitala/Downloads/Feed_Your_Gut_Fujiwhara.pdf`
- Build this as a flexible list of topic cards/sections so more topics can be added later without restructuring the page

## Design notes

- Mobile-first throughout, large fonts, generous tap targets
- Daily entry should be fast: only protein and fibre require typing, everything else is a single tap
- Keep visual style and components consistent across all sections once established

## After the build

Once the app is working end to end, help me:
1. Confirm git has tracked everything (`git status`, `git log`)
2. Set up a GitHub repo and push, so there's always a backup
