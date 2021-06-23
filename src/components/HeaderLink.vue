<template>
  <div class="link-area">
    <div class="home-link" v-show="!homeFlag">
      <router-link to="/">
        <span>Home</span>
      </router-link>
    </div>
    <div class="time-line-link" v-show="!timeFlag">
      <router-link to="/timeLine">
        <span>TimeLine</span>
      </router-link>
    </div>
    <div class="myteam-link" v-show="!myteamFlag">
      <router-link to="/myTeam">
        <span>MyTeam</span>
      </router-link>
    </div>
    <div class="facility-link" v-show="!facilityFlag">
      <router-link to="/facility">
        <span>Facility</span>
      </router-link>
    </div>
    <div class="team-search-link" v-show="!searchFlag">
      <router-link to="/teamSeach">
        <span>TeamSearch</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    homeFlag: {
      type: Boolean,
      default: false,
    },
    timeFlag: {
      type: Boolean,
      default: false,
    },
    myteamFlag: {
      type: Boolean,
      default: false,
    },
    facilityFlag: {
      type: Boolean,
      default: false,
    },
    searchFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.link-area {
  display: flex;
  justify-content: space-around;
  .home-link {
    margin-left: 150px;
  }
  .team-search-link {
    margin-right: 150px;
  }
  a {
    color: #bdbdbd !important;
    text-decoration: none;
  }
}
</style>