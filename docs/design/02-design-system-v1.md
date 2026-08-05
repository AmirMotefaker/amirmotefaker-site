# AmirMotefaker.ir — Design System V1

## Direction

**Editorial Technology Minimalism**

The visual language combines editorial clarity with a modern technology-product system.

## Principles

- Strong Persian typography
- Large, direct headings
- Generous whitespace
- Ordered modular grid
- High contrast
- Light and dark themes
- Mobile-first behavior
- Limited and purposeful motion
- Full `prefers-reduced-motion` support
- No decorative gradient
- No heavy 3D visual language
- No stock-photo dependency
- Real product visuals only after evidence and licensing review
- RTL-first structure with future LTR readiness

## Palette

### Light

- Canvas: `#F5F4EF`
- Surface: `#FFFFFF`
- Ink: `#171918`
- Muted ink: `#606864`
- Border: `#D8DDD9`
- Primary accent: `#0B6B58`
- Accent strong: `#075344`
- Accent soft: `#DCEFE9`

### Dark

- Canvas: `#0E1211`
- Surface: `#151B19`
- Ink: `#F4F7F5`
- Muted ink: `#A8B3AE`
- Border: `#2A3531`
- Primary accent: `#65D6B4`
- Accent strong: `#8BE4C8`
- Accent soft: `#193B31`

## Typography

- Persian UI stack: `Vazirmatn`, `IRANSansX`, `Tahoma`, system sans-serif
- English and numeric stack: `Inter`, `Segoe UI`, system sans-serif
- No font file is bundled in the prototype.
- Production font licensing and delivery must be reviewed before implementation.

## Type scale

- Display: `clamp(2.6rem, 8vw, 7rem)`
- H2: `clamp(2rem, 5vw, 4.5rem)`
- H3: `clamp(1.35rem, 2vw, 2rem)`
- Body large: `clamp(1.05rem, 1.8vw, 1.35rem)`
- Body: `1rem`
- Small: `0.875rem`

## Grid

- Maximum content width: `1280px`
- Main page gutter: `clamp(1rem, 4vw, 4rem)`
- Section spacing: `clamp(5rem, 11vw, 10rem)`
- Desktop: 12-column conceptual grid
- Tablet: 8-column conceptual grid
- Mobile: 4-column conceptual grid

## Components

- Top navigation
- Hero statement
- Editorial proof strip
- Product cards
- Featured case-study panel
- Founder operating-model steps
- Selected-writing placeholder
- Collaboration callout
- Minimal footer
- Theme toggle

## Interaction

- Standard transition duration: 160–220ms
- No parallax
- No scroll hijacking
- No continuous animation
- Hover states must have keyboard-equivalent focus states
- Motion is disabled when reduced motion is requested

## Accessibility target

- WCAG 2.2 AA
- Visible focus state
- Semantic heading hierarchy
- Keyboard-accessible navigation
- Text alternatives for real content images
- Minimum touch target of approximately 44px
