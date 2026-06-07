---
name: Botanical Elegance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#424844'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#6c5a56'
  on-secondary: '#ffffff'
  secondary-container: '#f2dbd5'
  on-secondary-container: '#705f5a'
  tertiary: '#2b2c2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#414241'
  on-tertiary-container: '#afaeac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#f5ddd7'
  secondary-fixed-dim: '#d8c2bc'
  on-secondary-fixed: '#251915'
  on-secondary-fixed-variant: '#53433f'
  tertiary-fixed: '#e4e2e0'
  tertiary-fixed-dim: '#c7c6c4'
  on-tertiary-fixed: '#1b1c1b'
  on-tertiary-fixed-variant: '#464746'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 16px
  margin-desktop: 64px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style
The design system is rooted in the intersection of high-end floral artistry and modern e-commerce efficiency. It aims to evoke a sense of premium quality, reliability, and organic beauty. The target audience includes corporate clients and individuals seeking sophisticated floral boards that convey prestige and thoughtful sentiment.

The design style is a blend of **Minimalism** and **Modern Corporate**. It prioritizes generous whitespace to let the vibrant floral products serve as the primary visual interest. Layouts are airy and structured, using precise alignment and high-quality typography to establish trust. The overall mood is "Contemporary Botanical"—clean, calm, and professional.

## Colors
The palette is inspired by the natural anatomy of a flower.
- **Primary (Deep Forest Green):** Represents leaves and nature; used for primary actions, navigation headers, and brand-heavy elements to establish authority.
- **Secondary (Blush Pink):** Used sparingly as an accent for highlights, "New" badges, or soft call-to-action sections to provide a gentle, floral contrast.
- **Tertiary (Off-White/Cream):** Serves as the primary background color, creating a warmer, more premium feel than pure white.
- **Neutral (Deep Charcoal):** Reserved for primary typography and iconography to ensure high legibility and a sharp, professional finish.

## Typography
The typography strategy utilizes **Montserrat** for headlines to convey a geometric, high-end marketing feel, while **Inter** is used for body and interface elements to maintain exceptional readability across all device types.

- **Headlines:** Use Montserrat Bold/SemiBold with tight letter spacing for a punchy, editorial look.
- **Body:** Use Inter for all product descriptions and transactional text.
- **Labels:** Small caps or increased letter spacing should be applied to `label-md` for categorical information like "Occasion" or "Availability."

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. 
- **Desktop:** A 12-column grid with a maximum content width of 1280px. Margins are generous (64px) to emphasize the premium nature of the brand.
- **Mobile:** A 4-column fluid grid with 16px side margins. 

The spacing rhythm is based on an 8px scale. Components should be separated by large vertical gaps (section-gap) to maintain the "clean" aesthetic and prevent the interface from feeling cluttered or "discount."

## Elevation & Depth
This design system utilizes **Ambient Shadows** and **Tonal Layers** to create depth.
- **Product Elevation:** Cards use a very soft, diffused shadow (Blur: 20px, Y: 10px, Opacity: 4%) against the off-white background to appear as if they are gently floating.
- **Interaction Elevation:** Upon hover, the shadow should deepen slightly and the element should scale by 1-2% to provide tactile feedback.
- **Overlays:** Modals and drawers use a 40% opacity charcoal backdrop blur to focus the user's attention while maintaining the floral context underneath.

## Shapes
The shape language is "Rounded," utilizing a 12px default radius for most UI elements.
- **Standard Elements:** 12px (`0.75rem`) for buttons, input fields, and small cards.
- **Container Elements:** 24px (`1.5rem`) for large product cards and featured sections to soften the visual impact of high-contrast photography.
- **Circular:** Used exclusively for notification badges and small icon button containers.

## Components
### Buttons
Buttons are the primary conversion driver. 
- **Primary:** Full-width on mobile, minimum height of 48px. Deep Forest Green background with Off-White text.
- **Secondary:** Outlined with a 1.5px border in Primary Green, used for "Add to Cart" or "View Details."

### Cards (Product)
- **Image Ratio:** Strictly 1:1 (square) to mirror the traditional proportions of floral boards (bunga papan).
- **Styling:** Minimalist footer with `title-md` for the product name and `body-md` for the price, aligned left.

### Input Fields
- **Style:** Clean, 1px border in a soft grey. On focus, the border transitions to Primary Green. Labels sit outside the input field for clarity.

### Chips
- **Usage:** For filtering by occasion (e.g., Wedding, Funeral, Grand Opening). Use the Secondary Blush color with 50% opacity for the background and Deep Charcoal for text.

### Navigation
- **Header:** Sticky on scroll, with a blur effect and a very thin bottom divider to separate the brand area from the scrollable content.