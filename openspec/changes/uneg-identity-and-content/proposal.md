# Proposal: UNEG Identity and Content Extension

## Intent

Update the existing presentation to adopt the UNEG institutional identity (logo and colors), incorporate the group members into the title slide, and expand the academic content to cover key methodological distinctions ("Unidad de Observación vs Unidad de Análisis" and "Falacia Ecológica").

## Scope

### In Scope
- Add the UNEG logo (referenced from Wikipedia) to the title slide.
- Update the Tailwind configuration to use UNEG institutional colors (blue and yellow) as the primary academic theme.
- Add group members (Brayan Carreño, Samuel Silva, Jebel Ruiz, Abraham Orta) formatted in two columns at the bottom of the title slide.
- Add a new slide explaining the differences between "Unidad de Observación" and "Unidad de Análisis".
- Add a new slide explaining the concept of "Falacia Ecológica".

### Out of Scope
- Major restructuring of the existing Reveal.js layout or changing the core presentation framework.
- Adding animations or complex interactivity to the newly added slides.

## Capabilities

### New Capabilities
None

### Modified Capabilities
- `unidad-analisis-content`: Expanding the title slide requirements to include institutional branding (logo/colors) and team members. Extending the presentation structure to include two new academic topics (Unidad de Observación vs Unidad de Análisis, Falacia Ecológica).

## Approach

1.  **Identity:** Modify `tailwind.config.js` to update the `academic` theme colors to UNEG's blue and yellow.
2.  **Title Slide:** Update `src/slides/unidad_analisis.js` to redefine the `titleSlide()` function, incorporating the UNEG logo and the 4-member list in a clean two-column grid layout at the bottom.
3.  **New Content:** Create two new slide-generating functions in `src/slides/unidad_analisis.js` for the new topics and export them.
4.  **Integration:** Update `src/slides/index.js` to import and append the new slides in the presentation flow.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/slides/unidad_analisis.js` | Modified | Update title slide layout, add new slide functions. |
| `src/slides/index.js` | Modified | Import and append new slides to the presentation. |
| `tailwind.config.js` | Modified | Update color palette to match UNEG identity. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Color contrast issues with UNEG palette | Medium | Use appropriate shades of blue and yellow to maintain text readability against backgrounds. |
| Cluttered title slide | Low | Utilize a clean two-column CSS grid layout at the bottom specifically for the names, scaling text if necessary. |

## Rollback Plan

Revert the changes to `tailwind.config.js`, `src/slides/unidad_analisis.js`, and `src/slides/index.js` using `git checkout` or by reverting the respective commit.

## Dependencies

- External image URL access for the UNEG logo (`https://es.wikipedia.org/wiki/Archivo:LOGO_UNEG.jpg` / Commons direct link).

## Success Criteria

- [ ] The presentation uses UNEG blue and yellow colors.
- [ ] The title slide displays the UNEG logo.
- [ ] The title slide lists the 4 group members in a two-column format.
- [ ] The presentation includes a slide for "Unidad de Observación vs Unidad de Análisis".
- [ ] The presentation includes a slide for "Falacia Ecológica".
