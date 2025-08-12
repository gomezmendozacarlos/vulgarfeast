# Vulgar Feast - Festival Website Specifications

## 📋 Información General del Evento

**Nombre:** Vulgar Feast  
**Tipo:** Festival de música (10mo aniversario de revista electrónica)  
**Fecha:** 18 de octubre de 2025  
**Hora:** 7:00 PM  
**Entrada:** Libre  
**Edad:** Todas las edades (menores acompañados)  
**Ubicación:** Epigmenio González 54  
**Géneros:** Metal, Punk, Hardcore  
**Bandas:** 6 bandas (sin horarios específicos)  

## 🎨 Branding & Estilo Visual

### Paleta de Colores
- **Principal:** Negro (#000000)
- **Auxiliar:** #141414
- **Acento moderado:** Rojo
- **Links específicos:** #39d52d (usar con moderación )

### Estilo General
- **Aesthetic:** Película B de terror
- **Legibilidad:** Mantener siempre clara
- **Efectos permitidos:**
  - Glitch effects
  - Sangre goteando (animaciones sutiles)
  - Texturas grunge

### Assets
- **Logo:** PNG de la revista (integrar en diseño)
- **Flyer:** Horizontal (debe ser responsive - escalable)

## 💻 Stack Tecnológico

- **HTML** (Semántico y accesible)
- **JavaScript** (Vanilla)
- **Tailwind CSS** (Framework)
- **Diseño:** Mobile-first approach

## 📱 Estructura y Secciones

### 1. Hero Section (Super)
- **Contenido principal:**
  - Título: "Vulgar Feast"
  - Subtítulo: "10mo Aniversario [Nombre Revista]"
  - Fecha y detalles básicos
- **CTA:** "Ver Lineup"
- **Fondo:** Imagen o video (preparar ambas opciones)
- **Efectos:** Horror movie style

### 2. Lineup
- **6 bandas**
- **Sin horarios**
- **Presentación visual acorde al tema terror**

### 3. Flyer Oficial
- **Imagen horizontal**
- **Responsive:** Escala según viewport
- **Mobile-first approach**

### 4. Datos del Evento
- **Fecha:** 18 octubre 2025
- **Hora:** 7:00 PM
- **Entrada:** Libre
- **Edad:** Todas las edades (menores acompañados)
- **Ubicación:** Epigmenio González 54

### 5. Mapa del Venue
- **Google Maps embebido**
- **Dirección:** Epigmenio González 54
- **Estilizado con tema horror si es posible**

### 6. Redes Sociales
- **Íconos con links directos**
- **No feeds integrados**
- **Efectos hover con glitch**

## 🎭 Interacciones y Efectos

### Navegación
- **Mobile:** Hamburger menu
- **Desktop:** Navegación horizontal
- **Header:** Sticky con efectos horror
- **Scroll:** Efectos adicionales de horror

### Efectos de Hover
- **Glitch effects** en elementos interactivos
- **Color transitions** usando la paleta establecida
- **Subtle horror animations**

### Animaciones Globales
- **Sangre goteando** (sutiles, no invasivas)
- **Transiciones:** Efectos de TV vieja entre secciones
- **Loading states:** Con temática horror

### Efectos de Scroll
- **Parallax** sutil en hero
- **Reveal animations** con estilo terror
- **Sticky header** con transformaciones horror

## 📐 Responsive Design

### Breakpoints (Tailwind standard)
- **Mobile:** < 640px (prioridad)
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile-First Considerations
- **Navegación:** Hamburger menu obligatorio
- **Contenido:** Priorizar legibilidad
- **Efectos:** Optimizar para touch devices
- **Performance:** Lightweight animations en mobile

## 🔧 Funcionalidades Técnicas

### JavaScript Features
- **Smooth scroll** between sections
- **Hamburger menu** functionality
- **Glitch effects** programming
- **Animation triggers** on scroll
- **Google Maps** integration

### Performance
- **Lazy loading** para imágenes
- **Optimización** para mobile
- **Fallbacks** para efectos pesados

### SEO Optimization
- **Meta tags** completos (title, description, keywords)
- **Open Graph** tags para redes sociales
- **Twitter Cards** para mejor sharing
- **Schema markup** para eventos (JSON-LD)
- **Semantic HTML** con tags apropiados
- **URL structure** limpia y descriptiva
- **Image optimization** con alt texts descriptivos
- **Loading speed** optimizado
- **Mobile-friendly** validation
- **Sitemap** generation ready

### Accessibility
- **Alt texts** descriptivos
- **Keyboard navigation** funcional
- **Contrast ratios** apropiados (mantener legibilidad)
- **Screen reader** compatibility

## 🔍 SEO Strategy

### Meta Information
- **Title:** "Vulgar Feast 2025 - Festival Metal/Punk/Hardcore - 18 Oct - Entrada Libre"
- **Description:** "Festival gratuito de metal, punk y hardcore. 10mo aniversario. 18 octubre 2025, 7pm. Epigmenio González 54. Todas las edades."
- **Keywords:** "festival metal, punk hardcore, Guadalajara, entrada libre, concierto gratuito, música metal"

### Structured Data
- **Event Schema** (JSON-LD)
  - Fecha, hora, ubicación
  - Precio (gratuito)
  - Organizador
  - Géneros musicales
  - Restricciones de edad

### Social Media Optimization
- **Open Graph** para Facebook sharing
- **Twitter Cards** para mejor presentación
- **WhatsApp** preview optimization
- **Images** optimizadas para sharing (1200x630px)

## 📝 Notas Importantes

- **Sin venta de tickets** (entrada libre)
- **Branding de la revista** debe estar presente pero no dominar
- **Estilo horror** debe ser evocativo pero no perturbador
- **Legibilidad** nunca debe comprometerse por el estilo
- **Mobile performance** es prioridad
- **Google Maps** debe integrarse seamlessly con el diseño horror

## 🚀 Orden de Desarrollo Sugerido

1. **Estructura HTML** semántica
2. **Estilos base** con Tailwind
3. **Navegación mobile** (hamburger)
4. **Hero section** con efectos
5. **Secciones de contenido** una por una
6. **Efectos JavaScript** progresivamente
7. **Optimización** y testing responsive
8. **Polish final** y efectos horror avanzados

## 📄 Plan: Página “acercade” para patrocinadores (media kit web)

- **Objetivo**: Centralizar en una sola página (scroll) toda la información para patrocinadores sobre la marca, el festival y el alcance logrado en ediciones anteriores. Esta página sustituirá el correo que antes se enviaba por Mailchimp y funcionará como el media kit web.
- **Idioma**: Español.
- **Contacto**: No se requiere formulario ni llamadas a la acción de contacto.
- **Reutilización**: Reutilizar `header`/`footer` y estilos existentes, adaptando el menú con anclas internas propias de esta página. Reutilizar `main.js` (smooth scroll, reveal), ya que es seguro si no existen elementos del lineup/modal en esta página.
- **Assets destacados**: `main/assets/logo.png` y `main/assets/logoletras.png`.

### Estructura de la página (una sola página con scroll)
Archivo destino: `main/acercade.html` (no creado aún)

Secciones y anclas sugeridas en el `nav` de esta página:
- `Hero` → `#hero`
- `Acerca de Vulgar Topic` → `#vulgartopic`
- `Acerca de Vulgar Feast` → `#vulgarfeast`
- `Alcance digital` → `#alcance`
- `Ediciones anteriores` → `#ediciones`

#### 1) Hero (`#hero`)
- Propósito: Encabezar la página para patrocinadores con branding claro.
- Contenido:
  - Título: “Acerca de Vulgar Feast” o “Vulgar Feast para patrocinadores”.
  - Subtítulo: “La plataforma independiente de metal/punk/hardcore con alcance real”.
  - Imagen: usar `logoletras.png` y/o `logo.png` con composición simple. Fondo con el mismo tratamiento visual del sitio (horror sutil + gradientes).
- Notas de diseño:
  - Mantener una jerarquía clara. Buen contraste y legibilidad.
  - Incluir animación `reveal` y soporte mobile-first.

#### 2) Acerca de Vulgar Topic (`#vulgartopic`)
- Propósito: Explicar la marca madre (revista) y su credibilidad.
- Contenido sugerido:
  - Breve historia (año de origen, línea editorial, audiencia afín).
  - Actividad: coberturas, reseñas, entrevistas, curaduría.
  - Señalar independencia y comunidad.
- Visual: logotipo `logo.png` pequeño y tipografía consistente.

#### 3) Acerca de Vulgar Feast (`#vulgarfeast`)
- Propósito: Presentar el festival.
- Contenido sugerido:
  - Origen del festival y propósito (celebra 10º aniversario, escena local/foránea, entrada libre, todas las edades).
  - Propuesta de valor para marcas: cercanía con nichos altamente comprometidos, autenticidad, experiencia real.
  - Elementos clave: fecha de la próxima edición, venue y contexto cultural.

#### 4) Alcance digital (`#alcance`)
- Propósito: Mostrar cifras y métricas clave (las cifras serán proporcionadas por ustedes).
- Bloques sugeridos (cards o estadísticas):
  - Asistentes por edición reciente (si aplica para contexto digital/físico).
  - Impresiones/alcance en redes (Facebook/Instagram/YouTube/Spotify, si aplica).
  - Reproducciones de video (trailers, aftermovies, lives).
  - Seguidores totales por red y crecimiento interanual.
  - Alcance geográfico (p. ej., México/LatAm/US) y dispositivos.
- Gráficos simples (barras o líneas) opcionales con estilos mínimos; priorizar legibilidad.
- Notas:
  - Colocar notas “Fuente: [red/plataforma]” cuando corresponda.
  - Evitar paredes de texto; priorizar datos claros, comparables y verificables.

#### 5) Ediciones anteriores (`#ediciones`)
- Propósito: Evidenciar consistencia e historial.
- Formato sugerido: línea de tiempo o grilla por año/edición con mini-datos.
  - Año/edición, highlights de cartel, asistencia estimada, principales impactos digitales.
  - Fotografías selectas o thumbnails de videos (enlaces a YouTube si existen).
- Mantener carga ligera (lazy loading en imágenes).

### Navegación específica de esta página
- Reutilizar el `header` y estilo, pero cambiar los links del menú para que apunten a las anclas internas de esta página (`#hero`, `#vulgartopic`, `#vulgarfeast`, `#alcance`, `#ediciones`).
- No agregar link hacia `acercade` en el menú de `index.html` (petición explícita).
- `main.js` ya implementa smooth scroll para anclas (`a[href^="#"]`) y toggling del menú mobile.

### SEO/OG para `acercade.html`
- Título: `Vulgar Feast | Acerca de (Patrocinadores)`
- Descripción: `Conoce la marca, el festival y nuestro alcance en ediciones anteriores. Media kit web para patrocinadores.`
- Open Graph:
  - `og:type`: `website`
  - `og:title`: mismo que el `title`
  - `og:description`: igual a la descripción
  - `og:url`: `https://vulgarfeast.com/acercade`
  - `og:image`: asset 1200×630 específico (p. ej. `https://vulgarfeast.com/assets/og-acercade.png`) con logo/logoletras
- Twitter Cards:
  - `twitter:card`: `summary_large_image`
  - `twitter:title` y `twitter:description` alineados a OG
  - `twitter:image`: misma imagen OG
- JSON-LD:
  - Opcional: `Organization` para Vulgar Topic (nombre, URL) y breve mención a `Event` solo si relevante.
- Importante: No incluir `fb:app_id` (ver tareas).

### Accesibilidad y performance
- Alt text descriptivo en logos e imágenes de ediciones anteriores.
- Lazy loading para galerías.
- Mantener contraste alto y tamaños de fuente legibles.

### Tareas pendientes (sin ejecutar todavía)
- Crear `main/acercade.html` siguiendo la estructura anterior.
- Adaptar el `nav` de esta página con anclas internas; no tocar `index.html`.
- Generar imagen OG específica para `acercade` (1200×630) usando `logo.png`/`logoletras.png`.
- Eliminar `fb:app_id` de las páginas (la etiqueta no es necesaria y Facebook requiere un App ID numérico real; no usar placeholder ni nombres de usuario).
- Verificar que `og:image` y `twitter:image` usen URLs absolutas en producción para scraping correcto.
- Rellenar cifras reales de “Alcance digital” y “Ediciones anteriores”.

### Notas
- Esta página funcionará como media kit web. No se generará PDF adicional salvo que se solicite después.
- No se mostrará un CTA de contacto por ahora. Se puede añadir más adelante si cambia el requerimiento.

## 📄 Contenido fuente y plan de acción para `acercade.html`

Esta sección documenta el plan para la nueva página “acercade” (media kit web) usando el contenido recibido en `acercade copy.txt` y los flyers `2022.jpg`, `2023.jpg`, `2024.jpg`. No se han creado archivos aún.

### Resumen de objetivos
- Página de una sola vista (scroll) enfocada en patrocinadores.
- Sustituye el correo de Mailchimp y funcionará como media kit web.
- Reutiliza `header`/`footer` y estilos; `main.js` para smooth scroll y reveals.
- Sin CTA de contacto por ahora. No enlazar desde `index.html`.

### Secciones y copy (mapeo directo del texto)
- Hero (`#hero`)
  - Visual: `logoletras.png` y/o `logo.png` (branding claro). Fondo coherente con el tema del sitio.
  - Título sugerido: “Vulgar Feast — Acerca de (Patrocinadores)”.
  - Subtítulo: “Plataforma independiente de metal/punk/hardcore con alcance real”.
- Acerca de Vulgar Topic (`#vulgartopic`)
  - Base del copy: L3–L12 del archivo fuente.
  - Puntos clave: revista digital desde 2015, foco en escena tapatía y nacional, +9k seguidores, podcast Tópico Vulgar en plataformas.
- Acerca de Vulgar Feast (`#vulgarfeast`)
  - Base del copy: L15–L29.
  - Puntos clave: actividad insignia; gratuito; sede Anexo Independencia; sold out 2024 (300 asistentes); cuarta edición 18/oct/2025; actividades de comunidad (meeting); primera participación de talento extranjero (2 bandas de EUA).
- Alcance digital (`#alcance`)
  - Base del copy: L31–L34.
  - Métricas a destacar (como cifras iniciales):
    - +500,000 impresiones y cientos de interacciones en 2024 (publicaciones y aliados).
    - Asistencia presencial 2024: 300 personas.
    - Audiencia joven 18–35.
    - Amplificación con podcast (episodios dedicados, entrevistas, cientos de reproducciones).
    - UGC con hashtags #VulgarFeast y #VulgarTopic9X.
    - Proyección 2025: +10–20% de crecimiento en alcance digital.
- Ediciones anteriores (`#ediciones`)
  - Base del copy: L37–L44.
  - Presentación recomendada: grilla o timeline con 3 bloques (2022, 2023, 2024) y flyer por año.
  - Datos por año:
    - 2024: 19 de oct, Anexo Independencia, lineup (Día de Cambio, Shemhamforash, Atrox, Öutlaw, Evercloud, Frank Metal Máscara), asistencia: 300 (sold out). Imagen: `main/assets/2024.jpg`.
    - 2023: 21 de oct, Anexo Independencia, lineup (Aetherevm, Flores y Fuego, Demonic Being, Mutanf From The Nebula, Speedfreak, Infection), asistencia: 300 (sold out). Imagen: `main/assets/2023.jpg`.
    - 2022: 4 de nov, Anexo Independencia, lineup (Sarcoma, Visceral Abnormality, Mark Sinestra, Calles de Odio, The Graveyard Shift, Frank Metal Máscara), asistencia: 210. Imagen: `main/assets/2022.jpg`.

### Navegación y reutilización
- Header reutilizado, pero en esta página sus links apuntarán a: `#hero`, `#vulgartopic`, `#vulgarfeast`, `#alcance`, `#ediciones`.
- No agregar enlace hacia `acercade` en el menú de `index.html`.
- `main.js` es compatible (smooth scroll, reveal). No incluir el modal de bandas aquí.

### SEO/OG sugerido para `acercade.html`
- Title: `Vulgar Feast | Acerca de (Patrocinadores)`
- Description: `Conoce la marca, el festival y nuestro alcance en ediciones anteriores. Media kit web para patrocinadores.`
- Open Graph:
  - `og:type`: `website`
  - `og:title`: igual a Title
  - `og:description`: igual a Description
  - `og:url`: `https://vulgarfeast.com/acercade`
  - `og:image`: imagen 1200×630 con `logo.png`/`logoletras.png` (usar URL absoluta en producción)
- Twitter Cards: `summary_large_image` con título/descr/imagen equivalentes.
- JSON-LD: opcional `Organization` (Vulgar Topic) y mención a `Event` si aporta valor.

### Assets y accesibilidad
- Flyers: `main/assets/2022.jpg`, `main/assets/2023.jpg`, `main/assets/2024.jpg` (lazy load recomendado, `alt` descriptivo por año/edición).
- Logos: `main/assets/logo.png`, `main/assets/logoletras.png`.
- Mantener contraste alto, tipografía legible, y navegación por teclado.

### Tareas (pendientes, sin ejecutar)
- Crear `main/acercade.html` con las 5 secciones y navegación interna.
- Reutilizar header/footer y `main.js`; eliminar dependencias del modal de bandas en esta página.
- Cargar y referenciar los flyers por año con lazy loading y `alt` adecuados.
- Ajustar métricas de alcance digital con cifras finales si es necesario.
- Configurar OG/Twitter con URLs absolutas.
- Eliminar `fb:app_id` de las páginas (Facebook requiere ID numérico; no usar placeholders); mantener `og:url` correcto.

### Notas de copy (sugerencias menores)
- Uniformar nombres propios: “Vulgar Topic”, “Vulgar Feast”, “Anexo Independencia”.
- “estadunidenses” → “estadounidenses”.
- Revisar ortografía y acentos finales tras maquetación (ej. “vinculación”, “edición”).