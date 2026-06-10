# Proposal: Unidad de Análisis Academic Presentation

## Intent

Repurpose the existing presentation template to teach the concept of "Unidad de Análisis" for a Seminario de Investigación video (~5 minutes). The focus is on adapting the template for an academic context while retaining visual appeal.

## Scope

### In Scope
- Create 5-6 highly visual presentation slides using standard methodological bibliography (e.g., Hernández Sampieri).
- Define the concept, types of "unidad de análisis", and how to identify it in research.
- Adapt the Reveal.js/Tailwind CSS styling to a formal, modern academic visual style (neutral/blue tones, conceptual images).

### Out of Scope
- Detailed technical or pharma-style styling (current template style will be removed).
- Script creation for the 5-minute video (slides and visual aids only).
- Creating new Reveal.js/Tailwind components from scratch (reusing existing framework).

## Capabilities

### New Capabilities
- `unidad-analisis-content`: Covers the academic slides defining the concept, types, and identification of the unit of analysis in research methodology.

### Modified Capabilities
- None

## Approach

Leverage the existing Reveal.js and Tailwind CSS setup but switch the color palette to formal neutral/blue tones. The content will be drawn from methodological standards (like Hernández Sampieri) and structured into 5-6 slides suitable for a 5-minute video presentation. Existing tech/pharma thematic elements will be replaced with academic and conceptual imagery.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` (or main presentation file) | Modified | Replace current slides with the 5-6 academic slides about "Unidad de Análisis". |
| `tailwind.config.js` or CSS assets | Modified | Update color palette to neutral/blue tones. |
| `assets/images/` | Modified/New | Add new conceptual images for the academic theme, removing previous tech/pharma images. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Content too dense for a 5-minute video | Medium | Ensure highly visual slides with minimal text, offloading details to the presenter's speech. |
| Breaking Reveal.js layout with new classes | Low | Use established existing template classes and avoid structural changes where possible. |

## Rollback Plan

Revert the changes to the presentation HTML, CSS configurations, and image assets via git checkout to restore the original template.

## Dependencies

- Existing Reveal.js and Tailwind CSS environment.
- Methodological source material (e.g., *Metodología de la Investigación* by Hernández Sampieri).

## Success Criteria

- [ ] 5-6 visual slides accurately covering the "Unidad de Análisis" concept, types, and identification.
- [ ] Visual theme successfully shifted to formal/academic (neutral/blue tones).
- [ ] Slides render correctly without layout breaks using the existing Reveal.js/Tailwind setup.

## Proposal question round

To ensure this proposal meets the product expectations, please review these questions:
1. **Target Audience/Tone:** Is the audience mostly undergraduate students or advanced researchers? This helps calibrate how deep we go with Sampieri's definitions.
2. **Visuals:** Do you have specific conceptual images or diagrams in mind, or should we use placeholder academic stock visuals (e.g., diagrams, abstract representations)?
3. **Presenter Notes:** Should we include speaker notes (`<aside class="notes">`) within the Reveal.js slides to help script the 5-minute video?
