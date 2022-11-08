// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {},
  theme: {
    defaultTheme: "light",
    dark: true,
    options: { customProperties: true },
    themes: {
      light: {
        primary: {
          base: "#232323",
          darken1: "#04c279",
        },
        secondary: "#000",
        accent: "#000",
        error: "#000",
        background: "#000",
      },
      dark: {
        primary: {
          base: "#232323",
          darken1: "#04c279",
        },
        background: "#000",
      },
    },
  },
});
