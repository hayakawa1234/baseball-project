<template>
  <div class="header-container">
    <v-col md="12" align="center">
      <div class="toolber-container">
        <v-toolbar color="white" height="75px">
          <div class="header-menu">
            <div class="title-area">
              <span>baseballProject</span>
            </div>
            <div class="hamburger-menu">
              <HamburgerMenu v-show="hamburgerMenuFlag" />
            </div>
          </div>
          <div class="header-link">
            <HeaderLink
              :homeFlag.sync="homeFlag"
              :timeFlag.sync="timeFlag"
              :myteamFlag.sync="myteamFlag"
              :facilityFlag.sync="facilityFlag"
              :searchFlag.sync="searchFlag"
            />
          </div>
        </v-toolbar>
      </div>
    </v-col>
  </div>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu.vue";
import HeaderLink from "./HeaderLink.vue";
export default {
  name: "projectHeader",
  components: {
    HeaderLink,
    HamburgerMenu,
  },
  data() {
    return {
      hamburgerMenuFlag: false,
      homeFlag: false,
      timeFlag: false,
      myteamFlag: false,
      facilityFlag: false,
      searchFlag: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.calculateWindowWidth);
  },
  created() {
    this.calculateWindowWidth();
  },
  methods: {
    calculateWindowWidth() {
      let windowWidth = window.innerWidth;
      if (windowWidth < 750) {
        this.hamburgerMenuFlag = true;
        this.homeFlag = true;
        this.timeFlag = true;
        this.myteamFlag = true;
        this.facilityFlag = true;
        this.searchFlag = true;
      }
      if (windowWidth > 750) {
        this.hamburgerMenuFlag = false;
        this.homeFlag = false;
        this.timeFlag = false;
        this.myteamFlag = false;
        this.facilityFlag = false;
        this.searchFlag = false;
      }
    },
  },
};
</script>

<style lang="scss">
.header-container {
  position: fixed;
  width: 100%;
  z-index: 1;
  .title-area {
    display: inline-block;
    text-align: center;
    margin-top: 30px;
  }
  .v-toolbar__content,
  .v-toolbar__extension {
    display: inline-block;
    width: 100%;
  }
  .v-sheet.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: none;
  }
  .col {
    padding: 0px;
  }
}
.header-link {
  margin-top: 30px;
}
</style>