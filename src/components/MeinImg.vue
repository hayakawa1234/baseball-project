<template>
  <div class="mein-img">
    <div class="img-area">
      <div class="koshien-area">
        <div class="koshien-img">
          <img src="../assets/koshien.png" width="450px" height="300px" />
          <div class="memory">
            <span>Memory</span>
          </div>
          <div class="record">
            <span>Record</span>
          </div>
          <div class="manegement">
            <span>Manegement</span>
          </div>
          <div class="exchange">
            <span>Exchange</span>
          </div>
          <div class="sns">
            <span>SNS</span>
          </div>
        </div>
      </div>
      <div class="gloves-area">
        <div class="title-area">
          <h2>Example...</h2>
        </div>
        <div class="gloves-img">
          <router-link to="/">
            <img src="../assets/gloves.jpeg" width="300px" height="300px" />
            <div class="gloves-mask">
              <div class="gloves-caption">サンプル1</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="baseball-img">
        <router-link to="/">
          <img src="../assets/baseball.jpeg" width="250px" height="400px" />
          <div class="baseball-mask">
            <div class="baseball-caption">サンプル2</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mein-img {
  .img-area {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .koshien-img {
    margin-top: 150px;
  }
  .baseball-img {
    margin-top: 150px;
  }
  .title-area {
    margin-top: 250px;
    margin-left: 100px;
    h2 {
      color: #bdbdbd !important;
      font-weight: 200;
    }
  }
  .gloves-img {
    margin-top: 150px;
  }
}
.koshien-img {
  position: relative;
  span {
    color: white;
  }
  .memory {
    position: absolute;
    top: 25px;
    left: 180px;
    span {
      font-size: 30px;
      font: bold;
    }
  }
  .record {
    position: absolute;
    top: 75px;
    left: 180px;
    span {
      font-size: 30px;
      font: bold;
    }
  }
  .manegement {
    position: absolute;
    top: 125px;
    left: 150px;
    span {
      font-size: 30px;
      font: bold;
    }
  }
  .exchange {
    position: absolute;
    top: 175px;
    left: 170px;
    span {
      font-size: 30px;
      font: bold;
    }
  }
  .sns {
    position: absolute;
    top: 235px;
    left: 200px;
    span {
      font-size: 30px;
      font: bold;
    }
  }
}
.gloves-img {
  height: 300px;
  width: 300px;
  overflow: hidden;
  position: relative;
  .gloves-caption {
    font-size: 35px;
    color: #fff;
    padding-top: 120px;
    padding-left: 70px;
  }
  .gloves-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  :hover .gloves-mask {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.baseball-img {
  height: 400px;
  width: 250px;
  overflow: hidden;
  position: relative;
  .baseball-caption {
    font-size: 35px;
    color: #fff;
    padding-top: 180px;
    padding-left: 50px;
  }
  .baseball-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  :hover .baseball-mask {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>