<template>
  <v-slider
    color="secondary"
    class="class--page-slider"
    hide-details
    v-model="slider"
    thumb-label="always"
    thumb-size="30"
    max="177"
    min="1"
  >
    <!-- First page number -->
    <template v-slot:prepend>
      <div class="px-2">1</div>
    </template>

    <!-- Last page number -->
    <template v-slot:append>
      <div class="px-2">77</div>
    </template>
  </v-slider>
</template>

<script>
export default {
  name: "PageSlider",
  components: {},
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
