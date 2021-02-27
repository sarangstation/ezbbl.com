<template>
  <div class="section--bible-list">
    <v-container>
      <v-row>
        <v-col>1</v-col>
      </v-row>
    </v-container>
    <pre>
      {{ bibleIndex }}
    </pre>
  </div>
</template>

<script>
import { getBibleIndex } from "@/helpers/BibleIndex";

export default {
  name: "BibleList",
  components: {},
  data() {
    return {
      bibleIndex: undefined
    };
  },
  methods: {},
  async created() {
    this.bibleIndex = await getBibleIndex();
    console.log(this.bibleIndex);
  }
};
</script>
