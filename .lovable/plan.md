

## Plan: Landing Page de Jarvis Connect

### Resumen
Construir una landing page profesional con estilo limpio (Cloud White), tipografía Sora/Manrope, layout split-screen, con secciones de Hero, Características, Precios y Contacto.

### Dirección creativa
- **Colores**: Fondo #fafbfc, superficies #e8ecf1, texto secundario #94a3b8, acento principal #3b82f6
- **Tipografía**: Sora para headings (bold, tracking tight), Manrope para body (regular/medium)
- **Estilo**: Limpio, mucho whitespace, bordes redondeados (xl), sombras sutiles, transiciones hover suaves
- **Layout**: Split-screen hero, secciones full-width apiladas

### Estructura de la página

1. **Navbar** — Logo + links ancla (Características, Precios, Contacto) + CTA button. Sticky con backdrop blur.

2. **Hero (Split-screen)** — Lado izquierdo: headline, subtítulo, dos botones (CTA primario + secundario). Lado derecho: ilustración/mockup abstracto con gradiente azul. Animación fade-in al cargar.

3. **Características** — Título centrado + grid 3 columnas con iconos (Lucide), título y descripción por cada feature. Cards con hover lift effect.

4. **Precios** — 3 planes en cards (Starter, Pro, Enterprise). Plan destacado con borde azul y badge "Popular". Incluye lista de features con checks.

5. **Contacto** — Split-screen: lado izquierdo con texto e info de contacto, lado derecho con formulario (nombre, email, mensaje, botón enviar).

6. **Footer** — Links, copyright, redes sociales.

### Mejoras UX/UI incluidas
- Smooth scroll para navegación ancla
- Animaciones de entrada con Intersection Observer
- Hover states en cards y botones
- Responsive mobile-first (hamburger menu en móvil)
- CTA flotante visible en todo momento
- Contraste y jerarquía tipográfica clara

### Archivos a crear/modificar
- `src/pages/Index.tsx` — Página principal con todas las secciones
- `src/index.css` — Importar fuentes Sora y Manrope, variables de color custom
- Componentes auxiliares si es necesario para mantener el código limpio

### Tecnología
- React + Tailwind CSS (ya disponible)
- Lucide React para iconos
- Google Fonts (Sora + Manrope)

