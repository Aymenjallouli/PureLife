/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./script.js"];
export const theme = {
  extend: {
    colors: {
      primary: '#E4EFE7',
      secondary: '#E6ECE3',
      accent: '#FAF1E6',
      darkGreen: '#064420',
      lightGreen: '#3E563E',
      formBg: '#EFE9DD',
      btnHover: '#444444',
      btnDark: '#2C2C2C',
      navHover: '#3E563E',
      breadcrumbInactive: '#B0BEB4',
      searchBg: '#FFF5E0',
      'mint': '#e2f0ea',
      'mint-dark': '#c8e0d4',
      'cream': '#f9f4ea',
      'forest': '#155724',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },


    spacing: {
      18: "4.5rem",
      22: "5.5rem",
    },
    borderRadius: {
      xl: "1rem",
      "2xl": "1.5rem",
    },
    boxShadow: {
      custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
};
export const plugins = [];
