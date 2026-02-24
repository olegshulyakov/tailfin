# 🦈 Tailfin

**A production-grade, minimalist theme for Jellyfin, inspired by the TailwindCSS design system.**

Tailfin transforms your Jellyfin instance into a sleek, professional media center. By stripping away visual clutter and implementing a strict design language based on **TailwindCSS**, Tailfin offers a high-performance UI that feels like a premium streaming service.

---

## ✨ Key Features

- **Minimalist Design:** Clean layouts, refined typography, and purposeful spacing.
- **Modular Architecture:** Built with **PostCSS**, allowing you to mix and match colors and fonts without bloating your CSS.
- **Multi-Brand Palettes:** Choose your vibe—Jellyfin Blue, Emby Green, Plex Amber, or Netflix Red.
- **Global Language Support:** Production-ready font stacks (Inter, Noto Sans) ensuring your metadata looks perfect in any language.
- **Performance First:** Minified and auto-prefixed for compatibility across browsers and smart TVs.

---

## 🚀 Quick Start (Installation)

To use Tailfin, copy and paste the following into your Jellyfin **Dashboard > General > Custom CSS** field.

### 1. The Core (Required)

This provides the layout and logic.

```css
@import url("https://raw.githubusercontent.com/olegshulyakov/tailfin/main/dist/tailfin.css");
```

### 2. Choose Your Palette (Pick One)

```css
/* Default Jellyfin Blue */
@import url("https://raw.githubusercontent.com/olegshulyakov/tailfin/main/dist/palettes/theme-jellyfin.css");

/* Other options: theme-emby.css, theme-plex.css, theme-netflix.css */
```

### 3. Choose Your Font (Pick One)

```css
/* Inter - Modern & Clean */
@import url("https://raw.githubusercontent.com/olegshulyakov/tailfin/main/dist/fonts/font-inter.css");

/* Noto Sans - Best for International/Global translations */
@import url("https://raw.githubusercontent.com/olegshulyakov/tailfin/main/dist/fonts/font-noto.css");
```

---

## 🛠 Development & Customization

Tailfin uses a modern build pipeline. If you want to modify the theme or create your own palette:

### Prerequisites

- [Node.js](https://www.google.com/search?q=https://nodejs.org/) (Latest LTS)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/olegshulyakov/tailfin.git
cd tailfin

```

2. Install dependencies:

```bash
npm install

```

### Build Commands

- **Build everything:** `npm run build` (Outputs to `/dist`)
- **Development mode:** `npm run watch` (Recompiles `tailfin.css` on every save)

---

## 🎨 Design Tokens

All design decisions follow these rules:

1. **Neutrals:** Based on Tailwind's `Slate` or `Zinc` scales.
2. **Spacing:** Strict adherence to a `0.25rem` (4px) grid.
3. **Interactivity:** Transitions must be `< 200ms` and meaningful.

---

## 🤝 Contributing

Contributions are welcome! Please ensure your Pull Requests:

1. Follow the **PostCSS/Tailwind** workflow.
2. Do not edit files in `dist/` directly.
3. Maintain the "Minimalist" aesthetic.

---

## 📄 License

MIT © [Oleg Shulyakov](https://github.com/olegshulyakov)
