/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%)',
        'gradient-green': 'linear-gradient(90deg, #10B981 0%, #22C55E 100%)',
        'gradient-yellow': 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-red': 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)',
        'gradient-gray': 'linear-gradient(90deg, #6B7280 0%, #374151 100%)',
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'move-up': {
          '0%': { top: '50%', transform: 'translate(-50%, -50%)' },
          '100%': { top: '0%', transform: 'translate(-50%, 0%)' },
        },
      },
      animation: {
        'move-up': 'move-up 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

