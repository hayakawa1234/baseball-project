<template>
  <div id="app">
    <v-app>
      <ProjectHeader />
      <div>
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
import ProjectHeader from "@/components/ProjectHeader.vue";

export default {
  components: { ProjectHeader }
};
</script>

<style lang="scss">
</style>
