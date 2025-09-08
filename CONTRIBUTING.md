# Contributing to Motion UI Kit Pro

Thanks for your interest in contributing! 🎉

We welcome bug fixes, improvements, and new ideas. To keep things simple and consistent, please follow these guidelines:

## � Project Structure

Our codebase follows a clear architecture:

- **`src/components/`** — Design system components (customer-facing)
  - `primitives/` — Core UI components
  - `feedback/` — User feedback components
  - `navigation/` — Navigation components
  - `layout/` — Layout utilities
- **`src/app/`** — Demo site (internal use)
  - `components/` — Demo-specific components
  - `pages/` — Demo site pages

## �💻 Pull Requests

- Keep PRs small and focused — one visual or functional change per PR.
- Always run `npm run format` before submitting to ensure code style consistency.
- For new **design system components**:
  - Add to appropriate category in `src/components/`
  - Add demo page under `src/app/pages/`
  - Add smoke test under `src/__tests__/`
  - Export from category index file
- For **demo site features**:
  - Add to `src/app/components/` or `src/app/pages/`
  - These are not part of the shipped design system

## 🎨 Component Guidelines

### Design System Components (`src/components/`)

- Must follow accessibility best practices
- Include TypeScript types
- Support theme system (light/dark)
- Include proper SCSS with design tokens
- Be framework-agnostic where possible

### Demo Site Components (`src/app/`)

- Focus on showcasing design system
- Can include demo-specific functionality
- Should demonstrate best practices

## 🎭 Design Token System

Our sophisticated token system uses a centralized theme configuration approach with enterprise-grade typography architecture:

### Token Architecture

- **Centralized Configuration**: All themes are defined in the `$themes` map in `src/styles/abstracts/_tokens.scss`
- **Automatic Generation**: Theme variants are generated programmatically using SCSS @each loops
- **Typography System**: Centralized typography tokens with auto-generated utility classes in `_typography.scss`
- **Fixed vs. Contextual Tokens**:
  - Fixed tokens (brand colors, typography scales) remain consistent across themes
  - Contextual tokens (backgrounds, text, borders) adapt to each theme

### Typography System Architecture

- **Centralized Tokens**: All typography tokens (`$font-family-*`, `$font-size-*`, `$font-weight-*`) defined in `_tokens.scss`
- **Semantic Scale**: Three-tier system (display, heading, body) with consistent naming in `_typography.scss`
- **Auto-Generated Utilities**: SCSS loops create `.text-*` classes automatically from `$typography-scale` map
- **Theme-Aware Colors**: Typography colors automatically adapt using CSS custom properties
- **Responsive by Default**: All typography uses `clamp()` functions for fluid scaling

### Adding New Tokens

1. **For brand colors or fixed values**: Add to the `$primary-colors` or `$neutral-colors` maps
2. **For contextual tokens**: Add to the appropriate theme configuration in the `$themes` map
3. **For typography tokens**: Add base tokens to `_tokens.scss`, then add semantic styles to `$typography-scale` in `_typography.scss`
4. **For new themes**: Add a new entry to the `$themes` map with all required contextual values

### Typography Best Practices

- Use semantic utility classes (`.text-heading-lg`, `.text-body-md`) instead of base tokens
- For custom typography, use the `@include typography('style-name')` mixin
- Always use theme-aware colors (`var(--text-primary)`) instead of fixed colors
- Test typography across all viewport sizes to ensure fluid scaling works properly

### Best Practices

- Always use CSS custom properties (`var(--color-primary)`) in components
- Use contextual tokens (`--background-primary`, `--text-primary`) instead of raw color values
- Test components across all theme variants to ensure proper contrast and usability
- Follow the established naming convention: `--{category}-{purpose}-{variant?}`

## 🗣 Discussions

- If you're unsure about API changes or larger refactors, please [open an issue](../../issues) first so we can discuss.
- For new component categories, let's discuss the architecture first.

## ✅ Checklist before submitting

- Code compiles (`npm run build`)
- Tests pass (`npm test`)
- No linting or formatting errors
- Component placed in correct directory
- Follows established patterns
- Includes proper documentation

---

Thanks for helping improve **Motion UI Kit Pro**! 🚀
