/** @type {import('tailwindcss').Config} */
export default {
  // 這裡告訴 Tailwind：請去 src 資料夾底下找所有 .astro, .js, .ts 等檔案
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        // Body: default sans enriched with system CJK — no webfont download,
        // just better Traditional Chinese rendering everywhere (zh-tw).
        sans: [
          'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto',
          '"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'sans-serif',
        ],
        // Display: characterful headings (Latin webfont, loaded on blog pages).
        display: [
          '"Space Grotesk Variable"', '"Space Grotesk"',
          'ui-sans-serif', 'system-ui', 'sans-serif',
        ],
        // Accent: structural mono — section numbers, eyebrows, meta.
        // Separate from the default `mono` so the site header logo is untouched.
        accent: [
          '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}