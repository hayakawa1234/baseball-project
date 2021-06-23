<template>
  <div>
    <div class="menu-icon">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </div>
    <div id="nav" class="tab-area-base">
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
        height="1000px"
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-blue--text text--accent-4"
          >
            <div class="home-menu">
              <router-link to="/">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
              </router-link>
            </div>
            <div class="time-line-menu">
              <router-link to="/timeLine">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-clock-time-two-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>TimeLine</v-list-item-title>
                </v-list-item>
              </router-link>
            </div>
            <div class="my-team-menu">
              <router-link to="/myTeam">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-microsoft-teams</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>MyTeam</v-list-item-title>
                </v-list-item>
              </router-link>
            </div>
            <div class="facility-menu">
              <router-link to="/facility">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home-group</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Facility</v-list-item-title>
                </v-list-item>
              </router-link>
            </div>
            <div class="search-menu">
              <router-link to="/teamSearch">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account-search</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>TeamSearch</v-list-item-title>
                </v-list-item>
              </router-link>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "hamburgerMenu",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss">
.menu-icon {
  display: inline-block;
  float: right;
}
.tab-area-base {
  a {
    text-decoration: none;
  }
  .time-line-menu {
    margin-top: 10px;
  }
  .my-team-menu {
    margin-top: 10px;
  }
  .facility-menu {
    margin-top: 10px;
  }
  .search-menu {
    margin-top: 10px;
  }
}
</style>