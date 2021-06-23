<template>
  <div class="home-container">
    <MeinImg />
    <Description />
    <Slide />
  </div>
</template>

<script>
import MeinImg from "@/components/MeinImg.vue";
import Description from "@/components/Description.vue";
import Slide from "@/components/Slide.vue";
export default {
  name: "Home",
  components: {
    MeinImg,
    Description,
    Slide,
  },
};
</script>

<style lang="scss">
.home-container {
  margin-left: 30px;
  margin-right: 30px;
}
.description-area {
  display: flex;
}
</style>
