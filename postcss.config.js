module.exports = {
    plugins: [
        require('postcss-import'),   // Allows @import "components/cards.css"
        require('tailwindcss'),      // Injects Tailwind logic
        require('postcss-nested'),    // Allows SASS-like nesting
        require('autoprefixer'),     // Fixes compatibility for older browsers/TVs
    ]
}