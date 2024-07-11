
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/bg-olympic.webp')",
        'introbg': "url('/intro-bg.svg')",
        
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1.5s ease-out',
        slideInRight: 'slideInRight 1.5s ease-out',
      },
      colors: {
        lightseagreen: "#00afaf",
        snow: {
          "100": "#fff9f9",
          "200": "#fff4f4",
        },
        gray: {
          "100": "#022526",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        darkslategray: "#272c39",
        white: "#fff",
        mediumblue: "#1504e1",
        black: "#000",
      },
      fontFamily: {
        "freckle-face": "'Freckle Face'",
        fresca: "Fresca",
      },
      borderRadius: {
        "6xl": "25px",
        "8xs": "5px",
        xl: "20px",
        "3xs": "10px",
        "31xl": "50px",
      },
      fontSize: {
        "21xl": "40px",
        "11xl": "30px",
        xl: "20px",
        lg: "18px",
        "5xl": "24px",
        "81xl": "100px",
        "31xl": "50px",
        "6xl": "25px",
        "11xl":"30px",
        "27xl": "46px",
        sm: "14px",
        xs: "12px",
        mini: "15px",
        "41xl": "55px",
        "51xl": "70px",
      },
      screens: {
        sm: '640px',
        md: '850px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
