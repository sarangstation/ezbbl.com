<template>
  <div class="page--home">
    <BibleList />
  </div>
</template>

<script>
import BibleList from "./BibleList/BibleList";

export default {
  name: "Home",
  components: { BibleList }
};
</script>
