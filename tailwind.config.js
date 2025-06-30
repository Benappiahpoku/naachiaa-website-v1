/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated brand colors with full scale - Naachiaa theme
        primary: {
          50: '#F0F6FD',
          100: '#E1EDFB',
          200: '#C3DBF7',
          300: '#A5C9F3',
          400: '#87B7EF',
          500: '#69A5EB',
          600: '#1461AC', // Primary blue
          700: '#104E8A', // dark variant
          800: '#0C3B68',
          900: '#082846',
          DEFAULT: '#1461AC'
        },
        secondary: {
          50: '#FEFCF7',
          100: '#FDF8EF',
          200: '#FBF1DF',
          300: '#F9EACF',
          400: '#F7E3BF',
          500: '#F5DCAF',
          600: '#D9A441', // Accent golden yellow
          700: '#B8873A', // hover variant
          800: '#976A33',
          900: '#764D2C',
          DEFAULT: '#D9A441'
        },
        // Additional utility colors
        'bg-light': '#F9FAFB',
        'text-main': '#1F2937',
        'border-gray': '#E5E7EB',
        success: '#10B981',
        danger: '#EF4444',
        // Standard gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      // Touch-optimized sizes for Ghanaian mobile users
      spacing: {
        'touch-min': '3rem', // 48px - minimum touch target
        'touch-safe': '4rem' // 64px - comfortable touch area
      },
      borderRadius: {
        stratonea: '0.375rem' // Consistent border-radius
      }
    }
  },
  darkMode: 'class', // Enable dark mode
  plugins: [
    require('@tailwindcss/forms') // Add forms plugin
  ]
}
