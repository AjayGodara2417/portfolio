// tailwind.config.ts
export default {
 darkMode: 'class', // ✅ valid here
 content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
   extend: {
    backdropBlur: {
      xs: '2px',
    },
   },
 },
 plugins: [],
}
