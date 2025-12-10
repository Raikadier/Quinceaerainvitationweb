# 🎨 Watercolor SVG Assets - Guía de Uso

## Descripción General

Esta colección incluye **17 variaciones SVG** estilizadas con efectos watercolor/acuarela pintada a mano:

- **10 Gold Sparkles** (estrellas de 4 puntas doradas)
- **7 Watercolor Butterflies** (mariposas con alas azules y cuerpo dorado)

### Tecnología

Cada SVG utiliza filtros avanzados para simular acuarela:

```xml
<feTurbulence>       <!-- Textura orgánica -->
<feDisplacementMap>  <!-- Efecto bleeding -->
<feGaussianBlur>     <!-- Bordes suaves -->
<radialGradient>     <!-- Degradados complejos -->
```

---

## 📦 Instalación y Uso

### Opción 1: Usar el componente completo

```tsx
import { WatercolorAssets } from './components/WatercolorAssets';

function HeroSection() {
  return (
    <div className="relative">
      {/* Tus otros elementos */}
      
      <WatercolorAssets 
        showSparkles={true} 
        showButterflies={true} 
      />
    </div>
  );
}
```

### Opción 2: Usar componentes individuales

```tsx
import { WatercolorSparkle, WatercolorButterfly } from './components/WatercolorAssets';

function CustomLayout() {
  return (
    <div className="relative">
      {/* Sparkle individual */}
      <WatercolorSparkle 
        variant={1}      // 1-10
        delay={0.5}      // segundos
        top="20%"        // posición vertical
        left="30%"       // posición horizontal
        size={18}        // píxeles
      />

      {/* Mariposa individual */}
      <WatercolorButterfly 
        variant={3}      // 1-7
        delay={1}        // segundos
        top="40%"        
        left="60%"       
        size={40}        // píxeles
        duration={5}     // duración animación
      />
    </div>
  );
}
```

---

## ✨ Gold Sparkles - 10 Variantes

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `1-10` | `1` | Forma de estrella (1=classic, 10=delicate) |
| `delay` | `number` | `0` | Delay animación en segundos |
| `top` | `string` | `'30%'` | Posición vertical (CSS) |
| `left` | `string` | `'20%'` | Posición horizontal (CSS) |
| `size` | `number` | `16` | Tamaño en píxeles (12-24 recomendado) |

### Variantes Disponibles

1. **Classic 4-pointed** - Estrella tradicional balanceada
2. **Wide pointed** - Puntas anchas, más blur
3. **Sharp narrow** - Puntas afiladas, menos blur
4. **Rounded soft** - Suave y redondeada, máximo blur
5. **Asymmetric** - Asimétrica artística
6. **Diamond-like** - Similar a diamante
7. **Elongated vertical** - Alargada verticalmente
8. **Small compact** - Compacta pequeña
9. **Wide cross-like** - Forma de cruz ancha
10. **Delicate thin** - Delgada y delicada

### Características Watercolor

- **Gradientes radiales** oro (#F4D03F → #D4AF37)
- **Blur variable** según variante (0.5px - 1.5px)
- **Opacity animada** (twinkle effect)
- **Rotación 360°** continua
- **Filtro turbulencia** para textura orgánica

---

## 🦋 Watercolor Butterflies - 7 Variantes

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `1-7` | `1` | Forma de alas (1=monarch, 7=dramatic) |
| `delay` | `number` | `0` | Delay animación en segundos |
| `top` | `string` | `'20%'` | Posición vertical (CSS) |
| `left` | `string` | `'15%'` | Posición horizontal (CSS) |
| `size` | `number` | `40` | Tamaño en píxeles (32-48 recomendado) |
| `duration` | `number` | `5` | Duración del ciclo de animación |

### Variantes Disponibles

1. **Classic monarch** - Estilo mariposa monarca clásica
2. **Wide delicate** - Alas anchas delicadas, máximo blur
3. **Compact rounded** - Compacta con alas redondeadas
4. **Elongated elegant** - Elegante y alargada
5. **Asymmetric artistic** - Asimétrica artística
6. **Small delicate** - Pequeña y delicada
7. **Dramatic spread** - Alas extendidas dramáticamente

### Características Watercolor

- **Alas azules** con gradiente royal blue (#4169E1 → #2E4A7F → #182C52)
- **Cuerpo dorado** con segmentos (#F4D03F → #D4AF37 → #B8960C)
- **Antenas doradas** con bolitas en las puntas
- **Filtro displacement** para efecto bleeding
- **4 capas de alas** (superior izq/der + inferior izq/der)
- **Patrones de manchas** azul claro (#87CEEB)
- **Animación flotante** (Y-axis + X-drift + rotation)

---

## 🎨 Paleta de Colores Usada

### Royal Blue (Alas)
```css
#4169E1  /* Highlights */
#2E4A7F  /* Mid-tone */
#182C52  /* Shadows */
#0F1B2E  /* Deep shadows */
```

### Gold (Cuerpo y Sparkles)
```css
#FFFACD  /* Bright highlights */
#F4D03F  /* Base highlight */
#FFD700  /* Mid highlight */
#D4AF37  /* Base gold */
#B8960C  /* Shadow gold */
```

### Accents
```css
#87CEEB  /* Sky blue (wing spots) */
#F0F8FF  /* Powder blue (backgrounds) */
```

---

## 🎬 Animaciones

### Sparkles
- **Twinkle**: Opacity fade in/out (0 → 1 → 0.8 → 1 → 0)
- **Pulse**: Scale (0 → 1 → 0.85 → 1 → 0)
- **Rotate**: 360° continuo
- **Duration**: 4 segundos loop infinito

### Butterflies
- **Float Y**: -15px ↔ +15px
- **Drift X**: -8px ↔ +8px
- **Rotate**: -5° ↔ +5° (wing flutter)
- **Opacity**: Pulse sutil
- **Duration**: 4.5-6 segundos (variable por variante)

---

## 💡 Tips de Uso

### Performance
```tsx
// Usa menos elementos en móvil
const isMobile = window.innerWidth < 768;

<WatercolorAssets 
  showSparkles={!isMobile} // solo desktop
  showButterflies={true}    // siempre
/>
```

### Posicionamiento responsivo
```tsx
// Usa Tailwind classes para posiciones
<div className="absolute top-[15%] left-[10%] sm:top-[20%] sm:left-[15%]">
  <WatercolorSparkle variant={1} size={16} />
</div>
```

### Layering (z-index)
```tsx
// Sparkles atrás, butterflies adelante
<div className="relative">
  <div className="absolute inset-0 z-0">
    {/* Sparkles */}
  </div>
  <div className="absolute inset-0 z-10">
    {/* Butterflies */}
  </div>
  <div className="relative z-20">
    {/* Contenido principal */}
  </div>
</div>
```

### Reducir animaciones (motion reduce)
```tsx
import { useReducedMotion } from 'motion/react';

function Component() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <WatercolorAssets 
      showSparkles={!shouldReduceMotion}
      showButterflies={!shouldReducedMotion}
    />
  );
}
```

---

## 🔧 Personalización Avanzada

### Cambiar colores

Edita los gradientes en `/components/WatercolorSparkles.tsx` o `/components/WatercolorButterflies.tsx`:

```tsx
// Ejemplo: Cambiar oro a plata
<stop offset="0%" stopColor="#C0C0C0" /> {/* Silver highlight */}
<stop offset="50%" stopColor="#A8A8A8" /> {/* Silver mid */}
<stop offset="100%" stopColor="#808080" /> {/* Silver shadow */}
```

### Ajustar intensidad watercolor

Modifica el `stdDeviation` del blur:

```tsx
<feGaussianBlur 
  stdDeviation={2.0}  // Aumentar = más watercolor
  result="blur"
/>
```

### Agregar más turbulencia

```tsx
<feTurbulence 
  baseFrequency="0.6"  // Aumentar = más textura
  numOctaves="5"       // Aumentar = más detalle
/>
```

---

## 📁 Archivos Incluidos

```
/components/
├── WatercolorSparkles.tsx      # 10 variantes de sparkles
├── WatercolorButterflies.tsx   # 7 variantes de mariposas
├── WatercolorAssets.tsx        # Componente completo integrado
└── WATERCOLOR_ASSETS_GUIDE.md  # Este archivo
```

---

## 🎯 Ejemplo Completo - Hero Section

```tsx
import { WatercolorAssets } from './components/WatercolorAssets';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#F0F8FF] to-[#FFFEF9] overflow-hidden">
      {/* Background castle (opacity 10%) */}
      <div className="absolute inset-0 opacity-10">
        <img src="/castle-watercolor.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Watercolor assets layer */}
      <WatercolorAssets showSparkles={true} showButterflies={true} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="font-['Great_Vibes'] text-6xl bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
          Isabella María
        </h1>
        <h2 className="font-['Cinzel'] text-2xl tracking-widest text-[#182C52] mt-4">
          MIS XV AÑOS
        </h2>
      </div>
    </section>
  );
}
```

---

## ✅ Checklist de Calidad

- [x] 10 variaciones únicas de sparkles
- [x] 7 variaciones únicas de butterflies
- [x] Gradientes complejos oro y azul royal
- [x] Filtros SVG watercolor (turbulence + displacement + blur)
- [x] Animaciones suaves (float, twinkle, rotate)
- [x] Bordes suaves y orgánicos
- [x] Opacidades variables para profundidad
- [x] Props personalizables (tamaño, posición, delay)
- [x] TypeScript completo
- [x] Documentación detallada

---

**Creado para:** Isabella María - XV Años  
**Tema:** Royal Blue Fairytale Luxury  
**Estilo:** Watercolor Botanical / Baroque Gold  

✨ *"Every princess deserves her fairytale moment - painted in watercolor and dusted with gold."* ✨
