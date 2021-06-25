<template>
  <div class="home-container">
    <PostFrame />
  </div>
</template>

<script>
import PostFrame from "@/components/PostFrame.vue";
export default {
  name: "TimeLine",
  components: {
    PostFrame
  }
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
