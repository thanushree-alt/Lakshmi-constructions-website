export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1b1b1b',
        stone: '#2a2a2a',
        concrete: '#6b7280',
        accent: '#d97706',
        sand: '#f5efe7'
      },
      boxShadow: {
        soft: '0 25px 60px rgba(0, 0, 0, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
