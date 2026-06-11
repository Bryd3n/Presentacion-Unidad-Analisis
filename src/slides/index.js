import { titleSlide, conceptSlide, typesSlide, examplesSlide, observacionVsAnalisisSlide, falaciaEcologicaSlide, alineacionMetodologicaSlide, reduccionismoSlide, cierreSlide } from './unidad_analisis.js';

export function buildSlidesHTML() {
  return `
    ${titleSlide()}
    ${conceptSlide()}
    ${typesSlide()}
    ${examplesSlide()}
    ${observacionVsAnalisisSlide()}
    ${falaciaEcologicaSlide()}
    ${alineacionMetodologicaSlide()}
    ${reduccionismoSlide()}
    ${cierreSlide()}
  `;
}
