<template>
  <v-container class="myteam-container">
    <v-row>
      <v-col lg="12">
        <div class="img-area">
          <img src="../assets/memories.jpeg" width="100%" />
        </div>
        <div class="member-table">
          <div class="midasi-table" v-if="!appearVerticalTableFlag">
            <template>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="img-val">
                      </th>
                      <th class="number-val">
                        Number
                      </th>
                      <th class="name-val">
                        Name
                      </th>
                      <th class="throws-bats-val">
                        Throws/Bats
                      </th>
                      <th class="career-val">
                        BaseBallCareer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in desserts"
                      :key="`first-${index}`"
                    >
                    <td><router-link to="/myTeam/memberDetail"><img :src="item.imgPath"></router-link></td>
                    <td>{{ item.number }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.throwsAndBats }}</td>
                    <td>{{ item.career }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </div>
          <div class="vertical-table" v-else>
            <table id = "comparison" border = "1" style = "border-collapse: collapse" v-for="(item, index) in desserts" :key="`second-${index}`">
              <tbody align = "center">
                <tr>
                  <th></th>
                    <td><router-link to="/myTeam/memberDetail"><img :src="item.imgPath"></router-link></td>
                </tr>
                <tr>
                  <th>Number</th>
                  <td>{{ item.number }}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{{ item.name }}</td>
                </tr>
                <tr>
                  <th>Throws/Bats</th>
                  <td>{{ item.throwsAndBats }}</td>
                </tr>
                <tr>
                  <th>BaseBallCareer</th>
                  <td>{{ item.career }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      desserts: [
        {
          imgPath: require("@/assets/atBat.jpeg"),
          number: 7,
          name: "test",
          throwsAndBats: "右/左",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
        {
          imgPath: require("@/assets/allStar.jpeg"),
          number: 23,
          name: "test",
          throwsAndBats: "右/右",
          career: "test",
        },
      ],
      appearVerticalTableFlag: false,
    }
  },
  mounted: function () {
    window.addEventListener("resize", this.resizeWindow)
  },
  created() {
    this.resizeWindow()
  },
  methods: {
    resizeWindow() {
      let windowSize = 0
      windowSize = window.innerWidth
      if(windowSize <= 580) {
        this.appearVerticalTableFlag = true
      } else if(windowSize >= 580) {
        this.appearVerticalTableFlag = false
      }
    }
  }
};
</script>

<style lang="scss">
.myteam-container {
  margin-top: 150px;
  .img-area {
    max-width: 500px;
    min-width: 150px;
    max-height: 380px;
    min-width: 150px;
    margin: auto;
  }
  .member-table {
    width: 100%;
    margin-top: 30px;
  }
  .midasi-table {
    img {
      width: 100px;
      height: 100px;
    }
  }
  .vertical-table {
    margin-top: 30px;
    margin-bottom: 30px;
    table {
      width: 100%;
      table-layout: fixed;
      margin-bottom: 30px;
      border-color: rgba(0, 0, 0, 0.12);
    }
    img {
      width: 100px;
      height: 100px;
    }
    th {
      color: rgba(0, 0, 0, 0.6);
      padding: 5px;
    }
    td {
      padding: 5px;
    }
    a {
      border: none;
    }
  }
}
</style>