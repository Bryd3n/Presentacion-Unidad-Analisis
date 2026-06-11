export function titleSlide() {
  return `
    <section class="h-full w-full bg-academic-bg flex items-center justify-center relative">
      <div class="absolute top-8 left-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/LOGO_UNEG.jpg" alt="UNEG Logo" class="h-20 w-auto object-contain rounded" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo-UNEG.jpg/800px-Logo-UNEG.jpg'" />
      </div>
      <div class="w-full px-12 mx-auto py-8 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 text-left flex flex-col justify-center">
          <span class="inline-block px-4 py-2 bg-academic-primary/10 text-academic-primary rounded-full text-sm font-semibold tracking-wider mb-6 w-max">METODOLOGÍA DE LA INVESTIGACIÓN</span>
          <h1 class="text-6xl md:text-8xl font-bold text-academic-dark leading-tight mb-6 tracking-tight">
            Unidad de Análisis
          </h1>
          <p class="text-2xl text-academic-dark/70 font-light leading-relaxed mb-8 max-w-2xl">
            Comprendiendo el "qué" o el "quién" estamos estudiando en nuestra investigación.
          </p>
          <div class="h-1 w-32 bg-academic-primary rounded-full mb-12"></div>
          
          <div class="grid grid-cols-2 gap-4 text-academic-dark/80 text-lg font-medium">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-academic-accent"></div>
              Brayan Carreño
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-academic-accent"></div>
              Samuel Silva
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-academic-accent"></div>
              Jebel Ruiz
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-academic-accent"></div>
              Abraham Orta
            </div>
          </div>
        </div>
        <div class="flex-1 relative w-full">
          <div class="absolute inset-0 bg-academic-primary/5 rounded-3xl transform rotate-3"></div>
          <img src="/Presentacion-Unidad-Analisis/academic/academic_magnifying_glass_1781116518330.png" alt="Magnifying Glass" class="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[500px] border border-white/50" />
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
            <img src="/Presentacion-Unidad-Analisis/academic/types_of_units_1781116528275.png" alt="Types of Units" class="rounded-3xl shadow-xl border border-white/50 w-full object-cover max-h-[500px]" />
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
            <img src="/Presentacion-Unidad-Analisis/academic/examples_chart_1781116543346.png" alt="Examples" class="rounded-3xl shadow-xl w-full object-cover max-h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  `;
}

export function observacionVsAnalisisSlide() {
  return `
    <section class="h-full w-full bg-white flex flex-col justify-center">
      <div class="w-full px-12 mx-auto">
        <div class="mb-12 text-left">
          <h2 class="text-5xl md:text-6xl font-bold text-academic-dark mb-4 tracking-tight">Observación vs. Análisis</h2>
          <p class="text-2xl text-academic-primary font-medium">Diferenciando la fuente del objeto de estudio</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 items-stretch">
          <div class="flex-1 bg-academic-bg p-8 rounded-2xl border-t-4 border-academic-primary shadow-sm flex flex-col">
            <div class="w-12 h-12 bg-academic-primary/20 rounded-full flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-academic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 class="text-3xl font-bold text-academic-dark mb-4 text-left">Unidad de Observación</h3>
            <p class="text-xl text-academic-dark/70 text-left leading-relaxed">
              Es el sujeto u objeto del cual <strong class="text-academic-primary">se obtiene la información</strong> empírica. Es la fuente directa de los datos en el momento de la recolección.
            </p>
          </div>
          
          <div class="flex items-center justify-center px-4">
            <div class="w-12 h-12 rounded-full bg-academic-accent/20 flex items-center justify-center text-academic-accent font-bold">VS</div>
          </div>
          
          <div class="flex-1 bg-academic-bg p-8 rounded-2xl border-t-4 border-academic-accent shadow-sm flex flex-col">
            <div class="w-12 h-12 bg-academic-accent/20 rounded-full flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-academic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-3xl font-bold text-academic-dark mb-4 text-left">Unidad de Análisis</h3>
            <p class="text-xl text-academic-dark/70 text-left leading-relaxed">
              Es el ente sobre el cual <strong class="text-academic-accent">se hacen las inferencias</strong> o se sacan las conclusiones al finalizar la investigación.
            </p>
          </div>
        </div>
        
        <div class="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200 text-left">
          <p class="text-lg text-academic-dark/80"><strong class="text-academic-dark">Ejemplo:</strong> Si estudiamos la deserción escolar en secundaria (U. Análisis: <em>Instituciones o Sistema Educativo</em>), podríamos entrevistar a profesores o padres de familia (U. Observación: <em>Individuos</em>).</p>
        </div>
      </div>
    </section>
  `;
}

export function falaciaEcologicaSlide() {
  return `
    <section class="h-full w-full bg-academic-bg flex flex-col justify-center">
      <div class="w-full px-12 mx-auto">
        <div class="mb-10 text-left">
          <h2 class="text-5xl md:text-6xl font-bold text-academic-dark mb-4 tracking-tight">Falacia Ecológica</h2>
          <p class="text-2xl text-academic-accent font-medium">El peligro de la generalización cruzada</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="flex-[3] text-left">
            <div class="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500 mb-6">
              <p class="text-2xl text-academic-dark/80 leading-relaxed">
                La <strong class="text-red-600">falacia ecológica</strong> ocurre cuando un investigador saca conclusiones sobre el comportamiento de <strong class="text-academic-primary">individuos</strong> basándose únicamente en datos agregados de <strong class="text-academic-accent">grupos</strong>.
              </p>
            </div>
            
            <h3 class="text-2xl font-bold text-academic-dark mb-4">¿Por qué es un error?</h3>
            <ul class="space-y-4 text-xl text-academic-dark/70 list-disc pl-6">
              <li>Asume que todos los miembros de un grupo comparten las mismas características que el promedio del grupo.</li>
              <li>Ignora la variabilidad y la heterogeneidad interna dentro de la unidad agrupada.</li>
              <li>Resulta de confundir la unidad de análisis (ej. regiones) con la unidad a la que se le aplican las conclusiones (ej. personas).</li>
            </ul>
          </div>
          
          <div class="flex-[2]">
            <div class="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center">
              <div class="w-full flex justify-between items-center px-4 mb-4">
                <div class="text-center">
                  <div class="text-4xl mb-2">📊</div>
                  <div class="font-bold text-academic-dark">Datos Grupales</div>
                </div>
                <div class="text-red-500 font-bold text-2xl">≠</div>
                <div class="text-center">
                  <div class="text-4xl mb-2">🧑</div>
                  <div class="font-bold text-academic-dark">Comportamiento Individual</div>
                </div>
              </div>
              <div class="bg-red-50 w-full p-4 rounded-xl border border-red-100">
                <p class="text-sm text-red-800 italic">Ejemplo clásico: Concluir que los inmigrantes son más propensos a cometer crímenes porque las ciudades con más inmigrantes tienen mayores tasas de criminalidad (ignorando otros factores de la ciudad).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
