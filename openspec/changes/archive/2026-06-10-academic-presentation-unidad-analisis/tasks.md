# Tasks: academic-presentation-unidad-analisis

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~350 lines |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | single PR |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Complete presentation adaptation | PR 1 | Base branch; all academic slides and interactive JS included |

## Phase 1: Foundation & Assets

- [x] 1.1 Generate AI placeholder images for the slides (orchestrator handles this) and place them in `public/assets/images/academic/`.
- [x] 1.2 Update `tailwind.config.js` to replace the old `farma` theme keys with an `academic` palette (neutral/blue tones).

## Phase 2: Core Implementation

- [x] 2.1 Remove obsolete tech/pharma slide files in `src/slides/`.
- [x] 2.2 Create `src/slides/unidad_analisis.js` to define the 5 slide template functions (Title, Concept, Types, Examples, Interactive Activity) and update `src/slides/index.js` to aggregate them.
- [x] 2.3 Replace the HTML content in `index.html` to have the 5 slides and apply the new `academic` body classes.

## Phase 3: Integration & Interactive Logic

- [x] 3.1 Build the interactive JS matching game in `src/main.js` using a click-to-select DOM event approach, matching elements via data attributes.

## Phase 4: Verification

- [x] 4.1 Verify that the presentation loads correctly in the browser and the new Tailwind classes apply seamlessly.
- [x] 4.2 Test the interactive matching game to confirm click events trigger the correct visual feedback.
