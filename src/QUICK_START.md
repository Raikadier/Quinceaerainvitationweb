# ⚡ Quick Start Guide - Watercolor Assets

## 🎯 En 60 Segundos

### Opción 1: Ver la Galería Completa ⭐ RECOMENDADO

```tsx
// En tu archivo principal (e.g., App.tsx)
import { FullShowcase } from './components/FullShowcase';

export default function App() {
  return <FullShowcase />;
}
```

**¡Listo!** Esto te mostrará:
- ✅ Galería de las 17 variaciones
- ✅ 7 ejemplos de uso
- ✅ Navegación entre vistas

---

### Opción 2: Agregar a tu Invitación Existente

```tsx
import { WatercolorAssets } from './components/WatercolorAssets';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Tus secciones existentes */}
      <section className="relative min-h-screen">
        
        {/* Agrega esta línea: */}
        <WatercolorAssets showSparkles={true} showButterflies={true} />
        
        <h1>Isabella María</h1>
        {/* Resto de tu contenido */}
      </section>
    </div>
  );
}
```

---

### Opción 3: Toggle entre Invitación y Galería

```tsx
import { ShowcaseToggle } from './components/ShowcaseToggle';

export default function App() {
  return (
    <ShowcaseToggle>
      {/* Tu invitación completa aquí */}
      <YourInvitationComponent />
    </ShowcaseToggle>
  );
}
```

Aparecerá un botón en la esquina superior derecha para cambiar vistas.

---

## 🎨 Personalización Rápida

### Solo Sparkles (sin mariposas)

```tsx
<WatercolorAssets showSparkles={true} showButterflies={false} />
```

### Solo Mariposas (sin sparkles)

```tsx
<WatercolorAssets showSparkles={false} showButterflies={true} />
```

### Sparkle Individual

```tsx
import { WatercolorSparkle } from './components/WatercolorSparkles';

<WatercolorSparkle 
  variant={5}        // 1-10 (prueba diferentes!)
  delay={0}          // segundos antes de iniciar
  top="30%"          // posición vertical
  left="50%"         // posición horizontal
  size={20}          // tamaño en píxeles
/>
```

### Mariposa Individual

```tsx
import { WatercolorButterfly } from './components/WatercolorButterflies';

<WatercolorButterfly 
  variant={3}        // 1-7 (prueba diferentes!)
  delay={0}
  top="40%"
  left="60%"
  size={40}          // tamaño en píxeles
  duration={5}       // segundos por ciclo de animación
/>
```

---

## 📱 Uso Responsivo

### Ocultar en móvil para mejor performance

```tsx
const isMobile = window.innerWidth < 768;

<WatercolorAssets 
  showSparkles={!isMobile}    // solo en desktop
  showButterflies={true}       // siempre visible
/>
```

### Con hook personalizado

```tsx
import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

function App() {
  const isMobile = useIsMobile();
  
  return (
    <WatercolorAssets 
      showSparkles={!isMobile} 
      showButterflies={true} 
    />
  );
}
```

---

## 🎯 Ejemplos Listos para Usar

Importa y usa cualquiera de estos:

```tsx
import { 
  HeroWithWatercolor,        // Hero section completo
  DecoratedCard,             // Tarjeta con sparkles en esquinas
  ButterflyPath,             // Mariposas en línea curva
  SparkleConstellation,      // Constelación de sparkles
  AnimatedBorder,            // Border animado
  ButterflyCircle,           // Círculo de mariposas
  TimelineWithSparkles       // Timeline con sparkles
} from './components/WatercolorExamples';

// Usa directamente:
<HeroWithWatercolor />
```

---

## 🔍 Variantes Disponibles

### Sparkles (10 variantes)

| Variante | Estilo | Mejor para |
|----------|--------|------------|
| 1 | Classic balanced | Todo uso |
| 2 | Wide with blur | Fondos suaves |
| 3 | Sharp & crisp | Detalles precisos |
| 4 | Soft rounded | Ambiente romántico |
| 5 | Asymmetric | Look artístico |
| 6 | Diamond-like | Elementos elegantes |
| 7 | Elongated | Bordes verticales |
| 8 | Compact small | Detalles pequeños |
| 9 | Wide cross | Puntos focales |
| 10 | Delicate thin | Accentos sutiles |

### Mariposas (7 variantes)

| Variante | Estilo | Tamaño Ideal |
|----------|--------|--------------|
| 1 | Classic monarch | 38-42px |
| 2 | Wide delicate | 34-38px |
| 3 | Compact round | 30-34px |
| 4 | Elegant long | 40-46px |
| 5 | Asymmetric | 36-40px |
| 6 | Small delicate | 32-36px |
| 7 | Dramatic spread | 40-48px |

---

## 🎨 Colores Usados

```css
/* Royal Blue (alas de mariposas) */
#4169E1  /* Claro */
#2E4A7F  /* Medio */
#182C52  /* Oscuro */

/* Gold (sparkles y cuerpo) */
#F4D03F  /* Highlight */
#D4AF37  /* Base */
#B8960C  /* Shadow */

/* Backgrounds */
#F0F8FF  /* Powder blue */
#FFFEF9  /* Ivory cream */
```

---

## 📚 Documentación Completa

- **Guía Técnica:** `/components/WATERCOLOR_ASSETS_GUIDE.md`
- **README Completo:** `/WATERCOLOR_ASSETS_README.md`
- **Ejemplos de Código:** `/components/WatercolorExamples.tsx`

---

## ❓ Problemas Comunes

### No veo los elementos
✅ Asegúrate que el contenedor tenga `position: relative`  
✅ Verifica que `top` y `left` estén dentro del viewport  
✅ Revisa z-index (debe ser menor que el contenido)

### Las animaciones están lentas
✅ Reduce el número de elementos  
✅ Usa `showSparkles={false}` en móvil  
✅ Aumenta el `delay` entre elementos

### Los SVGs se ven pixelados
✅ Aumenta el `size` (usa 32px+ para mejor calidad)  
✅ Reduce el `blur` en el código fuente  

---

## 🚀 Próximos Pasos

1. ✅ Ejecuta tu app y mira el resultado
2. 🎨 Prueba diferentes variantes cambiando el número
3. 📍 Ajusta posiciones (top/left) según tu diseño
4. ⚙️ Personaliza colores en los archivos fuente
5. 📖 Lee la guía completa para uso avanzado

---

## 💎 Pro Tips

- **Performance:** Usa máximo 5-7 sparkles y 3-5 mariposas por sección
- **Estética:** Combina variantes diferentes para look más natural
- **Animación:** Usa delays escalonados (0, 0.5, 1, 1.5...) para efecto cascada
- **Responsive:** Reduce cantidad de elementos en móvil

---

**¿Listo para empezar?** Copia cualquiera de los ejemplos arriba y ¡mira la magia! ✨

---

*Creado para Isabella María - XV Años • March 15th, 2025*
