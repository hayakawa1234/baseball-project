<template>
  <div id="app">
    <v-app>
      <div>
        <ProjectHeader />
      </div>
      <div>
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
import ProjectHeader from "@/components/ProjectHeader.vue";
export default {
  components: { ProjectHeader },
};
</script>

<style lang="scss">
</style>
