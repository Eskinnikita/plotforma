// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    dark: true,
    themes: {
      light: {
        primary: "#000",
        secondary: "#000",
        accent: "#000",
        error: "#000",
        background: "#000",
      },
      dark: {
        primary: "#000",
        background: "#000",
      },
    },
  },
});
