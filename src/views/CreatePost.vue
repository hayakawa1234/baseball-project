<template>
  <div>
    <div class="top">
      <upload v-model="picture"/>
      <img :src="picture" />
    </div>
    <div class="createpost-container"></div>
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
export default {
  name: "CreatePost",
  components: { Upload },
  data() {
    return {
      picture: null
    };
  }
};
</script>

<style lang="scss">
.createpost-container {
  margin-top: 130px;
  margin-bottom: 90px;
  margin-left: 30px;
  margin-right: 30px;
}
.description-area {
  display: flex;
}
.top {
  margin-top: 200px;
}
</style>