import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redPrimaryAccent: '#FC004E',
        blueishAccent: '#10CBE0',
        white: '#FFFFFF',
        bannerTextColor: '#00E7F9',
        navButtonColor: '#A9A9A9',
        bgColorBlack: '#010101',
        footerTextColor: '#ABABAB',
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        figtree: ["var(--font-figtree)"],
        urbanist: ["var(--font-urbanist)"],
        nunito: ["var(--font-nunito)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
