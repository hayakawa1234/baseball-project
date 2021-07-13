<template>
  <div class="facility-container">
    <div class="search-form-area">
      <div class="text-field">
        <v-text-field
          v-model="message2"
          solo
          label="野球場を探す"
        ></v-text-field>
      </div>
      <div class="search-btn">
        <v-btn>検索</v-btn>
      </div>
    </div>
    <MapItem />
  </div>
</template>

<script>
import MapItem from "@/components/MapItem.vue";
export default {
  components: {
    MapItem,
  },
};
</script>

<style lang="scss">
.facility-container {
  margin-top: 150px;
  .v-btn {
    border: 2px solid black;
  }
}
.search-form-area {
  display: flex;
  justify-content: center;
}
.search-btn {
  margin-left: 20px;
  margin-top: 5px;
  .v-text-field.v-text-field--solo .v-input__control {
    width: 300px;
  }
}
</style>