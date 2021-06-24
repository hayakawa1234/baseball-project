<template>
  <div class="slide-area">
    <div class="left-slide">
    <template>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </template>
    </div>
    <div class="right-slide">
    <template>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/allStar.jpeg"),
        },
        {
          src: require("@/assets/atBat.jpeg"),
        },
        {
          src: require("@/assets/set.png"),
        },
        {
          src: require("@/assets/memories.jpeg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.slide-area {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .left-slide {
    width: 350px;
    margin-top: 50px;
  }
  .right-slide {
    width: 350px;
    margin-top: 50px;
  }
}
</style>