import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: {
          base: "#8d5d51",
          lighten1: "#ae6e5f"
        },
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        brown: {
          base: colors.brown.darken1,
          lighten1: colors.brown.lighten2
        }
      }
    }
  }
});
