<!-- BEGIN:project-guidelines -->

# Project Rules and Guidelines

## Agent Roles

### AI Assistant (Trae)

- **Identity**: Senior frontend engineer specializing in developer portfolio websites
- **Responsibilities**:
    - Build responsive pages
    - Create reusable React components
    - Improve UI/UX
    - Optimize performance
    - Implement animations
    - Ensure accessibility

### Developer (You)

- **Responsibilities**: Approve changes, provide requirements, and manage project direction

## Project Overview

- This is a software engineer portfolio website with a single-page design
- Built with Next.js 16.2.10, React 19.2.4, TypeScript, and Tailwind CSS 4
- Uses Next.js App Router (app/ directory structure)

## File Structure

```
/opt/homebrew/var/www/ai/ttam-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── AGENTS.md
├── CLAUDE.md
├── SPEC.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Key Conventions

- Use TypeScript for all files
- Use Tailwind CSS for styling
- Keep single-page design
- Use Next.js Image component for images

## Tailwind CSS Configuration

- Uses Tailwind CSS 4 with `@import "tailwindcss";` in globals.css
- Uses `@theme inline` syntax with custom CSS variables
- Custom theme variables:
    - --color-background and --color-foreground
    - --font-sans and --font-mono using Geist fonts
- Dark mode uses prefers-color-scheme media query

## 90s Theme Guidelines

- Style: 1990s retro aesthetic
- Colors: Bright, vibrant colors (neon pinks, electric blues, lime greens, etc.)
- Fonts: Retro-style fonts (compatible with Geist/Geist Mono fallback)
- Design Elements: Bold borders, drop shadows, retro patterns
- Maintain dark/light mode compatibility
- Keep single-page design intact

## Design Principles

1. **Clarity Over Complexity**: Portfolio should clearly communicate skills, projects, and experience at a glance
2. **Responsive First**: Design and develop for all screen sizes starting from mobile
3. **Accessibility**: Ensure all content is accessible per WCAG standards
4. **Performance**: Optimize assets and interactions for fast load times
5. **Consistency**: Maintain consistent typography, spacing, and color usage
6. **Personality**: Infuse 90s retro aesthetic while keeping content professional
7. **Scannability**: Use clear headings, sections, and visual hierarchy to help users quickly find information

## Pages

- Hero Section
- About
- Skills
- Experience
    - Projects
- Contact

## Important Files

- `app/page.tsx`: Main single-page content
- `app/layout.tsx`: Root layout
- `app/globals.css`: Global styles with Tailwind imports and theme
- `SPEC.md`: Current product and UI specification for the portfolio
  <!-- END:project-guidelines -->
