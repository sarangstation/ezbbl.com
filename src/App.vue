<template>
  <v-app>
    <v-main>
      <v-app-bar app bottom color="primary lighten-1">
        <PageSlider />
      </v-app-bar>

      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PageSlider from "@/components/PageSlider/PageSlider";

export default {
  name: "App",

  components: {
    HelloWorld,
    PageSlider
  },

  data: () => ({
    slider: 1
  })
};
</script>

<style lang="scss">
.class--page-slider {
  .v-slider__thumb {
    width: 30px !important;
    height: 30px !important;
    left: -15px !important;
    //opacity: 0.6;

    &::before {
      left: -3px !important;
      top: -3px !important;
    }
  }
  .v-slider__thumb-label {
    bottom: 6px !important;
  }
}
</style>
