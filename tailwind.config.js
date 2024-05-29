/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        // designColor: "#ff014f",
        // designColor: "#7c3aed",
        // designColor: "#ffd700",
        designColor: "#00FFFF",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo:"0 1px 2px rgba(0, 255, 255, 0.5)"
        // shadowTwo: "0 1px 2px rgba(255, 215, 0, 0.5)",
        // shadowTwo: "0 1px 2px rgba(124, 58, 237, 0.5)"
        
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class', // Enable dark mode based on the class applied to the HTML element

//   // Define shared theme properties
//   theme: {
//     extend: {
//       screens: {
//         // Define screen breakpoints if needed
//       },
//       fontFamily: {
//         // Define font families for both themes
//       },
//       boxShadow: {
//         // Define box shadows for both themes
//       },
//     },
//   },

//   // Define dark theme specific properties
//   dark: {
//     theme: {
//       extend: {
//         colors: {
//           // Define dark theme colors
//           bodyColor: "#FFFFFF", // example
//           lightText: "#AAAAAA", // example
//           boxBg: "#333333", // example
//           designColor: "#00FFFF", // example
//         },
//         // Override other theme properties specific to dark mode
//       },
//     },
//   },

//   // Define light theme specific properties
//   theme: {
//     extend: {
//       colors: {
//         // Define light theme colors
//         bodyColor: "#212428", // example
//         lightText: "#c4cfde", // example
//         boxBg: "linear-gradient(145deg, #1e2024, #23272b)", // example
//         designColor: "#FF014F", // example
//       },
//       // Override other theme properties specific to light mode
//     },
//   },

//   plugins: [],
// };
