# 🎨 Quick Variant Reference Card

## 🌟 Gold Sparkles (1-10)

```
┌─────────┬─────────────────┬──────┬─────────┬─────────────────┐
│ Variant │ Name            │ Blur │ Opacity │ Recommended Use │
├─────────┼─────────────────┼──────┼─────────┼─────────────────┤
│    1    │ Classic         │ 0.8  │  0.90   │ All-purpose     │
│    2    │ Wide Blur       │ 1.2  │  0.85   │ Soft ambiance   │
│    3    │ Sharp           │ 0.6  │  0.95   │ Crisp details   │
│    4    │ Soft Round      │ 1.5  │  0.80   │ Romantic        │
│    5    │ Asymmetric      │ 1.0  │  0.88   │ Artistic        │
│    6    │ Diamond         │ 0.9  │  0.92   │ Elegant         │
│    7    │ Elongated       │ 1.1  │  0.87   │ Borders         │
│    8    │ Compact         │ 0.7  │  0.90   │ Small spots     │
│    9    │ Wide Cross      │ 1.3  │  0.83   │ Focal points    │
│   10    │ Delicate        │ 0.5  │  0.93   │ Subtle accents  │
└─────────┴─────────────────┴──────┴─────────┴─────────────────┘
```

### 💡 Quick Pick Guide - Sparkles

**For Hero Sections:** 1, 5, 9  
**For Cards:** 3, 6, 8  
**For Backgrounds:** 2, 4, 7  
**For Borders:** 7, 10  
**For Accents:** 6, 8, 10  

---

## 🦋 Butterflies (1-7)

```
┌─────────┬─────────────────┬──────┬──────┬──────────────────┐
│ Variant │ Name            │ Blur │ Size │ Wing Style       │
├─────────┼─────────────────┼──────┼──────┼──────────────────┤
│    1    │ Monarch         │ 1.2  │ 40px │ Classic balanced │
│    2    │ Wide Delicate   │ 1.5  │ 36px │ Very wide spread │
│    3    │ Compact         │ 0.8  │ 32px │ Small & round    │
│    4    │ Elegant         │ 1.3  │ 44px │ Long & graceful  │
│    5    │ Asymmetric      │ 1.6  │ 38px │ Artistic pose    │
│    6    │ Small           │ 0.9  │ 34px │ Delicate petite  │
│    7    │ Dramatic        │ 1.8  │ 42px │ Maximum spread   │
└─────────┴─────────────────┴──────┴──────┴──────────────────┘
```

### 💡 Quick Pick Guide - Butterflies

**For Hero Sections:** 1, 4, 7  
**For Cards:** 3, 6  
**For Large Areas:** 2, 4, 7  
**For Tight Spaces:** 3, 6  
**For Artistic Look:** 2, 5, 7  

---

## 🎯 Combination Suggestions

### Classic Elegant
```tsx
Sparkles: 1, 6, 10
Butterflies: 1, 4
```

### Soft Romantic
```tsx
Sparkles: 2, 4, 7
Butterflies: 2, 6
```

### Bold Dramatic
```tsx
Sparkles: 5, 9
Butterflies: 4, 7
```

### Delicate Subtle
```tsx
Sparkles: 3, 8, 10
Butterflies: 3, 6
```

### Artistic Modern
```tsx
Sparkles: 5, 6, 9
Butterflies: 2, 5
```

---

## 📐 Size Guide

### Sparkles

```
Small Details:    12-14px → variants 8, 10
Medium Elements:  16-18px → variants 1, 3, 6
Large Accents:    20-24px → variants 2, 4, 9
```

### Butterflies

```
Compact Spaces:   30-34px → variants 3, 6
Standard:         36-40px → variants 1, 2, 5
Statement Pieces: 42-48px → variants 4, 7
```

---

## 🎨 Color Reference

### Sparkles (Gold Family)

```
Highlights:  #FFFACD, #F4D03F
Mid-tones:   #FFD700, #D4AF37
Shadows:     #B8960C
```

### Butterflies (Royal Blue + Gold)

```
Wings:
  Highlights:  #4169E1
  Mid-tones:   #2E4A7F
  Shadows:     #182C52
  Deep:        #0F1B2E

Body:
  Highlights:  #F4D03F
  Base:        #D4AF37
  Shadows:     #B8960C
```

---

## ⚡ Performance Cheat Sheet

### Mobile Optimization

```tsx
// Option 1: Reduce count
<WatercolorAssets 
  showSparkles={false}  // Disable sparkles
  showButterflies={true} // Keep butterflies
/>

// Option 2: Conditional
const isMobile = window.innerWidth < 768;
<WatercolorAssets 
  showSparkles={!isMobile}
  showButterflies={true}
/>
```

### Maximum Elements per Section

```
Hero:        5-8 sparkles + 3-5 butterflies
Card:        3-4 sparkles + 0-2 butterflies
Background:  8-10 sparkles + 5-7 butterflies
Border:      5-6 sparkles + 0 butterflies
```

---

## 🔥 Most Popular Combinations

### #1 Royal Elegance
```tsx
<WatercolorSparkle variant={1} top="20%" left="15%" size={18} />
<WatercolorSparkle variant={6} top="30%" left="80%" size={16} />
<WatercolorSparkle variant={10} top="50%" left="10%" size={14} />
<WatercolorButterfly variant={1} top="25%" left="50%" size={40} />
<WatercolorButterfly variant={4} top="45%" left="70%" size={44} />
```

### #2 Soft Romantic
```tsx
<WatercolorSparkle variant={2} top="15%" left="20%" size={20} />
<WatercolorSparkle variant={4} top="40%" left="85%" size={22} />
<WatercolorSparkle variant={7} top="65%" left="15%" size={18} />
<WatercolorButterfly variant={2} top="30%" left="60%" size={36} />
<WatercolorButterfly variant={6} top="55%" left="30%" size={34} />
```

### #3 Bold Statement
```tsx
<WatercolorSparkle variant={5} top="20%" left="10%" size={20} />
<WatercolorSparkle variant={9} top="50%" left="90%" size={24} />
<WatercolorButterfly variant={4} top="35%" left="75%" size={44} />
<WatercolorButterfly variant={7} top="60%" left="20%" size={42} />
```

---

## 📊 Decision Tree

```
Need decorative elements?
│
├─ YES → What style?
│   │
│   ├─ Elegant/Classic → Sparkles: 1,6,10 | Butterflies: 1,4
│   ├─ Soft/Romantic   → Sparkles: 2,4,7  | Butterflies: 2,6
│   ├─ Bold/Dramatic   → Sparkles: 5,9    | Butterflies: 4,7
│   └─ Artistic/Modern → Sparkles: 5,6,9  | Butterflies: 2,5
│
└─ What size area?
    │
    ├─ Small (card)    → 3-4 sparkles, 0-2 butterflies
    ├─ Medium (section)→ 5-6 sparkles, 2-3 butterflies
    └─ Large (hero)    → 7-8 sparkles, 4-5 butterflies
```

---

## 🎯 Copy-Paste Templates

### Template 1: Minimal Elegant
```tsx
<WatercolorSparkle variant={6} top="20%" left="50%" size={18} />
<WatercolorButterfly variant={1} top="40%" left="50%" size={40} />
```

### Template 2: Scattered Sparkles
```tsx
<WatercolorSparkle variant={1} top="15%" left="10%" size={16} />
<WatercolorSparkle variant={3} top="25%" left="85%" size={14} />
<WatercolorSparkle variant={6} top="45%" left="15%" size={18} />
<WatercolorSparkle variant={8} top="55%" left="80%" size={12} />
<WatercolorSparkle variant={10} top="75%" left="50%" size={14} />
```

### Template 3: Butterfly Trail
```tsx
<WatercolorButterfly variant={1} top="20%" left="20%" size={36} />
<WatercolorButterfly variant={2} top="30%" left="40%" size={38} />
<WatercolorButterfly variant={3} top="25%" left="60%" size={32} />
<WatercolorButterfly variant={4} top="35%" left="80%" size={40} />
```

### Template 4: Full Hero
```tsx
{/* Sparkles */}
<WatercolorSparkle variant={1} delay={0} top="20%" left="15%" size={18} />
<WatercolorSparkle variant={5} delay={0.5} top="35%" left="85%" size={20} />
<WatercolorSparkle variant={9} delay={1} top="55%" left="10%" size={22} />
<WatercolorSparkle variant={6} delay={1.5} top="70%" left="90%" size={16} />

{/* Butterflies */}
<WatercolorButterfly variant={1} delay={0} top="25%" left="25%" size={40} />
<WatercolorButterfly variant={4} delay={1} top="45%" left="70%" size={44} />
<WatercolorButterfly variant={6} delay={2} top="65%" left="40%" size={34} />
```

---

## 🚀 Pro Tips

1. **Stagger delays** by 0.3-0.8s for natural cascade effect
2. **Mix variants** - don't use all the same number
3. **Balance sizes** - combine small (12-16px) with large (20-24px)
4. **Odd numbers** - use 3, 5, or 7 elements (more organic)
5. **Golden ratio** - place key elements at 38% and 62% positions
6. **Contrast blur** - pair sharp (var 3) with soft (var 4)
7. **Mobile first** - test with fewer elements, add more for desktop

---

**Quick Reference Version 1.0 • Isabella María XV Años**
