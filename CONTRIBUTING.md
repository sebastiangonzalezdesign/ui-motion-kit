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
