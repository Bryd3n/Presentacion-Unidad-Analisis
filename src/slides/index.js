import { titleSlide, conceptSlide, typesSlide, examplesSlide } from './unidad_analisis.js';

export function buildSlidesHTML() {
  return `
    ${titleSlide()}
    ${conceptSlide()}
    ${typesSlide()}
    ${examplesSlide()}
  `;
}
