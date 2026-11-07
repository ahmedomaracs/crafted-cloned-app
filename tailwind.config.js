/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        athar: {
          cream: "#FAF8F5",        // Main Page Background
          sand: "#F3EFEA",         // Search Bar & Subtle Surface
          surface: "#FFFFFF",      // Product & Dashboard Cards
          obsidian: "#141414",     // Primary Dark Buttons & Active Nav
          charcoal: "#181818",     // Primary Heading & Price Text
          espresso: "#2C1A11",     // Warm Dark Overlay
          gold: "#B08D57",         // Brand Bronze / Gold Accent
          amber: "#C89B3C",        // Star Ratings & Notification Badges
          muted: "#6E6A63",        // Secondary Body & Specs Text
          subtle: "#9A948C",       // Overlines & Old Strikethrough Price
          border: "#E6E1DA",       // Outer Card & Input Border
          divider: "#EFECE6",      // Inner Card Divider
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          whatsapp: "#25D366",
          sms: "#3B82F6",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Amiri'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "'Cairo'", "sans-serif"],
      },
      borderRadius: {
        hero: "24px",
        card: "16px",
        inner: "12px",
      },
      boxShadow: {
        card: "0 2px 10px rgba(20, 20, 20, 0.03)",
        "card-hover": "0 12px 28px rgba(20, 20, 20, 0.08)",
        popover: "0 16px 36px rgba(20, 20, 20, 0.14)",
      },
      letterSpacing: {
        kicker: "0.16em",
      },
    },
  },
  plugins: [],
};
