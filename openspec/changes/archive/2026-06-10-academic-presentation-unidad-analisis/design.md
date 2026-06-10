# Design: Unidad de Análisis Academic Presentation

## Technical Approach

We will repurpose the existing Reveal.js and Tailwind CSS setup to deliver an academic presentation on "Unidad de Análisis". This involves stripping out the existing "farma" color palette and replacing it with a neutral/blue "academic" palette in `tailwind.config.js`. The slide structure in `src/slides/index.js` will be entirely replaced by a new module (`unidad_analisis.js`) containing 5 specific slides dictated by the spec. The interactive matching activity will be implemented using basic DOM events within the presentation environment.

## Architecture Decisions

### Decision: Color Palette and Styling
**Choice**: Replace `farma` theme keys with `academic` in `tailwind.config.js` (using slate, navy blue, and neutral tones) and update `index.html` body classes.
**Alternatives considered**: Keeping the old keys and just changing the hex values.
**Rationale**: Using a new semantic namespace (`academic-bg`, `academic-dark`) ensures a clean break from the old presentation and prevents lingering tech/pharma styling.

### Decision: Slide Module Structure
**Choice**: Create a single `src/slides/unidad_analisis.js` file that exports template functions for all 5 slides.
**Alternatives considered**: Creating one file per slide.
**Rationale**: For a 5-slide presentation, a single file reduces boilerplate and makes the content easier to maintain while still separating it from the Reveal.js initialization logic in `main.js`.

### Decision: Interactive Activity Implementation
**Choice**: Use a "click-to-select, click-to-target" approach using vanilla JS embedded in the slide or initialized in `main.js`. Elements will use `data-*` attributes to define correct matches.
**Alternatives considered**: Drag-and-drop libraries or framework integration (React/Vue).
**Rationale**: A native JS click-based state machine is lightweight, doesn't require new dependencies, and is less prone to interaction bugs on presentation screens compared to drag-and-drop.

## Data Flow

    [Reveal.js init (main.js)] 
         │
         ├──→ [Tailwind CSS (academic palette)]
         │
         └──→ [src/slides/index.js]
                   │
                   └──→ [src/slides/unidad_analisis.js]
                             ├── Title Slide
                             ├── Concept Definition
                             ├── Types of Units
                             ├── Practical Examples
                             └── Interactive Activity (DOM Events & validation)

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `tailwind.config.js` | Modify | Remove `farma` namespace, add `academic` namespace with blue/neutral tones. |
| `index.html` | Modify | Update presentation meta title and body classes to use the new `academic` colors. |
| `src/main.js` | Modify | Hook up the interactive activity logic upon the Reveal.js `slidechanged` or `ready` events. |
| `src/slides/index.js` | Modify | Remove old imports; import and aggregate only the new `unidad_analisis` slides. |
| `src/slides/unidad_analisis.js` | Create | Define HTML templates for Title, Concept, Types, Examples, and Activity slides. |
| `src/slides/*.js` (old files) | Delete | Remove obsolete slides like `ecommerce.js`, `tracker.js`, `design.js`, etc. |
| `public/assets/images/academic/` | New | Directory for conceptual/academic placeholder images. |

## Interfaces / Contracts

```javascript
// src/slides/unidad_analisis.js
export function titleSlide() { /* Returns slide HTML string */ }
export function conceptSlide() { /* Returns slide HTML string */ }
export function typesSlide() { /* Returns slide HTML string */ }
export function examplesSlide() { /* Returns slide HTML string */ }
export function interactiveActivitySlide() { /* Returns slide HTML string */ }
```

**Interactive Activity Logic (Data Contract):**
Items and targets will be mapped via data attributes.
```html
<button class="match-item" data-id="1" data-match="group">Estudiantes de 4to año</button>
<div class="match-target" data-target="group">Grupos</div>
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | HTML Validation | Ensure template functions output correctly structured HTML for Reveal.js. |
| Integration | Slide Rendering | Run the dev server (\`npm run dev\`) and verify Reveal.js loads the 5 specific slides. |
| E2E | Interactive Game | Manually click to match items on the activity slide and verify correct/incorrect visual feedback triggers. |

## Migration / Rollout

No database or state migration is needed. The repository will be purged of the old presentation content (\`src/slides/*\`), and the new academic content will become the default. 

## Open Questions

- [ ] Will we use placeholder images for the conceptual graphics or are specific assets provided?
- [ ] Should the interactive activity reset itself automatically if the user makes a mistake, or wait for manual retry?
