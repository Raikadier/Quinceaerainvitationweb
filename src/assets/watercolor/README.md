# 🎨 Watercolor Illustration Assets

## Overview
Hand-painted watercolor illustrations for Isabella María's Quinceañera invitation website.
These assets provide a premium, artistic "al fresco" aesthetic inspired by luxury wedding stationery.

## Asset Inventory

### 1. `watercolor_corner_floral.png`
- **Purpose:** Corner decoration for main invitation card
- **Style:** Blue roses and hydrangeas with gold baroque filigree
- **Colors:** Royal Blue (#182C52) to Powder Blue (#4169E1), Gold accents
- **Usage:** Place in all 4 corners of main card container (rotate as needed)
- **Recommended Size:** 128x128px

### 2. `watercolor_butterfly.png`
- **Purpose:** Floating decorative element
- **Style:** Delicate butterfly with translucent watercolor wings
- **Colors:** Blue gradient wings, gold body
- **Usage:** Animate with floating/hovering effect around hero section
- **Recommended Size:** 32-48px
- **Animation:** Y-axis float, subtle rotation

### 3. `watercolor_floral_divider.png`
- **Purpose:** Horizontal section divider
- **Style:** Asymmetric garland of blue roses and hydrangeas
- **Colors:** Royal blue flowers, sage green leaves, gold veining
- **Usage:** Between major content sections
- **Recommended Width:** Full container width (responsive)
- **Height:** 120-150px

### 4. `gold_baroque_ornament.png`
- **Purpose:** Decorative accent/border element
- **Style:** Ornate French baroque scrollwork
- **Colors:** Metallic gold with highlights and shadows
- **Usage:** Frame elements, corner accents, dividers
- **Recommended Size:** Flexible, scale as needed

### 5. `watercolor_crown_gold.png`
- **Purpose:** Hero section crown icon
- **Style:** Royal princess crown with jewels
- **Colors:** Metallic gold with painted details
- **Usage:** Floating above "Isabella María" name
- **Recommended Size:** 64-80px
- **Animation:** Gentle Y-axis float

### 6. `castle_watercolor_background.png`
- **Purpose:** Full-page background
- **Style:** Dreamy impressionistic castle painting
- **Colors:** Very light powder blue washes
- **Usage:** Fixed background with 10-15% opacity
- **Display:** Cover, fixed attachment for parallax effect

## Design Guidelines

### Color Palette
- **Primary Blue:** #182C52 (Deep Sapphire)
- **Medium Blue:** #2E4A7F
- **Light Blue:** #4169E1 (Royal Blue)
- **Powder Blue:** #F0F8FF
- **Gold:** #D4AF37
- **Gold Light:** #F4D03F
- **Cream:** #FFFEF9

### Aesthetic Rules
1. **Never use solid flat colors** - All elements should have watercolor gradients
2. **Soft edges only** - No hard geometric shapes
3. **Layer transparently** - Maintain watercolor's translucent quality
4. **Natural asymmetry** - Avoid perfect centering on floral elements
5. **Visible brush texture** - Keep the hand-painted feel

### Implementation Notes
- All PNGs have transparent backgrounds
- Use CSS `object-fit: contain` to preserve aspect ratios
- Apply subtle drop shadows for depth (soft, diffused)
- Consider adding paper texture overlay for enhanced realism

## Placeholder Status
⚠️ **These are AI-generated placeholder assets.**

**Next Steps:**
1. Use assets immediately for development
2. Export final versions from Figma AI using provided prompt
3. Replace placeholders with high-resolution Figma exports
4. Maintain same file naming convention

## Integration Example

```tsx
import cornerFloral from './assets/watercolor/watercolor_corner_floral.png';
import butterfly from './assets/watercolor/watercolor_butterfly.png';
import crown from './assets/watercolor/watercolor_crown_gold.png';

// Example usage
<img 
  src={cornerFloral} 
  alt="Blue roses corner decoration"
  className="absolute top-0 left-0 w-32 h-32 opacity-90"
/>
```

---

**Generated:** December 9, 2025  
**For:** Isabella María XV Años Celebration  
**Theme:** Cinderella Luxury / Royal Fairytale
