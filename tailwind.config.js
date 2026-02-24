/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{css,js}"],
    theme: {
        extend: {
            fontFamily: {
                // We override the default 'sans' stack to use our variable
                sans: ['var(--font-main)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                // We use Slate or Zinc as the "Minimalist" neutral base
                neutral: require('tailwindcss/colors').slate,

                // Dynamic primary palette mapped to CSS variables
                primary: {
                    50: 'var(--primary-50)',
                    100: 'var(--primary-100)',
                    200: 'var(--primary-200)',
                    300: 'var(--primary-300)',
                    400: 'var(--primary-400)',
                    500: 'var(--primary-500)', // The main brand color
                    600: 'var(--primary-600)',
                    700: 'var(--primary-700)',
                    800: 'var(--primary-800)',
                    900: 'var(--primary-900)',
                    950: 'var(--primary-950)',
                },
            },
        },
    },
    plugins: [],
}