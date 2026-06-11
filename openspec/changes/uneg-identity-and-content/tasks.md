# Tasks: UNEG Identity and Content Extension

## Review Workload Forecast

Decision needed before apply: Yes
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Implement all changes | PR 1 | Single PR for small UI updates |

## Phase 1: Foundation (Theme configuration)

- [x] 1.1 Modify `tailwind.config.js` to update the `academic` theme colors to UNEG's blue and yellow palette.

## Phase 2: Core Implementation (Slide modifications)

- [x] 2.1 Update `src/slides/unidad_analisis.js`: Modify the `titleSlide()` function to include the UNEG logo and the 4 group members formatted in a two-column layout at the bottom.
- [x] 2.2 Update `src/slides/unidad_analisis.js`: Create and export a new slide function for "Unidad de Observación vs Unidad de Análisis".
- [x] 2.3 Update `src/slides/unidad_analisis.js`: Create and export a new slide function for "Falacia Ecológica".

## Phase 3: Integration (Presentation flow)

- [x] 3.1 Update `src/slides/index.js` to import the new slide functions from `src/slides/unidad_analisis.js` and append them to the presentation flow.
