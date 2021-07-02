<template>
  <div class=createpost-link-area>
    <v-btn
      :key="icon"
      :color="color"
      large
      dark
      retain-focus-on-click
      absolute
      bottom
      right
      class="post-button"
    >
      <router-link to="/createpost">
        <v-icon size="24px">{{ icon }}</v-icon>
      </router-link>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return { color: "deep-orange", icon: "mdi-pencil" };
  }
};
</script>

<style lang="scss">
.createpost-link-area {
  display: flex;
  justify-content: space-around;
  a {
    color: #ffffff !important;
    text-decoration: none;
  }
}
.post-button {
  margin-right: 80px;
}
</style>