export function titleSlide() {
  return `
    <section class="h-full w-full bg-academic-bg flex items-center justify-center">
      <div class="w-full px-12 mx-auto py-8 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 text-left">
          <span class="inline-block px-4 py-2 bg-academic-primary/10 text-academic-primary rounded-full text-sm font-semibold tracking-wider mb-6">METODOLOGÍA DE LA INVESTIGACIÓN</span>
          <h1 class="text-6xl md:text-8xl font-bold text-academic-dark leading-tight mb-6 tracking-tight">
            Unidad de Análisis
          </h1>
          <p class="text-2xl text-academic-dark/70 font-light leading-relaxed mb-8 max-w-2xl">
            Comprendiendo el "qué" o el "quién" estamos estudiando en nuestra investigación.
          </p>
          <div class="h-1 w-32 bg-academic-primary rounded-full"></div>
        </div>
        <div class="flex-1 relative w-full">
          <div class="absolute inset-0 bg-academic-primary/5 rounded-3xl transform rotate-3"></div>
          <img src="./academic/academic_magnifying_glass_1781116518330.png" alt="Magnifying Glass" class="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[500px] border border-white/50" />
        </div>
      </div>
    </section>
  `;
}

export function conceptSlide() {
  return `
    <section class="h-full w-full bg-white flex flex-col justify-center">
      <div class="w-full px-12 mx-auto">
        <div class="mb-12 text-left">
          <h2 class="text-5xl md:text-6xl font-bold text-academic-dark mb-4 tracking-tight">¿Qué es una Unidad de Análisis?</h2>
          <p class="text-2xl text-academic-primary font-medium">El bloque fundamental de la investigación</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-12 items-stretch">
          <div class="flex-[3] bg-academic-bg p-10 rounded-3xl border border-academic-primary/10 relative overflow-hidden flex flex-col justify-center">
            <div class="absolute top-0 left-0 w-3 h-full bg-academic-primary"></div>
            <p class="text-3xl text-academic-dark/80 leading-relaxed font-light mb-8 text-left">
              Es el <strong class="text-academic-primary font-semibold">ente principal</strong> que se está analizando en un estudio científico. Es el "quién" o el "qué" del que el investigador recolecta datos.
            </p>
            <p class="text-2xl text-academic-dark/60 leading-relaxed text-left">
              Definir correctamente la unidad de análisis determina qué datos se recogerán, cómo se medirán y a qué nivel se podrán generalizar las conclusiones.
            </p>
          </div>
          
          <div class="flex-[2] flex flex-col gap-6 justify-center">
            <div class="bg-academic-primary/5 p-6 rounded-2xl flex items-center gap-6 border border-academic-primary/10">
              <div class="w-14 h-14 rounded-full bg-academic-primary/20 flex items-center justify-center text-academic-primary font-bold text-2xl shrink-0">1</div>
              <p class="text-academic-dark font-medium text-left text-xl">Determina la recolección</p>
            </div>
            <div class="bg-academic-accent/5 p-6 rounded-2xl flex items-center gap-6 border border-academic-accent/10">
              <div class="w-14 h-14 rounded-full bg-academic-accent/20 flex items-center justify-center text-academic-accent font-bold text-2xl shrink-0">2</div>
              <p class="text-academic-dark font-medium text-left text-xl">Guía el análisis de datos</p>
            </div>
            <div class="bg-academic-cyan/5 p-6 rounded-2xl flex items-center gap-6 border border-academic-cyan/10">
              <div class="w-14 h-14 rounded-full bg-academic-cyan/20 flex items-center justify-center text-academic-cyan font-bold text-2xl shrink-0">3</div>
              <p class="text-academic-dark font-medium text-left text-xl">Define las conclusiones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function typesSlide() {
  return `
    <section class="h-full w-full bg-academic-bg flex flex-col justify-center">
      <div class="w-full px-8 mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-5xl md:text-6xl font-bold text-academic-dark mb-2 tracking-tight">Tipos de Unidades</h2>
          <p class="text-2xl text-academic-primary font-medium">Clasificación común en ciencias sociales</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div class="flex-[2]">
            <img src="./academic/types_of_units_1781116528275.png" alt="Types of Units" class="rounded-3xl shadow-xl border border-white/50 w-full object-cover max-h-[500px]" />
          </div>
          
          <div class="flex-[3] grid grid-cols-2 gap-4 text-left">
            <div class="p-5 bg-white rounded-xl shadow-sm border-l-4 border-academic-primary">
              <h3 class="font-bold text-academic-dark text-xl">1. Individuos</h3>
              <p class="text-academic-dark/70 mt-1">Personas individuales (ej. estudiantes, votantes).</p>
            </div>
            <div class="p-5 bg-white rounded-xl shadow-sm border-l-4 border-academic-accent">
              <h3 class="font-bold text-academic-dark text-xl">2. Grupos</h3>
              <p class="text-academic-dark/70 mt-1">Conjuntos de individuos (ej. familias, equipos).</p>
            </div>
            <div class="p-5 bg-white rounded-xl shadow-sm border-l-4 border-academic-cyan">
              <h3 class="font-bold text-academic-dark text-xl">3. Artefactos</h3>
              <p class="text-academic-dark/70 mt-1">Objetos creados por humanos (ej. noticias).</p>
            </div>
            <div class="p-5 bg-white rounded-xl shadow-sm border-l-4 border-gray-400">
              <h3 class="font-bold text-academic-dark text-xl">4. Geográficas</h3>
              <p class="text-academic-dark/70 mt-1">Áreas espaciales (ej. ciudades, barrios).</p>
            </div>
            <div class="p-5 bg-white rounded-xl shadow-sm border-l-4 border-gray-600 col-span-2">
              <h3 class="font-bold text-academic-dark text-xl">5. Interacciones Sociales</h3>
              <p class="text-academic-dark/70 mt-1">Eventos relacionales (ej. divorcios, huelgas, reuniones).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function examplesSlide() {
  return `
    <section class="h-full w-full bg-white flex flex-col justify-center">
      <div class="w-full px-12 mx-auto text-left">
        <h2 class="text-5xl font-bold text-academic-dark mb-10 tracking-tight">Ejemplos Prácticos</h2>
        
        <div class="flex flex-col md:flex-row gap-12">
          <div class="flex-[3] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-academic-bg p-8 rounded-2xl border border-academic-primary/10">
              <div class="text-sm font-bold text-academic-primary uppercase tracking-wider mb-2">Individuos</div>
              <h4 class="text-2xl font-bold text-academic-dark mb-3">"Nivel de estrés en enfermeros de urgencias"</h4>
              <p class="text-academic-dark/70 text-lg">Se evalúa a cada enfermero de forma particular.</p>
            </div>
            
            <div class="bg-academic-bg p-8 rounded-2xl border border-academic-primary/10">
              <div class="text-sm font-bold text-academic-primary uppercase tracking-wider mb-2">Grupos</div>
              <h4 class="text-2xl font-bold text-academic-dark mb-3">"Productividad por departamento en empresas IT"</h4>
              <p class="text-academic-dark/70 text-lg">La métrica es del equipo, no de cada persona.</p>
            </div>
            
            <div class="bg-academic-bg p-8 rounded-2xl border border-academic-primary/10">
              <div class="text-sm font-bold text-academic-primary uppercase tracking-wider mb-2">U. Geográficas</div>
              <h4 class="text-2xl font-bold text-academic-dark mb-3">"Tasa de criminalidad por provincia"</h4>
              <p class="text-academic-dark/70 text-lg">El dato analizado corresponde a la región geográfica.</p>
            </div>
            
            <div class="bg-academic-bg p-8 rounded-2xl border border-academic-primary/10">
              <div class="text-sm font-bold text-academic-primary uppercase tracking-wider mb-2">Artefactos</div>
              <h4 class="text-2xl font-bold text-academic-dark mb-3">"Análisis de sesgo en artículos de prensa"</h4>
              <p class="text-academic-dark/70 text-lg">Cada noticia o artículo es una unidad de análisis.</p>
            </div>
          </div>
          <div class="flex-[2] flex items-center justify-center">
            <img src="./academic/examples_chart_1781116543346.png" alt="Examples" class="rounded-3xl shadow-xl w-full object-cover max-h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  `;
}

