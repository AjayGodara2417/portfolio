# AI Tools Used

- **Primary tools:**
  - ChatGPT-4 (via ChatGPT Plus)
  - Cursor IDE (code editing, debugging and error fixing)
  - Stitch (UI design - from Google)
  - Claude (code enhancement)
  - DALL·E (for hero image generation)

- **UI Sources**
  - Dribbble - SaaS designs
  - UI Libraries - shadcn/ui, lucide-react (for icons)

- **Key use cases:**
  - Generating optimized, responsive components in Next.js and Tailwind CSS
  - Enhancing UI/UX with animation (GSAP, Framer Motion)
  - Refactoring components for mobile/tablet/desktop
  - Creating accessible and scalable FAQ, testimonial, contact form sections
  - Implementing dark mode toggle and theme persistence
  - Debugging and lint rule fixes for production readiness
  - Designing custom illustrations for impactful landing pages

## Sample Prompts
1. “Enhance the FAQ section with animation and better UI/UX using shadcn/ui and Framer Motion. Take refrence from the image attached to make the design for the FAQs and enhance it.”
2. “Generate a testimonal with dummy data to add to the SaaS product for the new user refrence such that these build trust and encourages the new user to try out the platform.”
3. “Implement a dark mode toggle button in a Next.js app using Tailwind and `useTheme()` hook for a clean and better looking UI UX experience to the user.”

## AI vs Manual Work Split

- **AI-generated:**
  \~70%

  - UI structure, layout, and base component generation (Hero, FAQ, Testimonials, ContactForm)
  - Animation logic (Framer Motion usage, transitions, stagger effects)
  - Dark mode toggle logic and setup
  - Image generation and ideas for visual content

- **Manual coding:**
  \~30%

  - Project setup with `Next.js 14`, Tailwind CSS, `shadcn/ui`, and `lucide-react`
  - Figma interpretation and visual matching
  - Manual tweaks to paddings, typography, and responsive behavior
  - Image optimization, ESLint fixes, and final dark mode integration with localStorage/theme provider

- **Customization:**
  - Rewrote and adjusted layout details based on the Figma design structure
  - Refined animations and transition durations to feel smoother and more brand-aligned
  - Replaced AI-generated placeholders with real data and appropriate assets
  - Fixed ESLint warnings manually to ensure clean production builds
