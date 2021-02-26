<template>
  <v-app>
    <v-app-bar app color="primary lighten-1" bottom>
      <v-slider
        class="class--page-slider"
        hide-details
        v-model="slider"
        thumb-label="always"
        thumb-size="30"
        max="177"
        min="1"
      >
        <template v-slot:prepend>
          <div class="px-2">1</div>
        </template>
        <template v-slot:append>
          <div class="px-2">77</div>
        </template>
      </v-slider>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
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
