## Exploration: Update presentation 'Unidad de Análisis' to add UNEG identity, add group members (Brayan Carreño, Samuel Silva, Jebel Ruiz, Abraham Orta) to the title slide, and extend slides with more content about the topic.

### Current State
The presentation uses Reveal.js + Tailwind CSS. The slides are built in `src/slides/unidad_analisis.js` and aggregated in `src/slides/index.js`. It currently has 4 slides: Title, Concept, Types, and Examples. The title slide only contains the title "Unidad de Análisis" and a subtitle, without institution identity or authors. The Tailwind config defines a generic `academic` theme.

### Affected Areas
- `src/slides/unidad_analisis.js` — Needs modifications to `titleSlide()` to add the UNEG text/logo and group members. Needs new functions for the extended slides (e.g., `differencesSlide()`, `errorsSlide()`).
- `src/slides/index.js` — Needs to import and include the newly created slides in `buildSlidesHTML()`.
- `tailwind.config.js` (optional) — Could be updated to match UNEG's institutional colors (blue/yellow) instead of generic academic colors.

### Approaches
1. **Extend Existing File with Text Updates** — Update `titleSlide()` with UNEG text and team names. Add 2-3 new slide functions (e.g., differences, common errors, conclusion) to `unidad_analisis.js` and export them.
   - Pros: Simple, keeps all content in one file, easy to maintain.
   - Cons: Does not fully incorporate UNEG's visual identity (colors).
   - Effort: Low

2. **Full Identity Integration + Content Extension** — Update `tailwind.config.js` to include UNEG specific colors. Update `titleSlide()` to include the UNEG logo (via placeholder or URL), institution name, and the list of group members. Add new slides detailing differences and common errors in `unidad_analisis.js`.
   - Pros: Much stronger institutional presence, looks more professional.
   - Cons: Might require adjusting other elements if the color palette changes significantly.
   - Effort: Medium

### Recommendation
**Approach 2 (Full Identity Integration + Content Extension)**. Modifying the title slide to include the team members and UNEG name is straightforward. Extending the content with topics like "Unidad de Observación vs Unidad de Análisis" and "Falacia Ecológica" adds significant academic value. Updating the Tailwind palette to UNEG colors provides a stronger institutional identity.

### Risks
- Modifying the color palette in Tailwind might affect the contrast or visibility of existing elements (e.g., badges, icons) that were designed for the current blue/cyan scheme.
- The title slide might become cluttered if too much information (title, subtitle, institution, 4 members) is packed into the left column.

### Ready for Proposal
Yes — the orchestrator should inform the user that we will extend the title slide, add new slides for differences and common errors, and recommend adjusting the color palette slightly to better fit the UNEG identity.
