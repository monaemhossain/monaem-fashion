/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      "darkTheme": "#1e282d",
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

