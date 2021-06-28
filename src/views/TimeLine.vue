<template>
<div>
  <div class="home-container">
    <PostFrame />
  </div>
  <Footer />
</div>
</template>

<script>
import PostFrame from "@/components/PostFrame.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "TimeLine",
  components: {
    PostFrame,
    Footer
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
