<template>
  <div class="map-item-area">
    <div class="map-img-area">
      <img src="../assets/map-japan.png" />
    </div>
    <div class="tohoku-area" :style="tohokuStyle">
      <template>
        <v-row justify="center">
          <v-dialog v-model="tohokuDialog" persistent max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <div class="tohoku-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  北海道・東北
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> 北海道・東北 </v-card-title>
              <v-card-text>
                <div class="tohoku-card-btn">
                  <div class="tohoku-upper-btn">
                    <div class="hokkaido-btn">
                      <v-btn color="blue lighten-5">北海道</v-btn>
                    </div>
                    <div class="aomori-btn">
                      <v-btn color="blue lighten-5">青森</v-btn>
                    </div>
                    <div class="akita-btn">
                      <v-btn color="blue lighten-5">秋田</v-btn>
                    </div>
                    <div class="iwate-btn">
                      <v-btn color="blue lighten-5">岩手</v-btn>
                    </div>
                  </div>
                  <div class="tohoku-under-btn">
                    <div class="yamagata-btn">
                      <v-btn color="blue lighten-5">山形</v-btn>
                    </div>
                    <div class="miyagi-btn">
                      <v-btn color="blue lighten-5">宮城</v-btn>
                    </div>
                    <div class="fukusima-btn">
                      <v-btn color="blue lighten-5">福島</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue lighten-1"
                  text
                  @click="tohokuDialog = false"
                >
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
    <div class="kanto-area" :style="kantoStyle">
      <template>
        <v-row justify="center">
          <v-dialog
            v-model="kantoDialog"
            persistent
            max-width="290"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="kanto-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  関東
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> 関東 </v-card-title>
              <v-card-text>
                <div class="kanto-card-btn">
                  <div class="kanto-upper-btn">
                    <div class="tokyo-btn">
                      <v-btn color="blue lighten-5">東京</v-btn>
                    </div>
                    <div class="tiba-btn">
                      <v-btn color="blue lighten-5">千葉</v-btn>
                    </div>
                    <div class="saitama-btn">
                      <v-btn color="blue lighten-5">埼玉</v-btn>
                    </div>
                    <div class="kanagawa-btn">
                      <v-btn color="blue lighten-5">神奈川</v-btn>
                    </div>
                  </div>
                  <div class="kanto-under-btn">
                    <div class="gunma-btn">
                      <v-btn color="blue lighten-5">群馬</v-btn>
                    </div>
                    <div class="tochigi-btn">
                      <v-btn color="blue lighten-5">栃木</v-btn>
                    </div>
                    <div class="ibaragi-btn">
                      <v-btn color="blue lighten-5">茨城</v-btn>
                    </div>
                    <div class="yamanashi-btn">
                      <v-btn color="blue lighten-5">山梨</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue lighten-1" text @click="kantoDialog = false">
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
    <div class="tyubu-area" :style="tyubuStyle">
      <template>
        <v-row justify="center">
          <v-dialog
            v-model="tyubuDialog"
            persistent
            max-width="290"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="tyubu-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  中部
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> 中部 </v-card-title>
              <v-card-text
                ><div class="tyubu-card-btn">
                  <div class="tyubu-upper-btn">
                    <div class="nigata-btn">
                      <v-btn color="blue lighten-5">新潟</v-btn>
                    </div>
                    <div class="toyama-btn">
                      <v-btn color="blue lighten-5">富山</v-btn>
                    </div>
                    <div class="ishikawa-btn">
                      <v-btn color="blue lighten-5">石川</v-btn>
                    </div>
                  </div>
                  <div class="tyubu-center-btn">
                    <div class="fukui-btn">
                      <v-btn color="blue lighten-5">福井</v-btn>
                    </div>
                    <div class="nagano-btn">
                      <v-btn color="blue lighten-5">長野</v-btn>
                    </div>
                    <div class="shizuoka-btn">
                      <v-btn color="blue lighten-5">静岡</v-btn>
                    </div>
                  </div>
                  <div class="tyubu-under-btn">
                    <div class="gihu-btn">
                      <v-btn color="blue lighten-5">岐阜</v-btn>
                    </div>
                    <div class="aichi-btn">
                      <v-btn color="blue lighten-5">愛知</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue lighten-1" text @click="tyubuDialog = false">
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
    <div class="kinki-area" :style="kinkiStyle">
      <template>
        <v-row justify="center">
          <v-dialog
            v-model="kinkiDialog"
            persistent
            max-width="290"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="kinki-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  近畿
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> </v-card-title>
              <v-card-text
                ><div class="kinki-card-btn">
                  <div class="kinki-upper-btn">
                    <div class="osaka-btn">
                      <v-btn color="blue lighten-5">大阪</v-btn>
                    </div>
                    <div class="kyoto-btn">
                      <v-btn color="blue lighten-5">京都</v-btn>
                    </div>
                    <div class="mie-btn">
                      <v-btn color="blue lighten-5">三重</v-btn>
                    </div>
                    <div class="shiga-btn">
                      <v-btn color="blue lighten-5">滋賀</v-btn>
                    </div>
                  </div>
                  <div class="kinki-under-btn">
                    <div class="hyogo-btn">
                      <v-btn color="blue lighten-5">兵庫</v-btn>
                    </div>
                    <div class="nara-btn">
                      <v-btn color="blue lighten-5">奈良</v-btn>
                    </div>
                    <div class="wakayama-btn">
                      <v-btn color="blue lighten-5">和歌山</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue lighten-1" text @click="kinkiDialog = false">
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
    <div class="shikoku-tyugoku-area" :style="shikokuStyle">
      <template>
        <v-row justify="center">
          <v-dialog
            v-model="shikokuDialog"
            persistent
            max-width="290"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="shikoku-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  中国・四国
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> 中国・四国 </v-card-title>
              <v-card-text
                ><div class="shikoku-card-btn">
                  <div class="shikoku-upper-btn">
                    <div class="tottori-btn">
                      <v-btn color="blue lighten-5">鳥取</v-btn>
                    </div>
                    <div class="shimane-btn">
                      <v-btn color="blue lighten-5">島根</v-btn>
                    </div>
                    <div class="-btn">
                      <v-btn color="blue lighten-5">岡山</v-btn>
                    </div>
                  </div>
                  <div class="tyubu-center-btn">
                    <div class="hiroshima-btn">
                      <v-btn color="blue lighten-5">広島</v-btn>
                    </div>
                    <div class="yamaguchi-btn">
                      <v-btn color="blue lighten-5">山口</v-btn>
                    </div>
                  </div>
                  <div class="tyubu-under-btn">
                    <div class="kochi-btn">
                      <v-btn color="blue lighten-5">高知</v-btn>
                    </div>
                    <div class="tokushima-btn">
                      <v-btn color="blue lighten-5">徳島</v-btn>
                    </div>
                    <div class="ehime-btn">
                      <v-btn color="blue lighten-5">愛媛</v-btn>
                    </div>
                    <div class="kagawa-btn">
                      <v-btn color="blue lighten-5">香川</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue lighten-1"
                  text
                  @click="shikokuDialog = false"
                >
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
    <div class="kyusyu-okinawa-area" :style="kyusyuStyle">
      <template>
        <v-row justify="center">
          <v-dialog
            v-model="kyusyuDialog"
            persistent
            max-width="290"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="kyusyu-btn">
                <v-btn color="grey lighten-5" v-bind="attrs" v-on="on">
                  九州・沖縄
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title class="text-h5"> 九州・沖縄 </v-card-title>
              <v-card-text>
                <div class="kyusyu-card-btn">
                  <div class="kyusyu-upper-btn">
                    <div class="fukuoka-btn">
                      <v-btn color="blue lighten-5">福岡</v-btn>
                    </div>
                    <div class="saga-btn">
                      <v-btn color="blue lighten-5">佐賀</v-btn>
                    </div>
                    <div class="nagasaki-btn">
                      <v-btn color="blue lighten-5">長崎</v-btn>
                    </div>
                  </div>
                  <div class="kyusyu-center-btn">
                    <div class="kumamoto-btn">
                      <v-btn color="blue lighten-5">熊本</v-btn>
                    </div>
                    <div class="oita-btn">
                      <v-btn color="blue lighten-5">大分</v-btn>
                    </div>
                    <div class="miyazaki-btn">
                      <v-btn color="blue lighten-5">宮崎</v-btn>
                    </div>
                  </div>
                  <div class="kyusyu-under-btn">
                    <div class="kagoshima-btn">
                      <v-btn color="blue lighten-5">鹿児島</v-btn>
                    </div>
                    <div class="okinawa-btn">
                      <v-btn color="blue lighten-5">沖縄</v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue lighten-1"
                  text
                  @click="kyusyuDialog = false"
                >
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Facility",
  data() {
    return {
      dialog: false,
      tohokuDialog: false,
      kantoDialog: false,
      tyubuDialog: false,
      kinkiDialog: false,
      shikokuDialog: false,
      kyusyuDialog: false,
      lastWindowSize: 768,
      tohokuTop: "50%",
      tohokuLeft: "59%",
      kantoTop: "73%",
      kantoLeft: "61%",
      tyubuTop: "65%",
      tyubuLeft: "54%",
      kinkiTop: "75%",
      kinkiLeft: "49%",
      shikokuTop: "64%",
      shikokuLeft: "38%",
      kyusyuTop: "78%",
      kyusyuLeft: "33%",
    };
  },
  mounted: function () {
    window.addEventListener("resize", this.resizeWindow);
  },
  computed: {
    tohokuStyle() {
      return {
        position: "absolute",
        top: this.tohokuTop,
        left: this.tohokuLeft,
      };
    },
    kantoStyle() {
      return {
        position: "absolute",
        top: this.kantoTop,
        left: this.kantoLeft,
      };
    },
    tyubuStyle() {
      return {
        position: "absolute",
        top: this.tyubuTop,
        left: this.tyubuLeft,
      };
    },
    kinkiStyle() {
      return {
        position: "absolute",
        top: this.kinkiTop,
        left: this.kinkiLeft,
      };
    },
    shikokuStyle() {
      return {
        position: "absolute",
        top: this.shikokuTop,
        left: this.shikokuLeft,
      };
    },
    kyusyuStyle() {
      return {
        position: "absolute",
        top: this.kyusyuTop,
        left: this.kyusyuLeft,
      };
    },
  },
  created() {
    this.resizeWindow();
  },
  methods: {
    resizeWindow() {
      var windowSize = window.innerWidth;
      if (this.lastWindowSize > window.innerWidth) {
        if (windowSize < 768 && windowSize > 576) {
          this.tohokuLeft = "65%";
          this.kantoLeft = "68%";
          this.tyubuLeft = "58%";
          this.kinkiLeft = "48%";
          this.shikokuLeft = "30%";
          this.kyusyuLeft = "22%";
        } else if (windowSize < 576 && windowSize > 400) {
          this.tohokuLeft = "70%";
          this.kantoLeft = "74%";
          this.tyubuLeft = "61%";
          this.shikokuLeft = "27%";
          this.kyusyuLeft = "10%";
        } else if (windowSize < 400) {
          this.tohokuTop = "45%";
          this.toohokuLeft = "45%";
          this.kantoTop = "66%";
          this.kantoLeft = "76%";
          this.tyubuTop = "56%";
          this.tyubuLeft = "60%";
          this.kinkiTop = "70%";
          this.kinkiLeft = "47%";
          this.shikokuTop = "56%";
          this.shikokuLeft = "25%";
          this.kyusyuTop = "70%";
          this.kyusyuLeft = "5%";
        }
        this.lastWindowSize = windowSize;
      } else {
        // 小さいウインドウから大きいウインドウに変わるときの場合
        if (windowSize > 400 && windowSize < 576) {
          this.tohokuLeft = "70%";
          this.tohokuTop = "50%";
          this.kantoLeft = "74%";
          this.kantoTop = "73%";
          this.tyubuLeft = "61%";
          this.tyubuTop = "65%";
          this.kinkiTop = "75%";
          this.kinkiLeft = "48%";
          this.shikokuTop = "64%";
          this.shikokuLeft = "27%";
          this.kyusyuTop = "78%";
          this.kyusyuLeft = "10%";
        } else if (windowSize > 576 && windowSize < 768) {
          this.tohokuLeft = "65%";
          this.kantoLeft = "68%";
          this.tyubuLeft = "58%";
          this.shikokuLeft = "30%";
          this.kyusyuLeft = "20%";
        } else if (windowSize > 768) {
          this.tohokuLeft = "59%";
          this.kantoLeft = "61%";
          this.tyubuLeft = "54%";
          this.kinkiLeft = "49%";
          this.shikokuLeft = "40%";
          this.kyusyuLeft = "33%";
        }
        this.lastWindowSize = windowSize;
      }
    },
  },
};
</script>

<style lang="scss">
.map-img-area {
  position: relative;
  margin: auto;
  max-height: 500px;
  max-width: 500px;
  min-height: 300px;
  min-width: 300px;
  img {
    height: auto;
    width: 100%;
  }
}
.tohoku-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.tohoku-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.kanto-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.kanto-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.tyubu-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.tyubu-center-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.tyubu-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.kinki-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.kinki-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.shikoku-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.shikoku-center-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.shikoku-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.kyusyu-upper-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.kyusyu-center-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.kyusyu-under-btn {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.tohoku-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
.kanto-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
.tyubu-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
.kinki-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
.shikoku-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
.kyusyu-btn {
  .v-btn:not(.v-btn--round).v-size--default {
    border: 2px solid black !important;
  }
}
</style>