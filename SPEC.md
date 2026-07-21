# Portfolio Specification

## Project Summary

- Project name: `ttam-portfolio`
- Type: Single-page software engineer portfolio
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Theme: 1990s retro aesthetic with neon accents, bold borders, scanlines, and terminal-inspired UI
- Primary objective: Present Toe Tet Aung Myint as a senior software engineer with strong backend, SaaS, and AWS experience

## Current Stage

The project is in a complete implementation stage. The main page has moved beyond the default Next.js starter and now includes:

- A custom Hero section with typing animation
- A custom About section with retro terminal styling and ASCII art profile image
- A compact Skills section with grouped stack categories
- A Work Experience section with an alternating timeline layout
- A separate Projects section with case-study cards
- A Contact section with email, phone, and resume links
- Shared retro visual language across all sections

## Page Architecture

### `app/page.tsx`

The main page is currently a client component because the Hero section uses a typing animation driven by React state.

Current sections:

1. `#home`
    - Compact retro Hero layout
    - Left side:
        - Availability badge
        - Personal title
        - Main headline
        - Typing animation card
        - CTA buttons
    - Right side:
        - Compact status board card
        - Experience, focus, and stack summary
        - Mission summary
2. `#about`
    - Retro terminal/CLI inspired About section in a single cohesive container
    - Left side:
        - Terminal window framing with title bar
        - Prompt-style lines summarizing engineering focus
        - Main professional summary paragraph
    - Right side:
        - ASCII art profile image (converted from /profile-image.jpeg using custom AsciiArt component
        - Ascii art maintains retro terminal aesthetic
3. `#skills`
    - Compact retro skills grid
    - Section heading focused on production-ready stack breadth
    - Responsive card layout
    - Category cards rendered from shared data
    - Skill items displayed as pill-style tags
4. `#experience`
    - Work Experience section with a centered alternating timeline on desktop
    - Single-column left-rail timeline on mobile
    - Compact role cards that surface only key metadata
    - Role details moved into a shared modal viewer
5. `#projects`
    - Dedicated project case-study grid separate from Work Experience
    - Compact summary cards for selected project work
    - Shared modal-based long-form detail viewer
    - Supports close button, overlay click, and Escape key
6. `#contact`
    - Contact section with retro styling
    - Left side: Introduction text and primary CTAs (Send Email, Open LinkedIn)
    - Right side: Contact action cards (Email, Phone, Resume)
    - All links use appropriate target and rel attributes

## Current Content Model

### Hero

- Typing phrases:
    - `Full-Stack Development`
    - `Scalable Backend Architecture`
    - `High-Performance Applications`
- Hero stats:
    - Experience: `8+ Years`
    - Focus: `Backend & Microservices`
    - Stack: `NestJs / NextJs`
- Floating decorative badges:
    - `API`
    - `TS`
    - `SQL`
    - `JS`

### About

- Terminal summary lines focus on:
    - Reliable, scalable, maintainable systems
    - Business, performance, security, and code quality balance
    - Openness to challenging opportunities and continuous learning
- Highlight cards emphasize:
    - Backend systems
    - SaaS platforms
    - Execution
- Main About paragraph presents:
    - 8 years of experience
    - Backend architecture and microservices
    - High-performance web applications
    - Technical leadership
    - Multi-tenant SaaS with secure database isolation
    - AI-assisted development
    - Strong engineering standards

### Skills

- Skill categories:
    - `Languages`
    - `Backend`
    - `Frontend`
    - `Databases & Caching`
    - `Cloud & DevOps`
    - `Tools & Architecture`
- Skills by category:
    - `Languages`: `TypeScript`, `JavaScript`, `PHP`, `SQL`
    - `Backend`: `Node.js`, `NestJS`, `Express.js`, `Laravel`, `PHP`
    - `Frontend`: `React`, `Next.js`, `Vue.js`, `Tailwind CSS`
    - `Databases & Caching`: `PostgreSQL`, `MySQL`, `MongoDB`, `Redis`
    - `Cloud & DevOps`: `AWS`, `GCP`, `Docker`, `Nginx`, `Linux`, `Git`
    - `Tools & Architecture`: `Microservices`, `Nx`, `Jest`, `Pusher`, `k6`
- Presentation details:
    - Each category is shown in a bordered retro card
    - Each item is rendered as a compact pill tag
    - The grid expands responsively from mobile to desktop

### Work Experience

- Timeline ordering:
    - Sorted by role start date in descending order
    - Alternates left/right around a centered timeline line on desktop
    - Collapses to a left-rail stacked timeline on mobile
- Main card presentation:
    - Shows `period`
    - Shows `Current Position` or `Previous Position`
    - Shows role title and company
    - Uses a compact `More Detail` CTA instead of long inline copy
- Current work roles:
    - `Software Engineer` at `Onenex (Software House)` from `Nov 2024 - Present`
    - `Backend Developer` at `Young Investment Group (Fintech)` from `Nov 2020 - Jun 2024`
- Role detail themes currently covered in modal content:
    - Architecture and scalability
    - Security and access control
    - Performance and reliability
    - Analytics and reporting
    - Leadership and stakeholder collaboration
    - Platform services and delivery stability

### Projects

- Current project entries:
    - `UniPay MM`
    - `Loyalty Engine`
    - `2C2P Wave`
    - `Tikkat`
- Project presentation:
    - Each project is shown as a compact summary card
    - Project cards are rendered in a dedicated section below Work Experience
    - Each project can open the shared modal-based case-study viewer
    - Live links are displayed when a project URL exists
- Modal content includes:
    - Summary
    - Technology tags
    - Highlight blocks for architecture, security, performance, testing, analytics, operations, or delivery

### Contact

- Contact actions:
    - `Email`: `toetet248@gmail.com`
    - `Phone`: `959 458021097`
    - `Resume`: View Resume (Google Drive link)
- Primary CTAs:
    - `Send Email` (mailto)
    - `Open LinkedIn` (external link)
- Presentation:
    - Contact action cards have distinct retro styling with neon accents
    - All external links open in new tab with noreferrer

## Visual Specification

### Shared Design Direction

- Use a dark retro gradient background
- Overlay a subtle retro grid and scanline effect
- Use neon cyan, fuchsia, and lime as primary accent colors
- Prefer bold borders, layered cards, and offset shadows
- Keep content professional despite the playful retro theme

### Typography

- Use Geist Sans and Geist Mono via `app/layout.tsx`
- Use monospace text for terminal-like labels, prompts, and status cards
- Use compact uppercase labels with increased letter spacing for section metadata
- Use compact pill tags for grouped skills metadata
- Use a retro modal window treatment for long-form work and project details

### Motion

- Typing animation in Hero:
    - Types forward
    - Pauses
    - Deletes
    - Cycles phrases
- Blinking cursor used in both Hero and About
- Floating badges drift slowly in the background
- Skills section uses static content without custom animation
- Work Experience timeline uses static layout alternation without custom animation
- Shared detail viewer is state-driven and opens without custom animation

## Layout Principles

- Mobile-first responsive layout
- Maintain scannability and avoid oversized cards
- Hero, About, Skills, Work Experience, and Projects should feel visually related in density and rhythm
- The About section is the current reference for compactness
- Keep the single-page flow intact
- Keep long-form work and project text inside modal views rather than inline blocks
- Keep Work Experience cards compact and timeline-first instead of summary-heavy

## File Responsibilities

- `app/page.tsx`
    - Main single-page implementation
    - Hero, About, Skills, Work Experience, Projects, and Contact content/layout
    - Typing animation logic
    - Work and project experience data structures
    - Modal state and interactions for detailed experience content
- `app/globals.css`
    - Global Tailwind import
    - Theme variables
    - Shared retro animations such as cursor blink, scanlines, and float motion
- `app/layout.tsx`
    - Root layout
    - Font setup
- `components/AsciiArt.tsx`
    - Custom React component that converts images to ASCII art using Canvas API
    - Automatically adjusts height based on image aspect ratio, accounting for text character proportions (~2x taller than wide)
    - Used in About section for profile image
- `AGENTS.md`
    - Project operating rules and implementation conventions

## Constraints

- Use TypeScript
- Use Tailwind CSS utilities for styling
- Keep the portfolio as a single-page experience
- Preserve the 90s retro aesthetic
- Keep About between Hero and Skills content
- Keep the About section in retro terminal/CLI style
- Prefer compact layouts over oversized blocks
- Use modal-driven UI patterns for dense work and project content instead of rendering everything inline
- Keep Work Experience in descending timeline order

## Next Recommended Work

1. Add additional past companies and projects to the existing Work Experience and Projects data model
2. Replace placeholder or abbreviated stack labels with final preferred wording
3. Add production portfolio metadata in `app/layout.tsx`
4. Decide whether project filtering or grouping by company is needed as more entries are added

## Notes

- `SPEC.md` reflects the current implementation state as of this stage of the project.
- If the UI direction changes materially, update this file together with `AGENTS.md` when conventions also change.
