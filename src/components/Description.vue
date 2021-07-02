<template>
  <div class="contents-area">
    <div class="sns-description" data-delighter>
      <v-card height="400px">
        <div>
          <strong>は交流できる<br />SNSサイトです。</strong>
        </div>
      </v-card>
    </div>
    <div class="team-description">
      <v-card height="400px">
        <div>
          <strong>は交流できる<br />SNSサイトです。</strong>
        </div>
      </v-card>
    </div>
    <div class="search-description">
      <v-card height="400px">
        <div>
          <strong>は交流できる<br />SNSサイトです。</strong>
        </div>
      </v-card>
    </div>
    <div class="facility-description">
      <v-card height="400px">
        <div>
          <strong>は交流できる<br />SNSサイトです。</strong>
        </div>
      </v-card>
    </div>
    <div class="all-description">
      <v-card height="400px">
        <div>
          <strong>は交流できる<br />SNSサイトです。</strong>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contents-area {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 120px;
  background-color: #cfd8dc;
  .sns-description {
    margin-top: 30px;
  }
  .team-description {
    margin-top: 30px;
  }
  .search-description {
    margin-top: 30px;
  }
  .facility-description {
    margin-top: 30px;
  }
  .all-description {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

/* 基本のスタイル */
   .sns-description .delighter {
      transition: all .3s ease-out;
      transform: translateX(-100%);
      opacity: 0;
   }
 
/* スタート時のスタイル */
   .sns-description .delighter.started {
      transform: none;
      opacity: 1;
   }
 
/* エンド時のスタイル */
   .sns-description .delighter.started.ended {
      border: solid red 10px;
   }
</style>