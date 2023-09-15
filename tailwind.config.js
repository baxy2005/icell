// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      // For the best performance and to avoid false positives,
      // be as specific as possible with your content configuration.
    ],
      theme: {
        extend: {
        fontSize: {
          '3xl': ['1.75rem', {
            lineHeight: '1.218',
            letterSpacing: '0rem',
            fontWeight: '400',
          }],
          '5xl': ['3rem', {
            lineHeight: '1.15',
            letterSpacing: '0rem',
            fontWeight: '700',
          }],
        },
        container: {
          center: true,
        },
      }
    }
  };