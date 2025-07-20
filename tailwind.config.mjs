export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'dark:hidden',
    'dark:block',
    'dark:bg-primary',
    'dark:text-white',
    'dark:text-black',
    'text-secondary',
    'dark:text-secondary'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#192CA7',
        'secondary': '#767877',
        'background': '#ffffff',
        'foreground': '#000000',
        'dark-bg': '#0a0a0a',
        'dark-primary': '#10172a',
      }
    }
  }
} 