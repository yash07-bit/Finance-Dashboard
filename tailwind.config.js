/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Finance Palette
        primary: '#0F172A',        // Deep Navy - Trust & Stability
        'primary-light': '#1E293B', // Lighter Navy
        'primary-accent': '#2E8B9E', // Teal - Modern & Growth
        success: '#10B981',        // Emerald Green
        warning: '#F59E0B',        // Amber
        error: '#EF4444',          // Red
        'surface-light': '#F8FAFC', // Almost White
        'surface-dark': '#0F172A',  // Deep Navy
        'border-light': '#E2E8F0',
        'text-muted': '#64748B',
      },
      backgroundImage: {
        'gradient-finance': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #2E8B9E 0%, #0F172A 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}


