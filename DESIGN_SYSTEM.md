# Design System Guide

This project uses a comprehensive design system defined in `design-system.json` and configured in Tailwind CSS.

## Colors

### Black/Gray Palette
- `bg-black-000` - Pure black (#000000)
- `bg-black-010` - Dark gray (#0a0a0a)
- `bg-black-020` - Medium dark gray (#0f0f0f)
- `bg-black-030` - Light dark gray (#151515)

### Foreground Colors
- `text-foreground-white` - White (#ffffff)
- `text-foreground-light` - Light gray (#a3a3a3)
- `text-foreground-medium` - Medium gray (#6b6b6b)
- `text-foreground-dark` - Dark gray (#404040)

### Accent Colors

#### Blue Accent
- `bg-accent-blue` or `bg-accent-blue-DEFAULT` - Base blue (#1a2332)
- `bg-accent-blue-10` through `bg-accent-blue-90` - Opacity variants (10% to 90%)

#### Cyan Accent
- `bg-accent-cyan` or `bg-accent-cyan-DEFAULT` - Base cyan (#1a3338)
- `bg-accent-cyan-10` through `bg-accent-cyan-90` - Opacity variants (10% to 90%)

## Typography

### Font Families
- `font-sans` - Primary font (Inter with SF Pro fallback)
- `font-display` - Display font (SF Pro Display with fallbacks)
- `font-mono` - Monospace font (SF Mono with Monaco fallback)

### Font Sizes (Responsive with clamp())
- `text-hero` - `clamp(2.5rem, 8vw, 6rem)`
- `text-h1` - `clamp(2rem, 5vw, 3.5rem)`
- `text-h2` - `clamp(1.75rem, 4vw, 2.5rem)`
- `text-h3` - `clamp(1.5rem, 3vw, 2rem)`
- `text-h4` - `clamp(1.25rem, 2.5vw, 1.5rem)`
- `text-body` - `clamp(1rem, 2vw, 1.125rem)`
- `text-small` - `clamp(0.875rem, 1.5vw, 1rem)`

## Spacing (8px Grid System)

All spacing follows an 8px grid:
- `p-0.5` = 4px
- `p-1` = 8px
- `p-1.5` = 12px
- `p-2` = 16px
- `p-2.5` = 20px
- `p-3` = 24px
- `p-4` = 32px
- `p-5` = 40px
- `p-6` = 48px
- `p-8` = 64px
- And so on...

## Utility Classes

### `.glass-card`
Backdrop blur effect with semi-transparent background:
```tsx
<div className="glass-card rounded-lg p-6">
  Content with glass effect
</div>
```

### `.glow-effect`
Subtle blue/cyan glow shadow:
```tsx
<div className="glow-effect rounded-lg p-6">
  Content with glow effect
</div>
```

### `.text-gradient`
White to gray gradient text:
```tsx
<h1 className="text-gradient text-hero">
  Gradient Text
</h1>
```

### Box Shadows
- `shadow-glow-blue` - Blue glow shadow
- `shadow-glow-cyan` - Cyan glow shadow
- `shadow-glow` - Combined blue/cyan glow

## Examples

See `components/DesignSystemDemo.tsx` for complete examples of all utility classes and design system features.

## Usage Tips

1. **Colors**: Use semantic color names (e.g., `bg-black-000`, `text-foreground-white`) instead of arbitrary values
2. **Typography**: Use responsive font sizes (e.g., `text-h1`) for better mobile experience
3. **Spacing**: Stick to the 8px grid system for consistent spacing
4. **Effects**: Combine utility classes (e.g., `glass-card glow-effect`) for layered effects

